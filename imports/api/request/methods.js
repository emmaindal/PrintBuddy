import {Meteor} from 'meteor/meteor';
import {_} from 'meteor/underscore';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {DDPRateLimiter} from 'meteor/ddp-rate-limiter';

import {Request} from './request.js';


export const insert = new ValidatedMethod({
    name: 'request.insert',
    validate: new SimpleSchema({
        delivery: {type: Boolean},
        needColor: {type: Boolean},
        reward: {type: Number},
        radius: {type: Number},
        lastDate: {type: Date}
    }).validator(),
    run({delivery, needColor, reward, radius, lastDate}) {
        if (!this.userId) {
            throw new Meteor.Error('request.insert.unauthorized', 'Must be logged to add item.');
        }

        const req = {
            userReqId: this.userId,
            delivery: delivery,
            needColor: needColor,
            reward: reward,
            radius: radius,
            delivery: delivery,
            lastDate: lastDate,
            isDone: false
        }

        return Request.insert(req);
    },
});


const REQUEST_METHODS = _.pluck([
    insert,
], 'name');

if (Meteor.isServer) {
    // Only allow 5 todos operations per connection per second
    DDPRateLimiter.addRule({
        name(name) {
            return _.contains(REQUEST_METHODS, name);
        },

        // Rate limit per connection ID
        connectionId() {
            return true;
        },
    }, 3, 1000);
}