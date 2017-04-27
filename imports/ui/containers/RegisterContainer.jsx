import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import {browserHistory} from 'react-router'

import RegisterComponent from '../components/RegisterComponent';

import {displayError} from '../helpers/errors';


class Register extends React.Component {
	constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillMount() {
        $("#app").fadeOut(1);
    }
    componentDidMount() {
        $("#prepage").fadeOut(200);
        $("#app").fadeIn(1500);
          
    }
    onSubmit(formData){
        Accounts.createUser({
            email: formData.email,
            username:formData.username,
            password:formData.password,
            position:formData.position,
            address: formData.address,
            printBuddy:formData.printBuddy
        }, (err) => {
            if (err) {
                displayError("Error", err.reason)
                console.log(err);
            } else {
                Meteor.call('sendVerificationLink', (error, response) => {
                    if (error) {
                        displayError("Error", error);
                        console.log(error);
                    } else {
                        browserHistory.push('/');
                    }
                });
            }
        });
    }

	render() {
		return (
            <div>
                <RegisterComponent submit={this.onSubmit}/>
			</div>
		);
	}
}

Register.propTypes = {
};

const RegisterContainer = createContainer(() => {
    return {
    };
}, Register);


export default RegisterContainer;
