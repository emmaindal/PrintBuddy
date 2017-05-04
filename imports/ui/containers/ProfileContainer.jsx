import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import ProfileComponent from '../components/ProfileComponent';
import {updateUser} from '../../api/user/methods';
import {displayError} from '../helpers/errors';
import {displayAlert} from '../helpers/alerts';
import { browserHistory } from 'react-router';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onLogout = this.onLogout.bind(this);

    }

    onLogout() {
        Meteor.logout(function () {
            $('#profile-modal').closeModal({
                inDuration: 0.9,
                outDuration: 0.9,
            });
            browserHistory.replace('/start');
        })
    }

    onSubmit(user) {
        updateUser.call({
            isActive: user.printBuddy.isActive,
            canColor: user.printBuddy.canColor,
            position:user.position,
            address: user.address
        }, (err, res) => {
            if (err) {
                console.log(err);
                if (err.error === 'user.updateUser.unauthorized') {
                    displayError("Wrong!", 'You need to login to update');
                }else if (err.error === 'user.updateUser.pendingexist') {
                    displayError("Wrong!", 'You need to cancel all you pending jobs');
                }else if (err.error === 'user.updateUser.jobactive') {
                    displayError("Wrong!", 'You need to cancel your current request');
                }
            }else{
                displayAlert("Success","Your profile changes was saved");
            }
        });
    }

    render() {
        console.log("fasfasf");
        return (
            <div>
                <ProfileComponent onLogout={this.onLogout} onSubmit={this.onSubmit} currentUser={this.props.currentUser}/>
            </div>
        );
    }
}

const ProfileContainer = createContainer(() => {
    return {
        currentUser: Meteor.user()
    };
}, Profile);

export default ProfileContainer;
