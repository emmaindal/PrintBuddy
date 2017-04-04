import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import {RegisterComponent} from '../components/RegisterComponent';
import Nav from '../components/Nav';

class Register extends React.Component {
	constructor(props) {
        super(props);
    }

	render() {
        const {items} = this.props;

		return (
            <div>
				<Nav/>
                <RegisterComponent/>
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
