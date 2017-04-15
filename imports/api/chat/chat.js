import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Chat = new Mongo.Collection('chat');

const messageSchema = new SimpleSchema({
    userId: { type: String, optional:false },
    username: { type: String,optional:false },
    text:  { type: String,optional:false },
    createdAt:{type: Date,optional:false }
});


const ChatSchema = new SimpleSchema({
    requestId: { type: String, optional:false },
    userReqId: { type: String,optional:false },
    chosenBuddyId:  { type: String,optional:false },
    messages:{type: [messageSchema],optional:false}
});

Chat.attachSchema(ChatSchema);

// skapar hjälp-metoder för att kunna lättare hämta data från dina collections
// https://github.com/dburles/meteor-collection-helpers
Chat.helpers({

});
