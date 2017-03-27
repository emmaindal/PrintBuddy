import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';

import { Items } from './items.js';

// ValidatedMethod hjälper en att definera metoder bättre.
// https://github.com/meteor/validated-method
export const insert = new ValidatedMethod({
    name: 'items.insert',
    validate: new SimpleSchema({
        title:  { type: String },
        desc:  { type: String },
    }).validator(),
    run({ title, desc }) {
        // Om man måste logga in funkar detta
       /* if (!this.userId) {
            throw new Meteor.Error('items.insert.notLoggedIn',
                'Must be logged to add item.');
        } */

        const item = {
            title,
            desc
        }

        return Items.insert(item);
    },
});



export const removeAll = new ValidatedMethod({
    name: 'items.removeAll',
    validate:null,
    run() {
        // Om man måste logga in funkar detta
        /* if (!this.userId) {
         throw new Meteor.Error('items.insert.notLoggedIn',
         'Must be logged to add item.');
         } */


        return Items.remove({});
    },
});


