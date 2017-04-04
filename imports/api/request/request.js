
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Request = new Mongo.Collection('request');

const RequestSchema = new SimpleSchema({
    userReqId: { type: String },
    delivery: { type: Boolean },
    needColor: { type: Boolean },
    reward: { type: Number },
    currency: { type: String },
    radius: { type: Number },
    possibleOnes: { type: [String] },
    chosenOne: { type: String },
    docURL: { type: String },
    isDone:{type:Boolean}
});

Request.attachSchema(RequestSchema);

// skapar hjälp-metoder för att kunna lättare hämta data från dina collections
// https://github.com/dburles/meteor-collection-helpers
Request.helpers({

});
