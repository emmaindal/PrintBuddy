smtp = {
    username: 'printbuddyapp@gmail.com',
    password: '43830z$pJ8EX',
    server:   'smtp.gmail.com',
    port: 465
}

process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

Meteor.methods({
    sendVerificationLink() {
        let userId = Meteor.userId();
        if ( userId ) {
            return Accounts.sendVerificationEmail( userId );
        }
    }
});
