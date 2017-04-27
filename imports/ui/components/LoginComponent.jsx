import React from 'react';
import i18n from 'meteor/universe:i18n';


class LoginComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {};
    }

    componentDidMount() {
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.refs.email.value,
            password: this.refs.password.value
        };
        this.props.submit(user);
    }

    render() {
        return (
            <div>
                <div id="loginback">
                    <h4 className="text-center">Login</h4>
                    <form className="col offset-s1 s10" onSubmit={this.onSubmit.bind(this)}>
                        <div className="row">
                            <label htmlFor="email">
                                <i className="small material-icons">perm_identity</i>
                            </label>
                            <div className="input-field col offset-s2 s8">
                                <input id="email" type="email" className="validate" required ref="email"/>
                                <label htmlFor="email">E-mail</label>
                            </div>
                        </div>
                        <div className="row margin-bottom-after">
                            <i className="small material-icons">lock</i>
                            <div className="input-field col offset-s2 s8">
                                <input id="password" type="password" className="validate" required ref="password"/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row login-modal-row">
                            <button className="col offset-s2 s8 waves-effect waves-light btn btn-block">Login</button>
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
