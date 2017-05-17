import React from 'react';

import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";

export default class Content extends React.Component {
    constructor(props) {
        super(props)

        this.popLoginModal = this.popLoginModal.bind(this);
        this.popRegisterModal = this.popRegisterModal.bind(this);
    }
    componentDidMount() {
        $('.slider').slider({
            indicators: false,
            height: "inherit"
        });
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
                <nav role="navigation">
                    <div style={{ marginLeft: "5%", marginRight: "5%" }} className="nav-wrapper">
                        <a id="logo-container" href="/start" className="brand-logo">PRINTBUDDY</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#contact">CONTACT</a></li>
                            <li><a onClick={this.popLoginModal}>LOG IN</a></li>

                        </ul>

                        <ul id="mobile-nav" className="side-nav">
                            <li><a href="#contact">CONTACT</a></li>
                            <li><a onClick={this.popLoginModal}>LOG IN</a></li>
                        </ul>
                        <a href="#" data-activates="mobile-nav" className="button-collapse"><i className="material-icons">menu</i></a>
                    </div>
                </nav>
                <div id="index-banner">
                    <div id="start" className="section no-pad-bot">
                        <div className="container">
                            <h1 className="header center teal-text text-lighten-2"></h1>
                            <div className="row center">
                                <h5 className="header col s12 light"></h5>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="welcome col s12 m12 l10">
                            <h4 className="slogan animated fadeInDownBig"><span className="main-slogan">FIND A PRINTBUDDY.</span><br /><span className="slogan-smaller">OR BECOME <span>ONE</span>.</span></h4>

                            <a onClick={this.popRegisterModal} className="btn btn-1 sign-up animated fadeIn">
                                <svg>
                                    <rect x="0" y="0" fill="none" width="100%" height="100%" />
                                </svg>
                                JOIN
                            </a>
                            <h6 className="animated fadeIn"><div onClick={this.popLoginModal}><a style={{ opacity: "0.9" }} >Already have an account? Log in here.</a></div></h6>
                            <a href="#info-two"><i className="arrow-btn material-icons">keyboard_arrow_down</i></a>
                        </div>
                    </div>

                </div>
                <div className="mobile-start animated fadeInUpBig hide-on-med-and-down">
                    <div className="mobile-overlay">
                        <div className="slider">
                            <ul className="slides">
                                <li>
                                    <img />
                                    <div className="caption left-align">
                                        <h3>Left Aligned Caption</h3>
                                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                                    </div>
                                </li>
                                <li>
                                    <div className="caption center-align">
                                        <h3>This is our big Tagline!</h3>
                                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                                    </div>
                                </li>
                                <li>
                                    <div className="caption center-align">
                                        <h3>This is our big Tagline!</h3>
                                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="/assets/images/mobile-device.png" alt="mobile-device" />
                </div>

                <div className="info-two section scrollspy" id="info-two">
                    <div className="row">
                        <div className="col s12 center-align">
                            <h4 className="sub-title">THE UBER FOR PRINTOUTS.</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 center-align">
                            <img className="img-info-two" src="/assets/images/computer.jpg" alt="computer display printbuddy app" />
                        </div>
                    </div>
                    <div style={{ marginBottom: "0" }} className="row" id="second-row">
                        <div style={{ marginBottom: "7%" }} className="col s12 m10 l3 offset-m1 offset-l1">
                            <div className="icon-block">
                                <h5 className="center">Have a printer?</h5>
                                <p className="light">Become the neighborhood hero and PrintBuddy!
                                    Scoop up all printjobs and make some money while your at it.</p>
                            </div>
                        </div>
                        <div style={{ marginBottom: "7%" }} className="col s12 m10 l3 offset-m1 offset-l1">
                            <div className="icon-block">
                                <h5 className="center">What is PrintBuddy?</h5>
                                <p className="light">PrintBuddy is a platform connecting people in need of printouts with people that have printers.
                                    If you are in need of a printout you simply create a 'Request' on PrintBuddy.
                                    Nearby PrintBuddies will be notified and can choose to apply for it - if your reward is tempting enough!</p>
                            </div>
                        </div>
                        <div style={{ marginBottom: "7%" }} className="col s12 m10 l3 offset-m1 offset-l1">
                            <div className="icon-block">
                                <h5 className="center">Get your document delivered.</h5>

                                <p className="light">Need your documents quickly? Let a PrintBuddy print and deliver your printout for you.
                                    If you feel like some excercise you can always choose to jump on your bike and pick it up yourself.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-three">
                    <div id="about" className="section">
                        <div className="row">
                            <div className="laptop-row">
                                <div style={{ textAlign: "center" }} className="laptop-start">
                                    <div className="laptop-overlay">
                                        <div className="slider">
                                            <ul className="slides">
                                                <li>
                                                    <img src="/assets/images/laptop-view2.png" alt="Printout delivery service via PrintBuddy"/>
                                                </li>
                                                <li>
                                                    <img src="/assets/images/hand.jpg" alt="Amazing chat conversation with a Printbuddy"/>
                                                </li>
                                                <li>
                                                    <img src="/assets/images/laptop-view3.png" alt="List of printjobs provided via PrintBuddy"/>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <img src="/assets/images/laptop.png" alt="laptop showing PrintBuddy website" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 center-align">
                                <h4 className="sub-title-two">WHAT DOES PRINTBUDDY LOOK LIKE?</h4>
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
