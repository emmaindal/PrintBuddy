import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {browserHistory} from 'react-router'

import {displayError} from  '../helpers/errors';
import {displayAlert} from  '../helpers/alerts';


class Verified extends React.Component {
    constructor(props) {
        super(props);
        this.state = {password:"", confirmPassword:""};
        this.passwordChange = this.passwordChange.bind(this);
        this.confirmPasswordChange = this.confirmPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        $("#prepage").fadeOut(200);
        $("#app").fadeIn(1500);

    }

    componentWillMount() {
        $("#app").fadeOut(1);
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.password === this.state.confirmPassword) {
            if (this.refs.password.value.length < 6) {
                displayError("Whoops!", 'Your password must be at least 6 characters');
            } else {
                Accounts.resetPassword(this.props.location.query.token, this.state.password, ( error ) =>{
                    if (error){
                        displayError( "Error", "oops something went wrong.");

                    }else {
                        displayAlert('Success', "Password saved!");
                        setTimeout(function() {
                            browserHistory.replace('/');
                        }, 4000);
                    }
                });

            }
        }else {
            displayError("Whoops!", 'Your password must match!');
        }
    }

    passwordChange(e){
        this.setState({password:e.target.value})
    }

    confirmPasswordChange(e){
        this.setState({confirmPassword:e.target.value})
    }

    render() {
        return (
            <div>
                <form className="col offset-s1 s5" onSubmit={this.onSubmit}>
                    <div className="row margin-bottom-after">
                        <div className="input-field col offset-s1 s10">
                            <input value={this.state.password} onChange={this.passwordChange} id="password"
                                   type="password" className="validate" required ref="password"/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row margin-bottom-after">
                        <div className="input-field col offset-s1 s10">
                            <input value={this.state.confirmPassword} onChange={this.confirmPasswordChange} id="password"
                                   type="password" className="validate" required ref="password"/>
                            <label htmlFor="password">Confirm password </label>
                        </div>
                    </div>
                    <div className="row login-modal-row">
                        <button className="col offset-s1 s10 waves-effect waves-light btn btn-block">Reset</button>
                    </div>
                </form>
            </div>
        );
    }
}

const VerifiedContainer = createContainer(() => {

    return {};
}, Verified);


export default VerifiedContainer;
