import { Accounts } from 'meteor/accounts-base';


Accounts.emailTemplates.siteName = 'PrintBuddy';
Accounts.emailTemplates.from = 'NOREPLY <noreply@printbuddy.se>';

Accounts.emailTemplates.resetPassword = {
    subject() {
        return 'Reset your password - PrintBuddy';
    },
    text(user, url) {
        return `Hello!
Click the link below to reset your password on PrintBuddy.
${url}
If you didn't request this email, please ignore it.
Thanks,
The PrintBuddy team
`;
    },
//   html(user, url) {
//     return `
//       XXX Generating HTML emails that work across different email clients is a very complicated
//       business that we're not going to solve in this particular example app.
//
//       A good starting point for making an HTML email could be this responsive email boilerplate:
//       https://github.com/leemunroe/responsive-html-email-template
//
//       Note that not all email clients support CSS, so you might need to use a tool to inline
//       all of your CSS into style attributes on the individual elements.
// `
//   }
};

Accounts.emailTemplates.verifyEmail = {
    subject() {
        return "[Test] Verify Your Email Address";
    },
    text( user, url ) {
        let emailAddress   = user.emails[0].address,
            urlWithoutHash = url.replace( '#/', '' ),
            supportEmail   = "info@printbuddy.se",
            emailBody      = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

        return emailBody;
    }
};