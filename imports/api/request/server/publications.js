import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import  {Request} from '../request.js';


Meteor.publish('request', function request() {
    // Todo fixa här så användaren endast ser de requesten de kan ta.

    return Request.find();
});


Meteor.publish('user-request', function userrequest() {
    if (!this.userId) {
        return this.ready();
    }

    return Request.find({userReqId: this.userId, isDone : false, isCancel: false});
});



