export function insertFile(fileData) {
    return ensureUploadFolderPresent().then(function (folder) {
        return addFileToGoolgeDrive(fileData, folder).then(function (addedFile) {
            return insertPermission(addedFile.result.id).then(function () {
                return getFile(addedFile.result.id).then(function (f) {
                    return f.result.webContentLink;
                });
            });
        });
    });
}

export function checkLogin() {
    return new Promise((resolve, reject) => {
        gapi.auth2.getAuthInstance().then(function (t) {
            resolve(t.isSignedIn.get());
        }, function (reason) {
            reject(reason);
        });
    });
}

function getFile(id) {
    return gapi.client.drive.files.get(
        {fileId: id, fields: 'webContentLink'}
    )
}

function ensureUploadFolderPresent() {
    return gapi.client.drive.files.list(
        {q: "mimeType = 'application/vnd.google-apps.folder' and trashed = false and name = 'PrintBuddy Folder'"}
    ).then(function (files) {
        var directory = files.result.files;

        if (!directory.length) {
            return createFolder().then(function (res) {
                return res.result;
            });
        } else {
            return directory[0];
        }
    });
}

function createFolder() {

    var body = {
        'name': "PrintBuddy Folder",
        'mimeType': "application/vnd.google-apps.folder"
    };
    return gapi.client.drive.files.create({
        'resource': body
    });

}

function insertPermission(id) {
    return gapi.client.drive.permissions.create({
        'fileId': id,
        'resource': {
            "withLink": true,
            "role": "reader",
            "type": "anyone"
        }
    })
}

function addFileToGoolgeDrive(fileData, folder) {
    return new Promise((resolve, reject) => {
        const boundary = '-------314159265358979323846';
        const delimiter = "\r\n--" + boundary + "\r\n";
        const close_delim = "\r\n--" + boundary + "--";

        var reader = new FileReader();
        reader.readAsBinaryString(fileData);
        reader.onload = function (e) {

            var contentType = fileData.type || 'application/octet-stream';
            var metadata = {
                'name': fileData.name,
                'mimeType': contentType,
                "parents": [folder.id],
                'fields': 'id, webViewLink'
            };

            const base64Data = btoa(reader.result);
            const multipartRequestBody =
                delimiter +
                'Content-Type: application/json\r\n\r\n' +
                JSON.stringify(metadata) +
                delimiter +
                'Content-Type: ' + contentType + '\r\n' +
                'Content-Transfer-Encoding: base64\r\n' +
                '\r\n' +
                base64Data +
                close_delim;

            gapi.client.request({
                'path': '/upload/drive/v3/files?uploadType=multipart',
                'method': 'POST',
                'params': {'uploadType': 'multipart'},
                'headers': {
                    'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
                },
                'body': multipartRequestBody
            }).then(function (file) {
                resolve(file);
            }, function (reason) {
                reject(reason);
            });
        }
    });
}