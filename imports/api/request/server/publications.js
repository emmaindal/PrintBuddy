import {Meteor} from 'meteor/meteor';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import  {Request} from '../request.js';

Meteor.publish('jobs-request', function request(lat, lng, canColor) {
    check(lat, Number);
    check(lng, Number);
    check(canColor, Boolean);
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    ReactiveAggregate(this, Request, [
        {
            "$geoNear": {
                "near": {
                    "type": "Point",
                    "coordinates": [lng, lat]
                },
                "distanceField": "distance",
                "spherical": true,
                "query": {
                    $or: [{
                        delivery: false,
                        isCancel: false,
                        isDone: false,
                        needColor: false,
                        chosenOne: {$exists: false},
                        lastDate: {$gte: start}
                    }, {
                        delivery: false,
                        isCancel: false,
                        isDone: false,
                        needColor: canColor,
                        chosenOne: {$exists: false},
                        lastDate: {$gte: start}
                    }]
                }
            }
        },
        {
            "$redact": {
                "$cond": {
                    "if": {"$lt": ["$distance", "$radius"]},
                    "then": "$$KEEP",
                    "else": "$$PRUNE"
                }
            }
        }
    ]);
});

Meteor.publish('jobs-request-delivery', function request(lat, lng, canColor) {
    check(lat, Number);
    check(lng, Number);
    check(canColor, Boolean);
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    ReactiveAggregate(this, Request, [
        {
            "$geoNear": {
                "near": {
                    "type": "Point",
                    "coordinates": [lng, lat]
                },
                "distanceField": "distance",
                "spherical": true,
                "maxDistance": 100000,
                "query": {
                    $or: [{
                        delivery: true,
                        isCancel: false,
                        isDone: false,
                        needColor: false,
                        chosenOne: {$exists: false},
                        lastDate: {$gte: start}
                    }, {
                        delivery: true,
                        isCancel: false,
                        isDone: false,
                        needColor: canColor,
                        chosenOne: {$exists: false},
                        lastDate: {$gte: start}
                    }]
                }
            }
        }
    ]);
});


Meteor.publish('user-request', function userrequest() {
    if (!this.userId) {
        return this.ready();
    }

    return Request.find({userReqId: this.userId, isCancel: false, finishAt: {$exists: false}});
});

Meteor.publish('myjob-request-active', function myjobrequestactive() {
    if (!this.userId) {
        return this.ready();
    }

    return Request.find({chosenOne: this.userId, isDone: false, isCancel: false});
});

Meteor.publish('myjob-request-pending', function myjobrequestpending() {
    if (!this.userId) {
        return this.ready();
    }

    return Request.find({possibleOnes: this.userId, isDone: false, isCancel: false, chosenOne: {$exists: false}});
});


Meteor.publish('myjob-request-buddy-chat', function myjobrequestactive() {
    if (!this.userId) {
        return this.ready();
    }

    return Request.find({chosenOne: this.userId});
});









