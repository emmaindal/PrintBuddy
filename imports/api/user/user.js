import {PrintBuddy} from '../../api/printbuddy/printbuddy';
import {Meteor} from 'meteor/meteor';

Meteor.users.helpers({
    isBuddy() {
        return PrintBuddy.findOne({ userId: this._id }).isActive
    },
    canColor() {
        return PrintBuddy.findOne({ userId: this._id}).canColor 
    }
});