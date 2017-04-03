import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Chat = new Mongo.Collection('chat');

const ChatSchema = new SimpleSchema({
    reqId: { type: String },
    userReqId: { type: String },
    chosenBuddyId:  { type: String },
    messages:{type: [Object]}
});

Chat.attachSchema(ChatSchema);

// skapar hjälp-metoder för att kunna lättare hämta data från dina collections
// https://github.com/dburles/meteor-collection-helpers
Chat.helpers({

});
