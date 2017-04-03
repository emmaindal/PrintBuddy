
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const PrintBuddy = new Mongo.Collection('printbuddy');

const PrintBuddySchema = new SimpleSchema({
    userId: { type: String },
    canColor: { type: String }
});

PrintBuddy.attachSchema(PrintBuddySchema);

// skapar hjälp-metoder för att kunna lättare hämta data från dina collections
// https://github.com/dburles/meteor-collection-helpers
PrintBuddy.helpers({

});
