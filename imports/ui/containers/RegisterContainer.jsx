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

    onSubmit(formData){

        // Todo fixa i register så man kan söka på sin address via gogole api och lägga till det
        const position = {address: "Gatan 13", lat: 55.606068, lng: 13.000383}; // 55.606068, 13.000383

        Accounts.createUser({
            email: formData.email,
            username:formData.username,
            password:formData.password,
            position:position
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
    children: React.PropTypes.element, // matched child route component
};

const RegisterContainer = createContainer(() => {
    return {
    };
}, Register);


export default RegisterContainer;

message = [
    {userId:"1", text:"test"},{userId:"2", text:"test"},{userId:"123", text:"test231"},{userId:"2", text:"test3"},{userId:"1", text:"test4"},{userId:"2", text:"test5"}
]
