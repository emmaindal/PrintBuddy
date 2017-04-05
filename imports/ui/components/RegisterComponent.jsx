import React from 'react';
import i18n from 'meteor/universe:i18n';

class RegisterComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            passwordNotEqual: ""
        }
    }

    componentDidMount() {
        $('select').material_select();
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.refs.password.value == this.refs.confirmpassword.value) {
            const user = {email: this.refs.email.value, username: this.refs.username.value, password: this.refs.password.value};
            this.props.submit(user);
        } else {
            this.setState({passwordNotEqual: "Password not equal"});
        }
    }

    render() {
        return (
            <div id="registerback">
                <div className="row">
                    <h4 className="text-center">Register Account</h4>
                    <form className="col offset-s1 s10" onSubmit={this.onSubmit.bind(this)}>
                        <div className="row">
                            <label htmlFor="email">
                                <i className="small material-icons">email</i>
                            </label>
                            <div className="input-field col offset-s3 s6">
                                <input id="email" type="email" className="validate" ref="email" required/>
                                <label htmlFor="email">E-mail</label>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="userId">
                                <i className="small material-icons">perm_identity</i>
                            </label>
                            <div className="input-field col offset-s3 s6">
                                <input id="userId" type="text" className="validate" ref="username" required/>
                                <label htmlFor="userId">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="password">
                                <i className="small material-icons">lock</i>
                            </label>
                            <div className="input-field col offset-s3 s6">
                                <input id="password" type="password" className="validate" ref="password" required/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="confirmpassword">
                                <i className="small material-icons">lock</i>
                            </label>
                            <div className="input-field col offset-s3 s6">
                                <input id="confirmpassword" type="password" className="validate" ref="confirmpassword"
                                       required/>
                                <label htmlFor="confirmpassword">Confirm password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col offset-s3 s6">
                                <label id="passwordNotEqual"> {this.state.passwordNotEqual}</label>
                            </div>
                        </div>
                        <div className="switch">
                            <div className="col offset-s4 s4">
                                <label>
                                    Buddy
                                    <input type="checkbox"/>
                                    <span className="lever"></span>
                                    PrintBuddy
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <button className="waves-effect waves-light btn">Submit</button>
                        </div>
                    </form>
                    <div className="input-field col offset-s4 s4">
                        <i className="small material-icons printer">print</i>
                        <select multiple>
                            <option className="" value="" disabled>PrintBuddy settings</option>
                            <option value="1">Delevery</option>
                            <option value="2">Color</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

RegisterComponent.propTypes = {
    submit: React.PropTypes.func,
}


export default RegisterComponent
