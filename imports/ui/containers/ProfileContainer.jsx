import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import i18n from 'meteor/universe:i18n';

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
                    displayError(i18n.__('other.whoops'), i18n.__('container.profilecontainer.errorLoggedIn'));
                }else if (err.error === 'user.updateUser.pendingexist') {
                    displayError(i18n.__('other.whoops'), i18n.__('container.profilecontainer.errorPendingJob'));
                }else if (err.error === 'user.updateUser.jobactive') {
                    displayError(i18n.__('other.whoops'), i18n.__('container.profilecontainer.errorActiveRequest'));
                }
            }else{
                displayAlert(i18n.__('container.profilecontainer.alertSaved'), i18n.__('container.profilecontainer.alertSavedMsg'));
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
