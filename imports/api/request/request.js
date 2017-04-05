
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Request = new Mongo.Collection('request');

const RequestSchema = new SimpleSchema({
    userReqId: { type: String,optional:true  },
    delivery: { type: Boolean },
    needColor: { type: Boolean },
    reward: { type: Number },
    currency: { type: String,optional:true  },
    radius: { type: Number },
    lastDate:{type: Date},
    possibleOnes: { type: [String], optional:true },
    chosenOne: { type: String, optional:true },
    docURL: { type: String,optional:true  },
    isDone:{type:Boolean}
});

Request.attachSchema(RequestSchema);

// skapar hjälp-metoder för att kunna lättare hämta data från dina collections
// https://github.com/dburles/meteor-collection-helpers
Request.helpers({

});
