import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

import ProfileContainer from '../containers/ProfileContainer';

class Nav extends React.Component {
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

    onLogout() {
        Meteor.logout(function () {
            browserHistory.replace('/start');
        })
    }

    popProfileModal() {
        console.log("popProfile fired");
        $('#profile-modal').openModal({
            inDuration: 100, 
            outDuration: 100,  
        });
    }

    render() {
        const { isBuddy } = this.props;

        if (isBuddy) {
            return (
                <div>
                    <nav>
                        <div className="nav-wrapper nav-container">
                            <a href="" className="brand-logo">PrintBuddy</a>
                            <a href="" data-activates="mobile-nav" className="button-collapse"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><IndexLink to="/jobs" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Jobs</IndexLink></li>
                                <li><Link to="/myjobs" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>My Jobs</Link></li>
                                <li><Link className='dropdown-button' to='#' data-activates='dropdown1'><i className="material-icons">&#xE7FD;</i></Link></li>

                                <ul id='dropdown1' className='dropdown-content'>
                                    <li><Link to="#" onClick={this.popProfileModal}>Profile</Link></li>
                                    <li><Link to="#">Settings</Link></li>
                                    <li className="divider"></li>
                                    <li><Link onClick={this.onLogout}>Log out</Link></li>
                                </ul>
                            </ul>
                            <ul className="side-nav" id="mobile-nav">
                                <li><IndexLink to="/jobs" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Jobs</IndexLink></li>
                                <li><Link to="/myjobs" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>My Jobs</Link></li>

                                <li><Link to="#" className="mobile-nav-icon" onClick={this.popProfileModal}><i className="material-icons">&#xE7FD;</i></Link></li>
                                <li><Link to="#" className="mobile-nav-icon"><i className="material-icons">&#xE8B8;</i></Link></li>
                                <li><Link onClick={this.onLogout} className="mobile-nav-icon"><i className="material-icons">&#xE8AC;</i></Link></li>

                            </ul>
                        </div>
                    </nav>

                    <div id="profile-modal" className="modal profile-modal">
                        <div className="modal-content">
                            <a className="cance-login-modal-btn modal-action modal-close btn-floating btn waves-effect waves-light red lighten-2"><i className="material-icons">clear</i></a>
                            <ProfileContainer/>
                        </div>
                    </div>
                </div>
            );

        } else {
            return (
                <div>
                    <nav>
                        <div className="nav-wrapper nav-container">
                            <a href="" className="brand-logo">PrintBuddy</a>
                            <a href="" data-activates="mobile-nav" className="button-collapse"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><IndexLink to="/request" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Requests</IndexLink></li>

                                <li><Link className='dropdown-button' to='#' data-activates='dropdown1'><i className="material-icons">&#xE7FD;</i></Link></li>

                                <ul id='dropdown1' className='dropdown-content'>
                                    <li><Link onClick={this.popProfileModal}>Profile</Link></li>
                                    <li><Link to="#">Settings</Link></li>
                                    <li className="divider"></li>
                                    <li><Link onClick={this.onLogout}>Log out</Link></li>
                                </ul>
                            </ul>
                            <ul className="side-nav" id="mobile-nav">
                                <li><IndexLink to="/request" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Requests</IndexLink></li>
                                <li><Link className="mobile-nav-icon" id="requestor-profile" onClick={this.popProfileModal}><i className="material-icons">&#xE7FD;</i></Link></li>
                                <li><Link to="#" className="mobile-nav-icon" id="requestor-settings"><i className="material-icons">&#xE8B8;</i></Link></li>
                                <li><Link onClick={this.onLogout} className="mobile-nav-icon"><i className="material-icons">&#xE8AC;</i></Link></li>

                            </ul>
                        </div>
                    </nav>

                    <div id="profile-modal" className="modal profile-modal">
                        <div className="modal-content">
                            <a className="cance-login-modal-btn modal-action modal-close btn-floating btn waves-effect waves-light red lighten-2"><i className="material-icons">clear</i></a>
                            <ProfileContainer/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

Nav.propTypes = {
    isBuddy: React.PropTypes.bool,
};

export default Nav;
