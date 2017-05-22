import React from 'react';
import i18n from 'meteor/universe:i18n';

class AboutComponent extends React.Component {
    constructor(props) {
        super(props);
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
        this.setState({ emailSuccess: i18n.__('components.about.contactFormSuccess') });
    }
    render() {
        return (
            <div id="about-content">

                <div className="row about-row">
                    <div className="col s12 m12 l12 grid-example about-content third">
                        <section id="theteam" className="section-about-content third">
                            <section className="section-about-content second">
                                <div className="row tech-info" style={{ marginTop: '4%', width: "92%" }}>
                                    <div className="col s12 m6 l6 about-article-first">
                                        <h4 className="our-team-heading">{i18n.__('components.about.ourTeamTitle')}</h4>
                                        <p>
                                            {i18n.__('components.about.ourTeamInfo1')}
                                            <br />
                                            {i18n.__('components.about.ourTeamInfo2')}
                                        </p>
                                    </div>
                                    <div className="col s12 m6 l6 about-article-first">
                                        <h4 className="our-team-heading">{i18n.__('components.about.ourTeamTitleHow')}</h4>
                                        <p>
                                            {i18n.__('components.about.ourTeamInfoHow')}
                                        </p>
                                    </div>
                                </div>
                                <div className="row" id="tech-logos">
                                    <div className="col s12 m6 l2 valign-wrapper tech1">
                                        <img className="responsive-img" src="/assets/images/Materialize-logo.png" alt="Materialize CSS Logo" />
                                    </div>
                                    <div className="col s12 m6 l2 valign-wrapper tech2">
                                        <img className="responsive-img" src="/assets/images/meteor-logo.png" alt="Meteor.js Logo" />
                                    </div>
                                    <div className="col s12 m6 l2 valign-wrapper tech3">
                                        <img className="responsive-img" src="/assets/images/mongo-logo.png" alt="MongoDB Logo" />
                                    </div>
                                    <div className="col s12 m6 l2 valign-wrapper tech4">
                                        <img className="responsive-img" src="/assets/images/react-logo.png" alt="React.js Logo" />
                                    </div>
                                    <div className="col s12 m6 l2 valign-wrapper tech5">
                                        <img className="responsive-img" src="/assets/images/sass-logo.svg" alt="SASS Logo" />
                                    </div>
                                </div>
                                <div className="row">
                                    <h4 className="our-team-heading">  {i18n.__('components.about.theteamTitle')}</h4>
                                </div>
                            </section>
                            <div className="team-photos">
                                <div className="col s12 m6 l3">
                                    <figure className="effect-lexi z-depth-2">
                                        <img src="/assets/images/simon.jpg" alt="img12"></img>
                                        <figcaption>
                                            <h2>Simon <span>Holm</span></h2>
                                            <p>
                                                <a href="mailto:s_simon_s@hotmail.com" target="_blank"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                                                <a href="https://se.linkedin.com/in/simon-holm-50769aa6" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                            </p>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="col s12 m6 l3">
                                    <figure className="effect-lexi z-depth-2">
                                        <img src="/assets/images/emma.jpg" alt="img12"></img>
                                        <figcaption>
                                            <h2>Emma <span>Indal</span></h2>
                                            <p>
                                                <a href="mailto:emma.indahl@gmail.com" target="_blank"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                                                <a href="https://www.linkedin.com/in/emma-indal/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                            </p>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="col s12 m6 l3" style={{ float: "right" }}>
                                    <figure className="effect-lexi z-depth-2">
                                        <img src="/assets/images/mikael.jpg" alt="img12"></img>
                                        <figcaption>
                                            <h2>Mikael <span>Carlstein</span></h2>
                                            <p>
                                                <a href="mailto:mikael.carlstein@gmail.com" target="_blank"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                                                <a href="https://se.linkedin.com/in/mikael-carlstein-79904249" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                            </p>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="col s12 m6 l3">
                                    <figure className="effect-lexi z-depth-2">
                                        <img src="/assets/images/alexander.jpg" alt="img12"></img>
                                        <figcaption>
                                            <h2>Alexander <span>Lööf</span></h2>
                                            <p> <a href="mailto:alex.loofet@gmail.com" target="_blank"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                                                <a href="https://se.linkedin.com/in/alexander-l%C3%B6%C3%B6f-854436115" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                            </p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="row about-row">
                    <div className="col s12 m12 l12 grid-example about content fourth">
                        <section id="contact" className="col s12 m6 l6 section-about-content fourth one">
                            <h4>{i18n.__('components.about.contactFormTitle')}</h4>
                            <p style={{ marginTop: '10px' }}>
                                {i18n.__('components.about.contactInfo')}
                        </p>
                            <ul>
                                <li><a href="mailto:info@printbuddy.se"><i className="material-icons">email</i> info@printbuddy.se</a></li>
                            </ul>
                        </section>
                        <section className="col s12 m6 l6 section-about-content fourth two">
                            <div className="formContainer">
                                <form action="" onSubmit={this.onSubmitEmail.bind(this)}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="name" type="text" className="validate" required ref="name" />
                                            <label htmlFor="name">{i18n.__('components.about.contactFormName')}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="email" type="email" className="validate" required ref="email" />
                                            <label htmlFor="email">{i18n.__('components.about.contactFormEmail')}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea id="textarea1" className="materialize-textarea" required ref="text" />
                                            <label htmlFor="textarea1">{i18n.__('components.about.contactFormTextArea')}</label>
                                        </div>
                                    </div>
                                    <button className="waves-effect waves-light btn" type="submit">{i18n.__('components.about.contactFormSend')}</button>
                                    <p id="about-formContainer-success">{this.state.emailSuccess}</p>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        )
    }
}

AboutComponent.propTypes = {
    onSubmitEmail: React.PropTypes.func
};

export default AboutComponent;
