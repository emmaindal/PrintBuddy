
import { Mongo } from 'meteor/mongo';
import { SimpleSchema, SchemaHelpers } from 'meteor/aldeed:simple-schema';


class RequestCollection extends Mongo.Collection {
    insert(doc, callback) {
        const ourDoc = doc;
        ourDoc.createdAt = ourDoc.createdAt || new Date();
        ourDoc.possibleOnes = [];
        const result = super.insert(ourDoc, callback);
        return result;
    }
}

export const Request = new RequestCollection('request');

export const positionSchema = new SimpleSchema({
    type: {
        type: String,
        allowedValues: ['Point'],
    },
    coordinates: {
        type: [Number],
        decimal: true,
    }
});

const RequestSchema = new SimpleSchema({
    userReqId: { type: String,optional:true  },
    delivery: { type: Boolean },
    needColor: { type: Boolean },
    reward: { type: Number },
    currency: { type: String },
    pages: { type: Number },
    copies: { type : Number },
    title: { type: String },
    radius: { type: Number },
    lastDate:{ type: Date },
    lastTime:{ type: String },
    possibleOnes: { type: [String], optional:false },
    chosenOne: { type: String, optional:true },
    docURL: { type: String,optional:true  },
    isDone:{type:Boolean},
    createdAt:{type:Date},
    position: {
        type: positionSchema,
        optional: false
    }
});

Request.attachSchema(RequestSchema);

// Deny all client-side updates since we will be using methods to manage this collection
Request.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});

if(Meteor.isServer){
    Request._ensureIndex({ 'position': '2dsphere'});
}

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
        // todo går att refactor då vi spara postion i request direkt vid insert. (För att kunna sortera sen)
        let position = Meteor.users.findOne(this.userReqId).position;
        if(position){
            position.lat = position.coordinates[1];
            position.lng = position.coordinates[0];
        }
        return position
    },
    requestorAddress(){
        return Meteor.users.findOne(this.userReqId).address
    },
    possiblePrintBuddies(){
        const users = this.possibleOnes.map((id) =>{
            return Meteor.users.findOne(id);
        });
        return users;
    },
    printBuddyPosition(){
        return Meteor.users.findOne(this.chosenOne).position
    }
});



