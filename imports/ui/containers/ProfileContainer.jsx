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
                <ProfileComponent currentUser={this.props.currentUser}/>
			</div>
		);
	}
}

Profile.propTypes = {
    children: React.PropTypes.element, // matched child route component
};

const ProfileContainer = createContainer(() => {
    return {
        currentUser: Meteor.user()
    };
}, Profile);


export default ProfileContainer;
