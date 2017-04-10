
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

// Deny all client-side updates since we will be using methods to manage this collection
Request.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});


// This represents the keys from Lists objects that should be published
// to the client. If we add secret properties to List objects, don't list
// them here to keep them private to the server.
/*Request.publicFields = {
    userReqId: 1,
    delivery: 1,
    needColor: 1,
    checked: 1,
}; */

// skapar hjälp-metoder för att kunna lättare hämta data från dina collections
// https://github.com/dburles/meteor-collection-helpers
Request.helpers({
    requestorName(){
        return Meteor.users.findOne(this.userReqId).username
    },
    requestorPosition(){
        return Meteor.users.findOne(this.userReqId).position
    }
});



