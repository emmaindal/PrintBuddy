import {Accounts} from 'meteor/accounts-base';
import {PrintBuddy} from '../../api/printbuddy/printbuddy';

Accounts.validateNewUser((user) => {
    var positionSchema = new SimpleSchema({
        type: {
            type: String,
            allowedValues: ['Point'],
        },
        coordinates: {
            type: [Number],
            decimal: true,
        }

    });

    new SimpleSchema({
        _id: {type: String},
        emails: {type: Array, optional: false},
        'emails.$': {type: Object},
        'emails.$.address': {type: String},
        'emails.$.verified': {type: Boolean},
        username: {type: String, optional: false},
        createdAt: {type: Date},
        services: {type: Object, blackbox: true},
        position: {
            type: positionSchema,
            optional: false
        },
        address: {type: String, optional: false},
        pushIds: {type:[String], optional:false},
        emailNotification:{type:Boolean, optional:false}
    }).validate(user);


    // Return true to allow user creation to proceed
    return true;
});

Accounts.onCreateUser((options, user) => {
    if (!options.position) {
        throw new Error('Need position!');
    }
    if (!options.printBuddy) {
        throw new Error('Need printbuddy obj!');
    }

    user.position = options.position;
    user.address = options.address;
    user.pushIds = [];
    user.emailNotification = true;

    PrintBuddy.insert({
        userId: user._id,
        canColor: options.printBuddy.canColor,
        isActive: options.printBuddy.isActive
    });

    return user;
});

Accounts.urls.verifyEmail = function (token) {
    return Meteor.absoluteUrl("verified?token=" + token)
}
Accounts.urls.resetPassword = function (token) {
    return Meteor.absoluteUrl("resetpassword?token=" + token)
}

Meteor.users._ensureIndex({ 'position': '2dsphere'});

// So we can access field on client
Meteor.publish('userData', function () {
    return Meteor.users.find({}, {fields: {position: 1, username: 1, address: 1,pushIds:1,emailNotification:1}});
});

