
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Reqeust = new Mongo.Collection('request');

const ReqeustSchema = new SimpleSchema({
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

Reqeust.attachSchema(ReqeustSchema);

// skapar hjälp-metoder för att kunna lättare hämta data från dina collections
// https://github.com/dburles/meteor-collection-helpers
Reqeust.helpers({

});
