import { Accounts } from 'meteor/accounts-base';


Accounts.validateNewUser((user) => {
    new SimpleSchema({
        _id: { type: String },
        emails: { type: Array , optional:false},
        'emails.$': { type: Object },
        'emails.$.address': { type: String },
        'emails.$.verified': { type: Boolean },
        username:{type:String, optional:false},
        createdAt: { type: Date },
        services: { type: Object, blackbox: true }
    }).validate(user);

    // Return true to allow user creation to proceed
    return true;
});

// Ska vi ha att man måste verifierar?
Accounts.urls.verifyEmail = function(token) {
    return Meteor.absoluteUrl("login?token="+token)
}
