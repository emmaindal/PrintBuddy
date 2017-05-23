import { browserHistory } from 'react-router';
import React from 'react';
import i18n from 'meteor/universe:i18n';

class ErrorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = { emailSuccess: "" };
    }

    onSubmitEmail(e) {
        e.preventDefault();
        const message = {
            email: this.refs.email.value,
            name: this.refs.name.value,
            text: this.refs.text.value
        }

        this.props.onSubmitEmail(message);
        this.setState({ emailSuccess: i18n.__('components.errorcomponent.emailSuccess') });
    }
    
    onClick(){
        {browserHistory.replace("/")};
    }


    render() {
        return(
            <div className="error-component">
                <div className="error-container">
                    <nav className="start-nav">
                        <div className="nav-wrapper nav-container">
                            <a href="/start" className="brand-logo">PRINTBUDDY</a>
                        </div>
                    </nav>
                    <h1>{i18n.__('components.errorcomponent.header')}</h1>
                    <h5>{i18n.__('components.errorcomponent.errorNotice')}</h5>
                    <h6>{i18n.__('components.errorcomponent.errorDirections')}</h6>
                </div>

                <div className="error-message">
                    <div className="hero2"></div>
                    <div className="btn-one">
                        <button className="btn-floating btn-large waves-effect waves-light blue error-btn modal-trigger" data-target="modal1"><i className="fa fa-envelope" aria-hidden="true"></i></button>
                    </div>

                    <div className="btn-two">
                        <a onClick={this.onClick} className="btn-floating btn-large waves-effect waves-light blue error-btn"><i className="fa fa-home" aria-hidden="true"></i></a>

                    </div>
                </div>


                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>{i18n.__('components.errorcomponent.contactUs')}</h4>

                        <div className="row">
                            <form action="" className="col s12" onSubmit={this.onSubmitEmail.bind(this)}>
                                <div className="row modal-form-row">
                                    <div className="input-field col s12">
                                        <input id="name" type="text" className="validate" required ref="name" />
                                        <label htmlFor="name">{i18n.__('components.errorcomponent.name')}</label>
                                    </div>
                                </div>
                                <div className="row modal-form-row">
                                    <div className="input-field col s12">
                                        <input id="email" type="email" className="validate" required ref="email" />
                                        <label htmlFor="email">{i18n.__('components.errorcomponent.email')}</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="textarea1" className="materialize-textarea" required ref="text" />
                                        <label htmlFor="textarea1">{i18n.__('components.errorcomponent.writeMessage')}</label>
                                    </div>
                                </div>
                                <button className="waves-effect waves-light btn" type="submit">{i18n.__('components.errorcomponent.sendButton')}</button>
                                <p id="error-formContainer-success">{this.state.emailSuccess}</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ErrorComponent.propTypes = {
    onSubmitEmail: React.PropTypes.func
};


export default ErrorComponent;
