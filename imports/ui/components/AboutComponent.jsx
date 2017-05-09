import React from 'react';

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
        this.setState({ emailSuccess: "Thanks! We will answer your message as soon as possible!" });
    }
    render() {
        return (
            <div id="about-content">
                <div className="row about-row">

                    <div className="col s12 m12 l12 grid-example about-content first" id="fifth-row">
                        <section className="section" >
                            <h1>WHO ARE WE?</h1>
                            <p>Read about the team behind PrintBuddy and contact us if you have any questions.</p>

                        </section>
                    </div>
                    <div className="row about-row">
                        <div className="col s12 m12 l12 grid-example about-content second">
                            <section className="section-about-content second">
                                <span className="about-article-first">
                                    <h4>How everything started</h4>
                                    <p>PrintBuddy is a school project that started in Mars 2017.
                                    <br/>
                                        Our goal with this project was to create a fun platform for connecting people in need of a printout, with people that have printers.
                                        <br/>Imagine your printer is out of ink, or you dont even own a printer, and desperatly need a printout! Wouldn't it be nice if you could
                                    just upload the document and have someone deliver the printout for you?
                                    <br/>
                                        Your printout is just a few clicks away - if there is a PrintBuddy in your neighborhood.
                                    </p>
                                    <br/>
                                    <p>We saw this project as an opportunity to learn more about modern web technologies, tools and frameworks.<br/> Therefore we decided to use React, SASS, MongoDB and Meteor
                                        to bring you PrintBuddy.
                                    </p>
                                </span>
                            </section>
                        </div>
                    </div>
                    <div className="row about-row">
                        <div className="col s12 m12 l12 grid-example about-content third">
                            <section className="section-about-content third">
                                <h4 className="our-team-heading">OUR TEAM</h4>
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
                                <div className="col s12 m6 l3">
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
                            </section>
                    </div>
                </div>
                <div className="row about-row">
                    <div className="col s12 m12 l12 grid-example about content fourth">
                        <section className="col s12 m6 l6 section-about-content fourth one">
                            <h4>Say Hello!</h4>
                            <p>We are happy to answer any and all of your
                                    questions concerning PrintBuddy.
                                    Just fill out the form and we will get back to you
                                    as soon as possible. Have a great day!
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
                                            <label htmlFor="name">Name</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="email" type="email" className="validate" required ref="email" />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea id="textarea1" className="materialize-textarea" required ref="text" />
                                            <label htmlFor="textarea1">Write your message</label>
                                        </div>
                                    </div>
                                    <button className="waves-effect waves-light btn" type="submit">Send</button>
                                    <p id="about-formContainer-success">{this.state.emailSuccess}</p>
                                </form>
                            </div>
                        </section>
                    </div>
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
