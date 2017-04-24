import React from 'react';

export default class AboutComponent extends React.Component {
    componentWillMount() {
        $("#app").fadeOut(1);
    }
    componentDidMount() {
        $("#prepage").fadeOut(200);
        $("#app").fadeIn(1000);
          
    }
    render() {
        return(
            <div>
                <div className="row">

                    <div className="col s12 m12 l12 grid-example about-content first">
                        <section className="section">
                            <h1>Who are we?</h1>
                            <p>Read about PrintBuddy as a team or contact us below if you have any questions.</p>
                        </section>
                    </div>
                    <div className="row about-row">
                    <div className="col s12 m12 l12 grid-example about-content second">
                        <section className="section-about-content second">
                            <span className="about-article-first">
                                <h4>How everything started</h4>
                                <p>”Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum
                                </p>
                                <p>”Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum
                                </p>
                            </span>
                        </section>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col s12 m12 l12 grid-example about-content third">
                        <section className="section-about-content third">
                            <h4 className="our-team-heading">Our Team</h4>
                            <div className="card-container">
                                <div className="card card-avatar">
                                    <div className="waves-effect waves-block waves-light">
                                        <p><i className="material-icons person">person</i></p>
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">Simon
                                            <h6>Developer</h6>
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <div className="card-container">
                                <div className="card card-avatar">
                                    <div className="waves-effect waves-block waves-light">
                                        <p><i className="material-icons person">person</i></p>
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">Emma
                                            <h6>Developer/Designer</h6>
                                        </span>

                                    </div>
                                </div>

                            </div>
                            <div className="card-container">
                                <div className="card card-avatar">
                                    <div className="waves-effect waves-block waves-light">
                                        <p><i className="material-icons person">person</i></p>
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">Musti
                                            <h6>Developer</h6>
                                        </span>

                                    </div>
                                </div>

                            </div>
                            <div className="card-container">
                                <div className="card card-avatar">
                                    <div className="waves-effect waves-block waves-light">
                                        <p><i className="material-icons person">person</i></p>
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">Mikael
                                            <h6>Chief Programmer</h6>
                                        </span>

                                    </div>
                                </div>

                            </div>
                            <div className="card-container">
                                <div className="card card-avatar">
                                    <div className="waves-effect waves-block waves-light">
                                        <p><i className="material-icons person">person</i></p>
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">Alexander
                                            <h6>Developer/Designer</h6>
                                        </span>

                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                    </div>
                    <div className="row about-row">
                    <div className="col s12 m12 l12 grid-example about content fourth">
                        <h4>Contact</h4>
                        <section className="col s12 m6 l6 section-about-content fourth one">
                            <h5>Say Hello!</h5>
                            <p>We are happy to answer any and all of your
                                questions concerning our service.
                                Just fill in the form to the right and we will answer
                                as soon as possible. Have a great day!
                            </p>
                            <ul>
                                <li><a  href="mailto:info@printbuddy.se"><i className="material-icons">email</i> info@printbuddy.se</a></li>
                                <li><i className="material-icons">phone</i> +4612345678</li>
                            </ul>
                        </section>
                        <section className="col s12 m6 l6 section-about-content fourth two">
                            <div className="formContainer">
                                <form action="">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="name" type="text" className="validate"/>
                                            <label htmlFor="name">Name:</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="email" type="email" className="validate"/>
                                            <label htmlFor="email">Email:</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea id="textarea1" className="materialize-textarea"/>
                                            <label htmlFor="textarea1">Write your message:</label>
                                        </div>
                                    </div>
                                    <a className="waves-effect waves-light btn">Send</a>
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
