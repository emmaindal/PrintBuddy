import React from 'react';
import i18n from 'meteor/universe:i18n';


class LoginComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {email: '', password: ''};
        this.onSubmit = this.onSubmit.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.onForgotPassword = this.onForgotPassword.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.submit(user);
    }

    onForgotPassword(e) {
        e.preventDefault();
        if(this.state.email.length > 1){
            this.props.onForgotPassword(this.state.email);
        }
    }

    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }

    handleEmailChange(e){
        this.setState({email:e.target.value})
    }

    render() {
        return (
            <div>
                <div id="loginback">
                    <form className="col offset-s1 s10" onSubmit={this.onSubmit}>
                        <div className="row" style={{marginTop: "10px"}}>
                            <label htmlFor="email">
                                <i className="small material-icons">perm_identity</i>
                            </label>
                            <div className="input-field col offset-s1 s10">
                                <input value={this.state.email} onChange={this.handleEmailChange} id="email" type="email" className="validate" required ref="email"/>
                                <label htmlFor="email">{i18n.__('components.logincomponent.email')}</label>
                            </div>
                        </div>
                        <div className="row margin-bottom-after">
                            <i className="small material-icons">lock</i>
                            <div className="input-field col offset-s1 s10">
                                <input value={this.state.password} onChange={this.handlePasswordChange} id="password" type="password" className="validate" required ref="password"/>
                                <label htmlFor="password">{i18n.__('components.logincomponent.password')}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s10 offset-s1" style={{ marginTop: "-25px" }}>
                                <a onClick={this.onForgotPassword}>{i18n.__('components.logincomponent.forgotpassword')}</a>
                                <p>{this.props.forgotPasswordStatus}</p>
                            </div>
                        </div>
                        <div className="row login-modal-row">
                            <button className="col offset-s1 s10 waves-effect waves-light btn btn-block">{i18n.__('components.logincomponent.login')}</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        );
    }
}

LoginComponent.propTypes = {
    submit: React.PropTypes.func,
    onForgotPassword: React.PropTypes.func
}

export default LoginComponent;
