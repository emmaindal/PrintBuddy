import {Meteor} from 'meteor/meteor';
import {_} from 'meteor/underscore';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {DDPRateLimiter} from 'meteor/ddp-rate-limiter';

import {Request, positionSchema} from './request.js';
import {Chat} from  '../chat/chat';

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
        lastTime: {type: String},
        title: {type: String},
        position: {type: positionSchema}
    }).validator(),
    run({delivery, needColor, reward, radius, lastDate, lastTime, pages, copies, currency, title, position}) {
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
            lastTime: lastTime,
            isDone: false,
            isCancel: false,
            title: title,
            pages: pages,
            copies: copies,
            currency: currency,
            possibleOnes: [],
            position: position
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
        if (req.possibleOnes.includes(this.userId)) {
            throw new Meteor.Error('request.applyRequest.exist',
                'You already applied for this job!');
        }

        // Todo begränsa det till 3?
        Request.update(requestId, {$push: {possibleOnes: this.userId}});
    }
});

export const removeApplyRequest = new ValidatedMethod({
    name: 'request.removeApplyRequest',
    validate: new SimpleSchema({
        requestId: {type: String},
    }).validator(),
    run({requestId}){
        if (!this.userId) {
            throw new Meteor.Error('request.removeApplyRequest',
                'Must be logged in to remove apply');
        }
        const req = Request.findOne(requestId);
        if (req.possibleOnes.includes(this.userId)) {
            Request.update(requestId, {$pull: {possibleOnes: this.userId}});
        }else {
            throw new Meteor.Error('request.removeApplyRequest.dontexist',
                'You cant remove from request, if you not have apply');
        }
    }
});

export const acceptBuddy = new ValidatedMethod({
    name: 'request.acceptBuddy',
    validate: new SimpleSchema({
        requestId: {type: String},
        buddyId: {type: String}
    }).validator(),
    run({requestId, buddyId}){
        if (!this.userId) {
            throw new Meteor.Error('request.acceptBuddy',
                'Must be logged in to acceptBuddy.');
        }

        const req = Request.findOne(requestId);
        if (req.chosenOne) {
            throw new Meteor.Error('request.acceptBuddy.exist',
                'Job already taken');
        }

        const chat = {requestId: requestId, userReqId: this.userId, chosenBuddyId: buddyId, messages: []}
        Chat.insert(chat, (err) => {
            if (!err) {
                Request.update(requestId, {$set: {chosenOne: buddyId}});
            }
        });
    }
});

export const cancelRequest = new ValidatedMethod({
    name: 'request.cancelRequest',
    validate: new SimpleSchema({
        requestId: {type: String},
    }).validator(),
    run({requestId}){
        if (!this.userId) {
            throw new Meteor.Error('request.cancelRequest',
                'Must be logged in to cancel request.');
        }
        const request = Request.findOne(requestId);
        if(this.userId !== request.userReqId){
            throw new Meteor.Error('request.cancelRequest.notsame',
                'Cant cancel others request.');
        }
        Request.update(requestId, {$set: {isCancel: true }});
    }
});

export const doneRequest = new ValidatedMethod({
    name: 'request.doneRequest',
    validate: new SimpleSchema({
        requestId: {type: String},
    }).validator(),
    run({requestId}){
        if (!this.userId) {
            throw new Meteor.Error('request.doneRequest',
                'Must be logged in to cancel request.');
        }
        const request = Request.findOne(requestId);
        if(this.userId !== request.userReqId){
            throw new Meteor.Error('request.doneRequest.notsame',
                'Cant done others request.');
        }
        Request.update(requestId, {$set: {isDone: true }});
    }
});

export const finishRequest = new ValidatedMethod({
    name: 'request.finishRequest',
    validate: new SimpleSchema({
        requestId: {type: String},
    }).validator(),
    run({requestId}){
        if (!this.userId) {
            throw new Meteor.Error('request.finishRequest',
                'Must be logged in to cancel request.');
        }
        const request = Request.findOne(requestId);
        if(this.userId !== request.userReqId){
            throw new Meteor.Error('request.finishRequest.notsame',
                'Cant finish others request.');
        }
        Request.update(requestId, {$set: {finishAt: new Date() }});
    }
});

const REQUEST_METHODS = _.pluck([
    insert, applyRequest, acceptBuddy,cancelRequest, doneRequest,removeApplyRequest,finishRequest
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