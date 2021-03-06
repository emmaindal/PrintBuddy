import React from 'react';
import GeoCoder from '../containers/GeoCodeContainer';
import { displayError } from '../helpers/errors';

class RegisterComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            passwordNotEqual: "",
            address: "",
            lat: 0,
            lng: 0,
            isBuddy: null,
            canColor: false,
        }
    }
    onSubmit(e) {
        e.preventDefault();
        if (this.state.lng === 0) {
            displayError("Whoops!", "You need to set your home address");
            return;
        }
        if (this.state.isBuddy === null) {
            displayError("Whoops!", 'You have to choose a role');
            return;
        }
        if (this.refs.password.value == this.refs.confirmpassword.value) {
            if (this.refs.password.value.length < 6)
            {
                displayError("Whoops!", 'Your password must be at least 6 characters');
            }else{
                const user = {
                    email: this.refs.email.value,
                    username: this.refs.username.value,
                    password: this.refs.password.value,
                    position: { type: "Point", coordinates: [this.state.lng, this.state.lat] },
                    address: this.state.address,
                    printBuddy: {
                        canColor: this.state.canColor,
                        isActive: this.state.isBuddy
                    }
                }
                this.props.submit(user);
                $('#register-modal').closeModal();
            }
        } else {
            this.setState({ passwordNotEqual: "Password not equal" });
            displayError("Whoops!", 'Your password must match!');
        }
    }

    onPickAdress(address) {
        this.setState({
            address: address.formatted_address,
            lat: address.geometry.location.lat,
            lng: address.geometry.location.lng
        });
    }

    handleBuddyChange(e) {
        if (e.target.id === "test4") {
            this.setState({
                isBuddy: true
            });
        } else {
            this.setState({
                isBuddy: false
            });
        }
    }
    handleColorChange(event) {
        if (this.state.canColor) {
            this.setState({ canColor: false });
        }
        else {
            this.setState({ canColor: true });
        }
    }
    componentDidMount() {
        $('select').material_select();
    }
    render() {
        return (
            <div id="registerback">
                <form className="col s10 offset-s1" onSubmit={this.onSubmit.bind(this)}>
                    <div className="row" style={{marginTop: "30px"}}>
                        <label htmlFor="email">
                            <i className="small material-icons">email</i>
                        </label>
                        <div className="input-field col s10 offset-s1 m10 offset-m1">
                            <input id="email" type="email" className="validate" ref="email" required />
                            <label htmlFor="email">E-mail *</label>
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="userId">
                            <i className="small material-icons">perm_identity</i>
                        </label>
                        <div className="input-field col s10 offset-s1 m10 offset-m1">
                            <input id="userId" type="text" className="validate" ref="username" required />
                            <label htmlFor="userId">Username *</label>
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="password">
                            <i className="small material-icons">lock</i>
                        </label>
                        <div className="input-field col s10 offset-s1 m10 offset-m1">
                            <input id="password" type="password" className="validate" ref="password" required />
                            <label htmlFor="password">Password *</label>
                        </div>
                    </div>
                    <div className="row" style={{ marginBottom: 0 }}>
                        <label htmlFor="confirmpassword">
                            <i className="small material-icons">lock</i>
                        </label>
                        <div className="input-field col s10 offset-s1 m10 offset-m1">
                            <input id="confirmpassword" type="password" className="validate" ref="confirmpassword"
                                required />
                            <label htmlFor="confirmpassword">Confirm password *</label>
                        </div>
                    </div>
                    {this.state.passwordNotEqual ?
                        <div className="row">
                            <div className="col s10 offset-s1 m10 offset-m1">
                                <label id="passwordNotEqual"> {this.state.passwordNotEqual}</label>
                            </div>
                        </div>
                        : null}
                    <div id="test-geocode" style={{ marginTop: "10px", marginBottom: "0px" }} className="row">
                        <div className="col s10 offset-s1 m10 offset-m1">
                            <p>Home address *</p>
                            <p><strong>{this.state.address}</strong></p>
                            <GeoCoder onPickAdress={(address) => {
                                this.onPickAdress(address)
                            }} />
                        </div>
                    </div>
                    <div className="row" style={{textAlign: "center"}}>
                        <p style={{textAlign: "center"}}>Choose your role</p>
                        <div className="col s6">
                            <input onChange={(e) => this.handleBuddyChange(e)} className="with-gap" name="group1" type="radio" id="test3"  />
                            <label htmlFor="test3">Requestor</label>
                        </div>
                        <div className="col s6">
                            <input onChange={(e) => this.handleBuddyChange(e)} ref="buddyCheck" className="with-gap" name="group1" type="radio" id="test4"  />
                            <label htmlFor="test4">PrintBuddy</label>
                        </div>
                    </div>
                    {this.state.isBuddy ?
                        <div className="row">
                            <div className="switch center-align">
                                <div className="col s12">
                                    <label style={{ marginRight: "37px" }}>
                                        Black/white
                                        <input type="checkbox" checked={this.state.canColor}
                                            onChange={(e) => this.handleColorChange(e)} />
                                        <span className="lever"></span>
                                        Color
                                    </label>
                                </div>
                            </div>
                        </div>
                        : null}
                    <div className="row register-modal-row">
                        <button className="col s10 offset-s1 waves-effect waves-light btn">Register</button>
                    </div>
                </form>
            </div>
        );
    }
}

RegisterComponent.propTypes = {
    submit: React.PropTypes.func,
}


export default RegisterComponent
