import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';

import { Items } from './items.js';


export const insert = new ValidatedMethod({
    name: 'items.insert',
    validate: new SimpleSchema({
        title:  { type: String },
        desc:  { type: String },
    }).validator(),
    run({ title, desc }) {
        if (!this.userId) {
            throw new Meteor.Error('items.insert.notLoggedIn',
                'Must be logged to add item.');
        }

        const item = {
            title,
            desc
        }

        return Items.insert(item);
    },
});
