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
        this.setState({ emailSuccess: "Thanks! We will get back to you as soon as possible!" });
    }
    render() {
        return (
            <div id="about-content">

                <div id="index-banner" className="parallax-container about-content first">
                    <div className="section no-pad-bot">
                        <div className="container">
                            <h1 className="header center teal-text">WHO ARE WE?</h1>
                            <div className="row center">
                                <h5 className="header col s12 light">Read about the team behind PrintBuddy and contact us if you have any questions.</h5>
                            </div>
                        </div>
                    </div>

                    <div className="parallax"><img src="/assets/images/people-coffee-notes-tea.jpg" alt="Unsplashed background img 1"/></div>
                </div>


                <div className="row about-row">
                    <div className="col s12 m12 l12 grid-example about-content third">
                        <section id="theteam" className="section-about-content third">
                            <h4 className="our-team-heading">THE TEAM</h4>
                            <section className="section-about-content second">


                                <span className="about-article-first">

                                    <h6>We are four information architecht students at Malmö University.
                                        During our first year we were tasked with a project - to come up with an idea and bring it to life in 2 months time.</h6>

                                    <h6>We came up with PrintBuddy, a platform for connecting people in need of printouts with people that have printers.</h6>

                                    <h6>We saw this project as an opportunity to learn more about modern web technologies, tools and frameworks.
                                        Therefore we decided to use React, SASS, MongoDB and Meteor to bring you PrintBuddy.</h6>
                                </span>
                            </section>
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
                            <div className="col s12 m6 l3" style={{float: "right"}}>
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
                    <section id="contact" className="col s12 m6 l6 section-about-content fourth one">
                        <h4>Say Hello!</h4>
                        <p style={{marginTop: '10px'}}>We are happy to answer any and all of your
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

    )
}
}

AboutComponent.propTypes = {
    onSubmitEmail: React.PropTypes.func
};

export default AboutComponent;
