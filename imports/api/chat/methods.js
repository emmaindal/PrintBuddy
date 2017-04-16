import {Meteor} from 'meteor/meteor';
import {_} from 'meteor/underscore';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {DDPRateLimiter} from 'meteor/ddp-rate-limiter';

import {Chat} from '../chat/chat';

export const addMessageToRequest = new ValidatedMethod({
    name: 'chat.addMessageToRequest',
    validate: new SimpleSchema({
        requestId: {type: String},
        text: {type: String},
        username: {type: String}
    }).validator(),
    run({requestId, text, username}){
        if (!this.userId) {
            throw new Meteor.Error('chat.addMessageToRequest.unauthorized',
                'Must be logged in to chat.');
        }

        const message = {userId: this.userId, text: text, createdAt: new Date(), username: username}

        Chat.update({requestId: requestId}, {$push: {messages: message}});
    }
});


const REQUEST_METHODS = _.pluck([
    addMessageToRequest
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