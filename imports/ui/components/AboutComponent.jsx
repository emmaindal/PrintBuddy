import React from 'react';

export default class AboutComponent extends React.Component {
    render() {
        return(
            <div id="about-content">
                <div className="row about-row">

                    <div className="col s12 m12 l12 grid-example about-content first" id="fifth-row">
                        <section className="section" >
                            <h1>Who are we?</h1>
                            <p>Read about PrintBuddy as a team or contact us below if you have any questions.</p>

                        </section>
                    </div>
                    <div className="row about-row">
                        <div className="col s12 m12 l12 grid-example about-content second">
                            <section className="section-about-content second">
                                <span className="about-article-first">
                                    <h4>How everything started</h4>
                                    <p>PrintBuddy is a school project started in Mars 2017.
                                        Our goal with this project is to make it easier for you to get any
                                        document printed out in your neighborhood.
                                    </p>
                                    <br/>
                                    <p>We know how hard it is to really need, for example a CV, printed out.
                                        You have no printer at home, you need to go to a library or something
                                        and it’s too late because the library closes at 6 pm.
                                    </p>
                                    <br/>
                                    <p>
                                        Therefore, we, as a team, works for a easy way to make your days more comfortable.
                                        Just a click away and you get the ability to have your really important documents in
                                        your hand after a few minutes - if there is a PrintBuddy in your neighborhood.
                                    </p>
                                </span>
                            </section>
                        </div>
                    </div>
                    <div className="row about-row">
                        <div className="col s12 m12 l12 grid-example about-content third">
                            <section className="section-about-content third">
                                <h4 className="our-team-heading">OUR TEAM</h4>
                                <div className="col s12 m3 l3">
                                    <div className="card card-avatar">
                                        <div className="waves-effect waves-block waves-light">
                                            <p><i className="material-icons person">person</i></p>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title activator grey-text text-darken-4">Simon
                                                <h6>Developer</h6>
                                                <div className="contact-icons">
                                                    <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                                                    <a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                                </div>
                                            </span>
                                        </div>
                                </div>
                                </div>
                                <div className="col s12 m3 l3">
                                    <div className="card card-avatar">
                                        <div className="waves-effect waves-block waves-light">
                                            <p><i className="material-icons person">person</i></p>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title activator grey-text text-darken-4">Emma
                                                <h6>Developer/Designer</h6>
                                                <div className="contact-icons">
                                                    <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                                                    <a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                                </div>
                                            </span>

                                        </div>
                                    </div>

                                </div>
                                <div className="col s12 m3 l3">
                                    <div className="card card-avatar">
                                        <div className="waves-effect waves-block waves-light">
                                            <p><i className="material-icons person">person</i></p>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title activator grey-text text-darken-4">Mikael
                                                <h6>Chief Programmer</h6>
                                                <div className="contact-icons">
                                                    <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                                                    <a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                                </div>
                                            </span>

                                        </div>
                                    </div>

                                </div>
                                <div className="col s12 m3 l3">
                                    <div className="card card-avatar">
                                        <div className="waves-effect waves-block waves-light">
                                            <p><i className="material-icons person">person</i></p>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title activator grey-text text-darken-4">Alexander
                                                <h6>Developer/Designer</h6>
                                                <div className="contact-icons">
                                                    <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                                                    <a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                                </div>
                                            </span>

                                        </div>
                                    </div>

                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="row about-row">
                        <div className="col s12 m12 l12 grid-example about content fourth">
                            <section className="col s12 m6 l6 section-about-content fourth one">
                                <h4>Say Hello!</h4>
                                <p>We are happy to answer any and all of your
                                    questions concerning our service.
                                    Just fill in the form to the right and we will answer
                                    as soon as possible. Have a great day!
                                </p>
                                <ul>
                                    <li><a  href="mailto:info@printbuddy.se"><i className="material-icons">email</i> info@printbuddy.se</a></li>
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
