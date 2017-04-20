import {Meteor} from 'meteor/meteor';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import  {Request} from '../request.js';


Meteor.publish('request', function request() {
    // Todo fixa här så användaren endast ser de requesten de kan ta.

    return Request.find();
});


Meteor.publish('jobs-request', function request(lat, lng) {
    // Todo fixa här så användaren endast ser de requesten de kan ta.
    check(lat, Number);
    check(lng, Number);

    ReactiveAggregate(this, Request, [
        {
            "$geoNear": {
                "near": {
                    "type": "Point",
                    "coordinates": [lng, lat]
                },
                "distanceField": "distance",
                "spherical": true
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

Meteor.publish('jobs-request-delivery', function request(lat, lng) {
    check(lat, Number);
    check(lng, Number);

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
                "query": {delivery: true}
            }
        }
    ]);
});


Meteor.publish('user-request', function userrequest() {
    if (!this.userId) {
        return this.ready();
    }

    return Request.find({userReqId: this.userId, isDone: false});
});

Meteor.publish('myjob-request-active', function myjobrequestactive() {
    if (!this.userId) {
        return this.ready();
    }

    return Request.find({chosenOne: this.userId, isDone: false});
});


Meteor.publish('myjob-request-pending', function myjobrequestpending() {
    if (!this.userId) {
        return this.ready();
    }

    return Request.find({possibleOnes: this.userId, isDone: false, chosenOne: {$exists: false}});
});









