import {Meteor} from 'meteor/meteor';
import {Request} from '../request/request';

export function sendNewRequestEmailPickUp(userId, title, lat, lng, radius, needColor) {
    let emails = [];

    // Look up all pickups
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
                    _id: {$ne: userId},
                    emailNotification: true
                }
            }
        },
        {
            "$redact": {
                "$cond": {
                    "if": {"$lt": ["$distance", radius]},
                    "then": "$$KEEP",
                    "else": "$$PRUNE"
                }
            }
        }, {
            $lookup: {
                from: "printbuddy",
                localField: "_id",
                foreignField: "userId",
                as: "printbuddy"
            }
        }]).map((user) => {
        if (needColor) {
            if (user.printbuddy[0].isActive && user.printbuddy[0].canColor == true) {
                emails.push(user.emails[0].address);
            }
        } else {
            if (user.printbuddy[0].isActive) {
                emails.push(user.emails[0].address);
            }
        }
    });


    if (emails.length > 0) {
        emails.forEach(function (email) {
            Meteor.call(
                'sendEmail',
                email,
                '<noreply@printbuddy.se>',
                'New print jobs in your area',
                'New print jobs in your area. Go to http://printbuddy.se'
            );
        });
    }
}

export function sendNewRequestEmailDelivery(userId, title, lat, lng, needColor) {
    let emails = [];

    // Look up all pickups
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
                    _id: {$ne: userId},
                    emailNotification: true
                }
            }
        },
        {
            "$redact": {
                "$cond": {
                    "if": {"$lt": ["$distance", 5000]},
                    "then": "$$KEEP",
                    "else": "$$PRUNE"
                }
            }
        }, {
            $lookup: {
                from: "printbuddy",
                localField: "_id",
                foreignField: "userId",
                as: "printbuddy"
            }
        }]).map((user) => {
        if (needColor) {
            if (user.printbuddy[0].isActive && user.printbuddy[0].canColor == true) {
                emails.push(user.emails[0].address);
            }
        } else {
            if (user.printbuddy[0].isActive) {
                emails.push(user.emails[0].address);
            }
        }
    });


    if (emails.length > 0) {
        emails.forEach(function (email) {
            Meteor.call(
                'sendEmail',
                email,
                '<noreply@printbuddy.se>',
                'New print jobs for delivery in your area',
                'New print jobs for delivery in your area. Go to http://printbuddy.se'
            );
        });
    }
}


export  function sendAppliedEmail(user) {
    if(user.emailNotification){
        Meteor.call(
            'sendEmail',
            user.emails[0].address,
            '<noreply@printbuddy.se>',
            'Someone applied for your request',
            'Someone applied for your request. Go to http://printbuddy.se'
        );
    }
}

export  function sendAcceptEmail(user) {

    if(user.emailNotification){
        Meteor.call(
            'sendEmail',
            user.emails[0].address,
            '<noreply@printbuddy.se>',
            'You got accepted for a job',
            'You got accepted for a job. Go to http://printbuddy.se'
        );
    }
}