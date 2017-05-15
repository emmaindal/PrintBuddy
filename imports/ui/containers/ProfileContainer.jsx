import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import ProfileComponent from '../components/ProfileComponent';
import {updateUser} from '../../api/user/methods';
import {displayError} from '../helpers/errors';
import {displayAlert} from '../helpers/alerts';
import { browserHistory } from 'react-router';
import {removePushId} from '../helpers/pushhelper';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        removePushId(Meteor.userId());
        Meteor.logout(function () {
            $('#profile-modal').closeModal({
                inDuration: 0.9,
                outDuration: 0.9,
            });
            browserHistory.replace('/start');
        });
    }

    onSubmit(user) {
        updateUser.call({
            isActive: user.printBuddy.isActive,
            canColor: user.printBuddy.canColor,
            position:user.position,
            address: user.address,
            emailNotification: user.emailNotification
        }, (err, res) => {
            if (err) {
                console.log(err);
                if (err.error === 'user.updateUser.unauthorized') {
                    displayError("Whoops!", 'You need to be logged in to update your settings!');
                }else if (err.error === 'user.updateUser.pendingexist') {
                    displayError("Whoops!", 'You cant change your settings while you have active or pending jobs');
                }else if (err.error === 'user.updateUser.jobactive') {
                    displayError("Wrong!", 'You cant change your settings while you have an active request');
                }
            }else{
                displayAlert("Saved","Your profile changes was saved");
            }
        });
    }

    render() {
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
