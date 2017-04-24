import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import {ProfileComponent} from '../components/ProfileComponent';
import Nav from '../components/Nav';

class Profile extends React.Component {
	constructor(props) {
        super(props);
    }
    componentWillMount() {
        $("#app").fadeOut(1);
    }
    componentDidMount() {
        $("#prepage").fadeOut(200);
        $("#app").fadeIn(1500);
          
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
