import React from 'react';
import i18n from 'meteor/universe:i18n';

import GeoCoder from '../containers/GeoCodeContainer';

class ProfileComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: props.currentUser,
            address: props.currentUser.address,
            lat: props.currentUser.position.coordinates[1],
            lng: props.currentUser.position.coordinates[0],
            isBuddy: props.currentUser.isBuddy(),
            canColor: props.currentUser.canColor(),
            emailNotification: props.currentUser.emailNotification
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onEmailNotification = this.onEmailNotification.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
            currentUser: props.currentUser,
            address: props.currentUser.address,
            lat: props.currentUser.position.coordinates[1],
            lng: props.currentUser.position.coordinates[0],
            isBuddy: props.currentUser.isBuddy(),
            canColor: props.currentUser.canColor(),
            emailNotification: props.currentUser.emailNotification
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const updatedUser = {
            position: {type: "Point", coordinates: [this.state.lng, this.state.lat]},
            address: this.state.address,
            printBuddy: {
                canColor: this.state.canColor,
                isActive: this.state.isBuddy
            },
            emailNotification:this.state.emailNotification
        }

        this.props.onSubmit(updatedUser);
        $('#profile-modal').closeModal({
            inDuration: 0.9,
            outDuration: 0.9,
        });
    }

    handleChange(e) {
        if (this.state.isBuddy) {
            this.setState({
                isBuddy: false,
                canColor: false
            });
        } else {
            this.setState({
                isBuddy: true
            });
        }
    }

    colorChange(e) {
        if (this.state.canColor) {
            this.setState({
                canColor: false
            });
        } else {
            this.setState({
                canColor: true
            });
        }
    }

    onEmailNotification(e) {
        if (this.state.emailNotification) {
            this.setState({
                emailNotification: false
            });
        } else {
            this.setState({
                emailNotification: true
            });
        }
    }

    onPickAdress(address) {
        this.setState({
            address: address.formatted_address,
            lat: address.geometry.location.lat,
            lng: address.geometry.location.lng
        });
    }

    render() {
        return (
            <div id="profile">
                <form className="col s10 offset-s1" onSubmit={(this.onSubmit)}>
                    <div className="row" style={{marginBottom: 0}}>
                        <label htmlFor="email">
                            <i className="small material-icons">email</i>
                        </label>
                        <div className="input-field col s10 offset-s1 m10 offset-m1">
                            <input id="email" type="email" className="validate" ref="email"
                                   value={this.state.currentUser.emails[0].address} disabled/>

                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="userId">
                            <i className="small material-icons">perm_identity</i>
                        </label>
                        <div className="input-field col s10 offset-s1 m10 offset-m1">
                            <input id="userId" type="text" className="validate" ref="username"
                                   value={this.state.currentUser.username} disabled/>
                        </div>
                    </div>
                    <div id="test-geocode" style={{marginBottom: "0"}} className="row">
                        <div className="col s10 offset-s1 m10 offset-m1">
                            <p>{i18n.__('components.profilecomponent.setHomeAddress')}</p>
                            <p><strong>{this.state.address}</strong></p>
                            <GeoCoder onPickAdress={(address) => {
                                this.onPickAdress(address)
                            }}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="switch text-center" id="role-switcher">
                            <label>
                                {i18n.__('components.profilecomponent.emailNotifications')}
                            </label>
                            <div className="col s12">

                                <label>
                                    {i18n.__('other.no')}
                                    <input type="checkbox" checked={this.state.emailNotification}
                                           onChange={(e) => this.onEmailNotification(e)}/>
                                    <span className="lever"></span>
                                    {i18n.__('other.yes')}
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="switch text-center" id="role-switcher">
                            <div className="col s12">
                                <label>
                                    {i18n.__('components.profilecomponent.requestor')}
                                    <input type="checkbox" checked={this.state.isBuddy}
                                           onChange={(e) => this.handleChange(e)}/>
                                    <span className="lever"></span>
                                    {i18n.__('components.profilecomponent.printbuddy')}
                                </label>
                            </div>
                        </div>
                    </div>


                    {this.state.isBuddy ? (
                        <div className="row">
                            <div className="switch text-center" id="color-switcher">
                                <div className="col s12">
                                    <label>
                                        {i18n.__('other.blackWhite')}
                                        <input type="checkbox" checked={this.state.canColor}
                                               onChange={(e) => this.colorChange(e)}/>
                                        <span className="lever"></span>
                                        {i18n.__('other.color')}
                                    </label>
                                </div>
                            </div>
                        </div>
                    ) : (null)}

                    <div style={{marginBottom: "20px"}} className="row profile-modal-row">
                        <button className="col s10 offset-s1 waves-effect waves-light btn">{i18n.__('components.profilecomponent.saveChanges')}</button>
                    </div>
                </form>
                <div className="row">
                    <a onClick={this.props.onLogout} className="col s2 offset-s9">
                        <span>{i18n.__('components.profilecomponent.logout')}</span>
                    </a>
                    <i onClick={this.props.onLogout} style={{marginTop: "-3px", marginLeft: "-25px", color: "#039be5", cursor: "pointer"}} className="col s1 material-icons">power_settings_new</i>
                </div>
            </div>
        );
    }
}

ProfileComponent.propTypes = {
    currentUser: React.PropTypes.object,
    onSubmit: React.PropTypes.func,
    onLogout: React.PropTypes.func
}

export default ProfileComponent;

