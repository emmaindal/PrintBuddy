import React from 'react';
import i18n from 'meteor/universe:i18n';
import { Link, IndexLink } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

import ProfileContainer from '../containers/ProfileContainer';
import {removeUserPushId} from '../../api/user/methods';

class Nav extends React.Component {
    constructor(props) {
        super(props)

        this.popProfileModal = this.popProfileModal.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    componentDidMount() {
        $(".button-collapse").sideNav();

        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrainWidth: false, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: false, // Displays dropdown below the button
            alignment: 'left', // Displays dropdown with edge aligned to the left of button
            stopPropagation: false // Stops event propagation
        }
        );
    }

    popProfileModal() {
        $('#profile-modal').openModal({
            inDuration: 0.9,
            outDuration: 0.9,
        });
    }

    onLogout() {
        $('.button-collapse').sideNav('hide');
        this.props.onLogout();
    }


    render() {
        const { isBuddy } = this.props;

        const profileModal = <div id="profile-modal" className="modal profile-modal">
            <div className="modal-content">
                <i className="material-icons modal-close modal-action cancel-icon">clear</i>
                <ProfileContainer />
            </div>
        </div>;

        if (isBuddy) {
            return (
                <div>
                    <nav className="main-nav">
                        <div className="nav-wrapper nav-container">

                            <a href="" className="brand-logo">PRINTBUDDY</a>
                            <a href="" data-activates="mobile-nav" className="button-collapse"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down desktop-nav">
                                <li><IndexLink id="mainindexlink" to="/jobs" activeClassName="active">{i18n.__('components.nav.link-jobs')}</IndexLink></li>
                                <li><Link id="myjobslink" to="/myjobs" activeClassName="active">{i18n.__('components.nav.link-myjobs')}</Link></li>
                                <li><Link id="btn-settingsmodal" onClick={this.popProfileModal} className='dropdown-button' data-activates='dropdown1'><i
                                    className="material-icons">&#xE7FD;</i></Link></li>
                            </ul>
                            <ul className="side-nav" id="mobile-nav">
                                <li><IndexLink to="/jobs" activeClassName="active">{i18n.__('components.nav.link-jobs')}</IndexLink></li>
                                <li><Link to="/myjobs" activeClassName="active">{i18n.__('components.nav.link-myjobs')}</Link></li>
                                <li><Link className="mobile-nav-icon" onClick={this.popProfileModal}><i
                                    className="material-icons">settings</i></Link></li>
                                <li><Link id="btn-onlogout" onClick={this.onLogout} className="mobile-nav-icon"><i
                                    className="material-icons">&#xE8AC;</i></Link></li>
                            </ul>
                        </div>
                    </nav>
                    {profileModal}
                </div>
            );
        } else {
            return (
                <div>
                    <nav className="main-nav">
                        <div className="nav-wrapper nav-container">

                            <a href="" className="brand-logo">PRINTBUDDY</a>
                            <a href="" data-activates="mobile-nav" className="button-collapse"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down desktop-nav">
                                <li><IndexLink id="mainindexlink" to="/request" activeClassName="active">{i18n.__('components.nav.link-request')}</IndexLink></li>
                                <li><Link id="btn-settingsmodal" onClick={this.popProfileModal} className='dropdown-button' data-activates='dropdown1'>
                                    <i className="material-icons">&#xE7FD;</i></Link></li>
                            </ul>
                            <ul className="side-nav" id="mobile-nav">
                                <li><IndexLink to="/request" activeClassName="active">{i18n.__('components.nav.link-request')}</IndexLink></li>
                                <li><Link className="mobile-nav-icon" id="requestor-profile" onClick={this.popProfileModal}>
                                    <i className="material-icons">settings</i></Link>
                                </li>
                                <li><Link id="btn-onlogout" onClick={this.onLogout} className="mobile-nav-icon">
                                    <i className="material-icons">&#xE8AC;</i></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {profileModal}
                </div>
            );
        }
    }
}

Nav.propTypes = {
    isBuddy: React.PropTypes.bool,
    onLogout: React.PropTypes.func
};

export default Nav;
