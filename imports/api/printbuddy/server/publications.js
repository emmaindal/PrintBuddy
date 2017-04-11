import {Meteor} from 'meteor/meteor';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import  {PrintBuddy} from '../printbuddy.js';


Meteor.publish('printbuddy', function printbuddy() {
    return PrintBuddy.find({
        userId: this.userId,
    });
});

