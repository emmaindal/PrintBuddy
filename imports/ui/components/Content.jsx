import React from 'react';

import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";

export default class Content extends React.Component {
    constructor(props) {
        super(props)

        this.popLoginModal = this.popLoginModal.bind(this);
        this.popRegisterModal = this.popRegisterModal.bind(this);
    }

    popLoginModal() {
        $('#register-modal').closeModal();
        $('#login-modal').openModal({
            inDuration: 100,
            outDuration: 100,
        });
    }
    popRegisterModal() {
        $('#login-modal').closeModal();
        $('#register-modal').openModal({
            inDuration: 100,
            outDuration: 100,
        });
        $('#register-modal').animate({
            scrollTop: 0
        }, 10);
    }

    render() {
        return (
            <div className="start-page">
                <nav className="blue" role="navigation">
                    <div className="nav-wrapper container">
                        <a id="logo-container" href="/start" className="brand-logo">PRINTBUDDY</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#about">ABOUT</a></li>
                            <li><a href="#theteam">THE TEAM</a></li>
                            <li><a href="#contact">CONTACT</a></li>
                            <li><a onClick={this.popLoginModal}>LOG IN</a></li>

                        </ul>

                        <ul id="mobile-nav" className="side-nav">
                            <li><a href="#start">START</a></li>
                            <li><a href="#about">ABOUT</a></li>
                            <li><a href="#theteam">THE TEAM</a></li>
                            <li><a href="#contact">CONTACT</a></li>
                            <li><a onClick={this.popLoginModal}>LOG IN</a></li>
                        </ul>
                        <a href="#" data-activates="mobile-nav" className="button-collapse"><i className="material-icons">menu</i></a>
                    </div>
                </nav>

                <div id="index-banner" className="parallax-container">
                    <div id="start" className="section no-pad-bot">
                        <div className="container">
                            <h1 className="header center teal-text text-lighten-2"></h1>
                            <div className="row center">

                                <h5 className="header col s12 light"></h5>
                            </div>

                        </div>
                    </div>
                    <div className="welcome">
                        <h4 className="slogan">FIND A PRINTBUDDY.<br/><span className="slogan-smaller">OR BECOME ONE.</span></h4>

                        <a onClick={this.popRegisterModal} className="btn btn-1 sign-up">
                            <svg>
                                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                            </svg>
                            SIGN UP
                        </a>
                        <h6><div onClick={this.popLoginModal}><a >Already have an account? Sign in here.</a></div></h6>

                        <div className="arrow bounce">
                            <a className="fa fa-arrow-down fa-2x" href="#second-row"></a>
                        </div>
                    </div>
                    <div className="parallax"><img src="/assets/images/hand.jpg" alt="Unsplashed background img 1" />

                </div>
            </div>

            <div className="container info-two">
                <div id="about" className="section">
                    <div className="row" id="second-row">
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h1 className="center"><i className="material-icons">&#xE838;</i></h1>
                                <h5 className="center">What is PrintBuddy?</h5>

                                <p className="light">PrintBuddy is a platform connecting people in need of printouts with people that have printers.
                                    If you are in need of a printout you simply create a 'Request' on PrintBuddy.
                                    Nearby PrintBuddies will be notified and can choose to apply for it - if your reward is tempting enough!</p>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h1 className="center"><i className="material-icons">&#xE8AD;</i></h1>
                                <h5 className="center">Have a printer?</h5>
                                <p className="light">Become the neighborhood hero and PrintBuddy!
                                    Scoop up all printjobs and make some money while your at it.</p>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h1 className="center"><i className="material-icons">&#xE566;</i></h1>
                                <h5 className="center">Get your document delivered.</h5>

                                <p className="light">Need your documents quickly? Let a PrintBuddy print and deliver your printout for you.
                                    If you feel like some excercise you can always choose to jump on your bike and pick it up yourself.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div id="login-modal" className="modal login-modal">
                <div className="modal-content">
                    <i className="material-icons cancel-icon modal-action modal-close ">clear</i>
                    <LoginContainer />
                    <div className="breakit row">
                        <div className="line-break col s10 offset-s1"></div>
                    </div>
                    <div className="row">
                        <div className="col s10 offset-s1" style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                            <div>Don't have an Account?</div>
                            <a onClick={this.popRegisterModal}>Register</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="register-modal" className="modal register-modal ">
                <div id="scrollbar">
                    <div className="modal-content">
                        <i className="material-icons cancel-icon modal-action modal-close ">clear</i>
                        <RegisterContainer />
                        <div className="breakit row">
                            <div className="line-break col s10 offset-s1"></div>
                        </div>
                        <div className="row">
                            <div className="col s10 offset-s1" style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                                <div>Already have an Account?</div>
                                <a onClick={this.popLoginModal}>Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}
