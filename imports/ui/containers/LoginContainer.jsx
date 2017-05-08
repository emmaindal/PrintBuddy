import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import {browserHistory} from 'react-router';
import {Accounts} from 'meteor/accounts-base';

import {displayError} from '../helpers/errors';
import LoginComponent from '../components/LoginComponent';
import {displayAlert} from '../helpers/alerts';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {forgotPasswordStatus: ""};
        this.onSubmit = this.onSubmit.bind(this);
        this.onForgotPassword = this.onForgotPassword.bind(this);
    }

    onForgotPassword(email){
        Accounts.forgotPassword({email: email},  (e, r) => {
            if (e) {
                this.setState({forgotPasswordStatus:"Error :("});
            } else {
                this.setState({forgotPasswordStatus:"Sent :)"});
            }
        });
    }

    onSubmit(formData) {
        Meteor.loginWithPassword(formData.email, formData.password, function (error) {
            if (error) {
                displayError("Error:", "Email and/or Password is incorrect!");
            } else {
                $('#login-modal').closeModal();
                browserHistory.push('/');
            }
        });
    }
    render() {
        return (
            <div>
                <LoginComponent forgotPasswordStatus={this.state.forgotPasswordStatus} onForgotPassword={this.onForgotPassword} submit={this.onSubmit}/>
            </div>
        );
    }
}

const LoginContainer = createContainer(() => {

    return {};
}, Login);


export default LoginContainer;
