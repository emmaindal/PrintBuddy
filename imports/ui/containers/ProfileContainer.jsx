import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import {ProfileComponent} from '../components/ProfileComponent';
import Nav from '../components/Nav';

class Profile extends React.Component {
	constructor(props) {
        super(props);
    }

	render() {
        const {items} = this.props;

		return (
            <div>
				<Nav/>
                <ProfileComponent/>
			</div>
		);
	}
}

Profile.propTypes = {
    children: React.PropTypes.element, // matched child route component
};

const ProfileContainer = createContainer(() => {
    return {
    };
}, Profile);


export default ProfileContainer;
