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

    return Request.find({userReqId: this.userId, isDone : false});
});

Meteor.publish('myjob-request-active', function myjobrequestactive() {
    if (!this.userId) {
        return this.ready();
    }

    return Request.find({chosenOne: this.userId, isDone : false});
});


Meteor.publish('myjob-request-pending', function myjobrequestpending() {
    if (!this.userId) {
        return this.ready();
    }

    return Request.find({possibleOnes: this.userId, isDone : false, chosenOne: { $exists: false}});
});









