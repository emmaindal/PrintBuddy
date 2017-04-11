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
        pages: {type: Number},
        copies: {type: Number},
        currency: {type: String},
        radius: {type: Number},
        lastDate: {type: Date},
        title: {type: String}
    }).validator(),
    run({delivery, needColor, reward, radius, lastDate, pages, copies, currency, title}) {
        if (!this.userId) {
            throw new Meteor.Error('request.insert.unauthorized', 'Must be logged to add item.');
        }

        const req = {
            userReqId: this.userId,
            delivery: delivery,
            needColor: needColor,
            reward: reward,
            radius: radius,
            lastDate: lastDate,
            isDone: false,
            title: title,
            pages: pages,
            copies: copies,
            currency: currency
        }

        return Request.insert(req);
    },
});

export const applyRequest = new ValidatedMethod({
    name: 'request.applyRequest',
    validate: new SimpleSchema({
        requestId: {type: String},
    }).validator(),
    run({requestId}){
        if (!this.userId) {
            throw new Meteor.Error('request.applyRequest',
                'Must be logged in to apply.');
        }
        const req = Request.findOne(requestId);
        if(req.possibleOnes.includes(this.userId)){
            throw new Meteor.Error('request.applyRequest.exist',
                'You already applied for this job!');
        }

        // Todo begränsa det till 3?
        Request.update(requestId,{ $push: { possibleOnes: this.userId } } );
    }
});


const REQUEST_METHODS = _.pluck([
    insert,
], 'name');

if (Meteor.isServer) {
    // Only allow 5  operations per connection per second
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