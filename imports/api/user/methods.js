import {Meteor} from 'meteor/meteor';
import {_} from 'meteor/underscore';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {DDPRateLimiter} from 'meteor/ddp-rate-limiter';

import {PrintBuddy} from '../printbuddy/printbuddy';
import {Request, positionSchema} from '../request/request.js';

export const updateUser = new ValidatedMethod({
    name: 'user.updateUser',
    validate: new SimpleSchema({
        isActive: {type: Boolean},
        canColor: {type: Boolean},
        position: {type: positionSchema},
        address: {type: String}
    }).validator(),
    run({isActive, canColor, position, address}){
        if (!this.userId) {
            throw new Meteor.Error('user.updateUser.unauthorized',
                'Must be logged in to update user.');
        }

        const printbuddy = PrintBuddy.findOne({userId: this.userId});

        if(printbuddy.isActive){
            const req = Request.findOne({possibleOnes: this.userId, isDone: false, isCancel: false, chosenOne: {$exists: false}});
            if(req){
                throw new Meteor.Error('user.updateUser.pendingexist',
                    'You need to cancel pending jobs');
            }
        }else{
            const req  = Request.findOne({userReqId: this.userId, isCancel: false, finishAt: {$exists: false}});
            if(req){
                throw new Meteor.Error('user.updateUser.jobactive',
                    'You need to cancel active request');
            }
        }


        PrintBuddy.update({userId: this.userId}, {$set: {isActive: isActive, canColor: canColor}});
        Meteor.users.update(this.userId, {$set: {position: position, address: address}});
    }
});

export const updateUserPushId = new ValidatedMethod({
    name: 'user.updateUserPushId',
    validate: new SimpleSchema({
        pushId: {type: String},
    }).validator(),
    run({pushId}){
        if (!this.userId) {
            throw new Meteor.Error('user.updateUserPushId.unauthorized',
                'Must be logged in to update user.');
        }
        const user = Meteor.users.findOne(this.userId);
        if(!user.pushIds.includes(pushId)){
            Meteor.users.update(this.userId, {$push: {pushIds: pushId}});
        }
    }
});

export const removeUserPushId = new ValidatedMethod({
    name: 'user.removeUserPushId',
    validate: new SimpleSchema({
        pushId: {type: String},
    }).validator(),
    run({pushId}){
        if (!this.userId) {
            throw new Meteor.Error('user.removeUserPushId.unauthorized',
                'Must be logged in to update user.');
        }
        const user = Meteor.users.findOne(this.userId);
        console.log(pushId);
        if(user.pushIds.includes(pushId)){
            Meteor.users.update(this.userId, {$pull: {pushIds: pushId}});
        }
    }
});


const REQUEST_METHODS = _.pluck([
    updateUser, updateUserPushId, removeUserPushId
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
    }, 5, 1000);
}