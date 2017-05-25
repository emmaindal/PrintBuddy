import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import {browserHistory} from 'react-router';
import {Accounts} from 'meteor/accounts-base';
import i18n from 'meteor/universe:i18n';

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
                this.setState({forgotPasswordStatus:"Check your email - we sent instructions! :)"});
            }
        });
    }

    onSubmit(formData) {
        Meteor.loginWithPassword(formData.email, formData.password, function (error) {
            if (error) {
                displayError(i18n.__('other.whoops'), i18n.__('container.logincontainer.errorLogin'));
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
