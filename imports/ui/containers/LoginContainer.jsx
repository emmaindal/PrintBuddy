import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import {LoginComponent} from '../components/LoginComponent';
import Nav from '../components/Nav';

class Login extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
    }

	render() {
		return (
			<div>
				<Nav/>
                <LoginComponent/>
			</div>
		);
	}
}

const LoginContainer = createContainer(() => {

    return {
    };
}, Login);


export default LoginContainer;
