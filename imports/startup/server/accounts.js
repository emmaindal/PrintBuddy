import { Accounts } from 'meteor/accounts-base';

Accounts.validateNewUser((user) => {
    var positionSchema =  new SimpleSchema({
        address: {type:String},
        lat: {type:Number,decimal: true},
        lng: {type:Number,decimal: true},
    });
    new SimpleSchema({
        _id: { type: String },
        emails: { type: Array , optional:false},
        'emails.$': { type: Object },
        'emails.$.address': { type: String },
        'emails.$.verified': { type: Boolean },
        username:{type:String, optional:false},
        createdAt: { type: Date },
        services: { type: Object, blackbox: true },
        position:{type: positionSchema, optional: false}
    }).validate(user);

    // Return true to allow user creation to proceed
    return true;
});

Accounts.onCreateUser((options, user) => {
   if (!options.position) {
        throw new Error('Need position!');
    }

    user.position = options.position;

    return user;
});

Accounts.urls.verifyEmail = function(token) {
    return Meteor.absoluteUrl("verified?token="+token)
}

// So we can access position field
Meteor.publish('userData', function () { return Meteor.users.find({}, {fields: {position: 1}}); });