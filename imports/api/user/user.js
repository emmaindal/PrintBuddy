import {PrintBuddy} from '../../api/printbuddy/printbuddy';

Meteor.users.helpers({
    isBuddy() {
        return PrintBuddy.findOne({ userId: this._id }).isActive
    }
});