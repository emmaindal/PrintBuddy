import React from 'react';
import i18n from 'meteor/universe:i18n';


class LoginComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {email: '', password: ''};
        this.onSubmit = this.onSubmit.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    componentDidMount() {
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.submit(user);
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
                <div id="loginback" className="row">
                    <h4 className="text-center">Login</h4>
                    <form className="col offset-s1 s10" onSubmit={this.onSubmit}>
                        <div className="row">
                            <label htmlFor="email">
                                <i className="small material-icons">perm_identity</i>
                            </label>
                            <div className="input-field col offset-s3 s6">
                                <input value={this.state.email} onChange={this.handleEmailChange} id="email" type="email" className="validate" required ref="email"/>
                                <label htmlFor="email">E-mail</label>
                            </div>
                        </div>
                        <div className="row">
                            <i className="small material-icons">lock</i>
                            <div className="input-field col offset-s3 s6">
                                <input value={this.state.password} onChange={this.handlePasswordChange} id="password" type="password" className="validate" required ref="password"/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <button className="col offset-s4 s4 waves-effect waves-light btn btn-block">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

LoginComponent.propTypes = {
    submit: React.PropTypes.func,
}

export default LoginComponent;
