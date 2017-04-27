import React from 'react';
import GeoCoder from '../containers/GeoCodeContainer';

class RegisterComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            passwordNotEqual: "",
            address: "",
            lat: 0,
            lng: 0,
            isBuddy: false,
            canColor: false,
        }
    }
    onSubmit(e) {
        $('#register-modal').closeModal();
        e.preventDefault();
        if (this.state.lng == 0) {
            this.setState({address: "You need to set home address"});
            return;
        }

        if (this.refs.password.value == this.refs.confirmpassword.value) {
            const user = {
                email: this.refs.email.value,
                username: this.refs.username.value,
                password: this.refs.password.value,
                position: { type: "Point", coordinates: [ this.state.lng, this.state.lat ] },
                address: this.state.address,
                printBuddy: {
                    canColor: this.state.canColor,
                    isActive: this.state.isBuddy
                }
            }
            this.props.submit(user);
        } else {
            this.setState({passwordNotEqual: "Password not equal"});
        }
    }

    onPickAdress(address) {
        this.setState({
            address: address.formatted_address,
            lat: address.geometry.location.lat,
            lng: address.geometry.location.lng
        });
    }

    handleChange(event) {
        if (this.state.isBuddy) {
            this.setState({isBuddy: false});
        }
        else {
            this.setState({isBuddy: true});
            // TODO kanske ersätta timeout med en tracker??
            setTimeout(() => {
                $('#mySelectBox').material_select();
                $("#mySelectBox").on('change', (e) => this.onSelectChange(e));
            }, 100);
        }
    }

    onSelectChange(e) {
        // Todo Kan säkert göras bättre och snyggare
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        if (value.includes("color")) {
            this.setState({canColor: true});
        } else {
            this.setState({canColor: false});
        }
    }

    render() {
        return (
            <div id="registerback">
                    <form className="col s10 offset-s1" onSubmit={this.onSubmit.bind(this)}>
                        <div className="row">
                            <label htmlFor="email">
                                <i className="small material-icons">email</i>
                            </label>
                            <div className="input-field col s10 offset-s1 m10 offset-m1">
                                <input id="email" type="email" className="validate" ref="email" required/>
                                <label htmlFor="email">E-mail</label>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="userId">
                                <i className="small material-icons">perm_identity</i>
                            </label>
                            <div className="input-field col s10 offset-s1 m10 offset-m1">
                                <input id="userId" type="text" className="validate" ref="username" required/>
                                <label htmlFor="userId">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="password">
                                <i className="small material-icons">lock</i>
                            </label>
                            <div className="input-field col s10 offset-s1 m10 offset-m1">
                                <input id="password" type="password" className="validate" ref="password" required/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="confirmpassword">
                                <i className="small material-icons">lock</i>
                            </label>
                            <div className="input-field col s10 offset-s1 m10 offset-m1">
                                <input id="confirmpassword" type="password" className="validate" ref="confirmpassword"
                                       required/>
                                <label htmlFor="confirmpassword">Confirm password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s10 offset-s1 m10 offset-m1">
                                <label id="passwordNotEqual"> {this.state.passwordNotEqual}</label>
                            </div>
                        </div>
                        <div id="test-geocode" className="row">
                            <div className="col s10 offset-s1 m10 offset-m1">
                                <p>Set your home address</p>
                                <p><strong>{this.state.address}</strong></p>
                                <GeoCoder onPickAdress={(address) => {
                                    this.onPickAdress(address)
                                }}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="switch text-center">
                                <div className="col s12">
                                    <label>
                                        Requestor
                                        <input type="checkbox" checked={this.state.isBuddy}
                                               onChange={(e) => this.handleChange(e)}/>
                                        <span className="lever"></span>
                                        PrintBuddy
                                    </label>
                                </div>
                            </div>

                            {this.state.isBuddy ? (
                                <div ref="buddySelectBox" className="input-field col s6 offset-s3">
                                    <i className="small material-icons printer">print</i>
                                    <p>Set your printer settings if you want to be a Budddy!</p>
                                    <select id="mySelectBox" multiple>
                                        <option value="qwe" data-type="text-type" disabled> Set here</option>
                                        <option value="color" data-type="text-type"> Color printer</option>
                                    </select>
                                </div>
                            ) : (null)}
                        </div>
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
