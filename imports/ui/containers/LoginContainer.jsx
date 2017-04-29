import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import {browserHistory} from 'react-router';
import {displayError} from '../helpers/errors';
import LoginComponent from '../components/LoginComponent';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
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
                <LoginComponent submit={this.onSubmit}/>
            </div>
        );
    }
}

const LoginContainer = createContainer(() => {

    return {};
}, Login);


export default LoginContainer;
