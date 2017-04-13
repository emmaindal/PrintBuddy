import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import  {Chat} from '../chat.js';


Meteor.publish('chat-request', function chat(requestId) {
    check(requestId, String);
    return Chat.find({requestId: requestId});
});
