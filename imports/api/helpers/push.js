import {Meteor} from 'meteor/meteor';

export function sendNewRequestPushPickUp(userId, title, lat, lng, radius,needColor) {

    let pushIds = [];
    Meteor.users.aggregate([
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
            },
        },
        {
            "$redact": {
                "$cond": {
                    "if": {"$lt": ["$distance", radius]},
                    "then": "$$KEEP",
                    "else": "$$PRUNE"
                }
            }
        },{ $lookup: {
            from: "printbuddy",
            localField: "_id",
            foreignField: "userId",
            as: "printbuddy"
        }}
    ]).map((user) => {
        if (needColor){
            if(user.printbuddy[0].isActive && user.printbuddy[0].canColor == true) {
                pushIds.push(...user.pushIds);
            }
        }else {
            if(user.printbuddy[0].isActive) {
                pushIds.push(...user.pushIds);
            }
        }
    });

    if (pushIds.length > 0) {
        var message = {
            app_id: "33b7f7cb-34e0-4172-8a94-db58be5f8106",
            contents: {
                "en": "Someone need a printout in your area!"
            },
            include_player_ids: pushIds
        };
        send(message);
    }
}

export function sendNewRequestPushDelivery(userId, title, lat, lng,needColor) {

    let pushIds = [];
    Meteor.users.aggregate([
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
            },
        },
        {
            "$redact": {
                "$cond": {
                    "if": {"$lt": ["$distance", 5000]},
                    "then": "$$KEEP",
                    "else": "$$PRUNE"
                }
            }
        },{ $lookup: {
            from: "printbuddy",
            localField: "_id",
            foreignField: "userId",
            as: "printbuddy"
        }}
    ]).map((user) => {
        if (needColor){
            if(user.printbuddy[0].isActive && user.printbuddy[0].canColor == true) {
                pushIds.push(...user.pushIds);
            }
        }else {
            if(user.printbuddy[0].isActive) {
                pushIds.push(...user.pushIds);
            }
        }
    });

    if (pushIds.length > 0) {
        var message = {
            app_id: "33b7f7cb-34e0-4172-8a94-db58be5f8106",
            contents: {
                "en": "Someone need a printout delivered in your area!"
            },
            include_player_ids: pushIds
        };
        send(message);
    }
}

export function sendAppliedPush(user) {

    if (user.pushIds.length > 0) {
        var message = {
            app_id: "33b7f7cb-34e0-4172-8a94-db58be5f8106",
            contents: {
                "en": "Someone offered to print for you!"
            },
            include_player_ids: user.pushIds
        };
        send(message);
    }
}


export function sendAcceptPush(user) {

    if (user.pushIds.length > 0) {
        var message = {
            app_id: "33b7f7cb-34e0-4172-8a94-db58be5f8106",
            contents: {
                "en": "You have been choosen for a printjob!"
            },
            include_player_ids: user.pushIds
        };
        send(message);
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
