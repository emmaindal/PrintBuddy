import {Request} from './request/request';

export function sendNewRequestPush(userId, title, lat, lng, radie) {

    const users = Meteor.users.aggregate([
        {
            "$geoNear": {
                "near": {
                    "type": "Point",
                    "coordinates": [lng, lat]
                },
                "distanceField": "distance",
                "spherical": true,
                "query": {
                    pushIds: {$gt: []},
                    _id: {$ne: userId}
                }
            }
        },
        {
            "$redact": {
                "$cond": {
                    "if": {"$lt": ["$distance", radie]},
                    "then": "$$KEEP",
                    "else": "$$PRUNE"
                }
            }
        }]).map((user) => {
        return user.pushIds[0];
    });

    console.log(users);

    if (users.length > 0) {
        var message = {
            app_id: "33b7f7cb-34e0-4172-8a94-db58be5f8106",
            contents: {
                "en": "There is a new job in your area!"
            },
            include_player_ids: users
        };
        send(message)
    }
}


function send(data) {
    const headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj"
    };

    const options = {
        host: "onesignal.com",
        port: 443,
        path: "/api/v1/notifications",
        method: "POST",
        headers: headers
    };

    const https = require('https');
    const req = https.request(options, function (res) {
        res.on('data', function (data) {
            console.log("Response:");
            console.log(JSON.parse(data));
        });
    });

    req.on('error', function (e) {
        console.log("ERROR:");
        console.log(e);
    });

    req.write(JSON.stringify(data));
    req.end();
}
