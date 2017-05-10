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
                <div className="row">
                    <div className="col s12 m12 l12 grid-example content-first" id="first-row">
                        <nav className="start-nav hide-on-small-only">
                            <div className="nav-wrapper nav-container">
                                <a href="/start" className="brand-logo">PRINTBUDDY</a>
                                <ul className="right">
                                    <li><a  onClick={this.popLoginModal}>LOG IN</a></li>
                                </ul>
                            </div>
                        </nav>
                        <div className="welcome">
                            <h4 className="slogan">FIND A PRINTBUDDY.<br/><span className="slogan-smaller">OR BECOME ONE.</span></h4>

                            <a onClick={this.popRegisterModal} className="btn btn-1 sign-up">
                                <svg>
                                    <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                                </svg>
                                SIGN UP
                            </a>
                            <h6><a onClick={this.popLoginModal}><strong>Already have an account? Sign in here.</strong></a></h6>

                            <div className="arrow bounce">
                                <a className="fa fa-arrow-down fa-2x" href="#second-row"></a>
                            </div>
                        </div>

                    </div>
                    <div className="info-wrapper">
                        <div className="row two">
                            <div className="col m6 s12 grid-example content-second left" id="second-row">
                                <div className="text-wrapper left">
                                    <h4>Get your printout delivered</h4>
                                    <h5>Need your documents quickly? Let a PrintBuddy print and deliver your printout for you.</h5>
                                    <h5><br/>If you feel like some excercise you can always choose to jump on your bike and pick it up yourself. </h5>
                                </div>
                            </div>
                            <div className="col m6 s12 grid-example content-second right ">
                                <div className="img-wrapper right hide-on-med-and-down">
                                    <img src="https://static.pexels.com/photos/33488/navigation-car-drive-road.jpg" />
                                </div>
                                <div className="img-wrapper hide-on-large-only">
                                    <img src="https://static.pexels.com/photos/33488/navigation-car-drive-road.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="row two">
                            <div className="col m6 s12 grid-example content-second left " id="third-row">
                                <div className="img-wrapper left hide-on-med-and-down">
                                    <img src="https://static.pexels.com/photos/48734/pexels-photo-48734.jpeg" />
                                </div>
                            </div>
                            <div className="col m6 s12 grid-example content-second right">
                                <div className="text-wrapper right">
                                    <h4>Have a printer?</h4>
                                    <h5>Become the neighborhood hero and PrintBuddy!</h5>
                                    <h5><br/>Scoop up all printjobs and make some money while your at it.</h5>
                                </div>
                            </div>
                            <div className="col m6 s12 grid-example content-second hide-on-large-only " id="third-row">
                                <div className="img-wrapper ">
                                    <img src="https://static.pexels.com/photos/48734/pexels-photo-48734.jpeg" />
                                </div>
                            </div>

                        </div>
                        <div className="row two">
                            <div className="col m6 s12 grid-example content-second left" id="fourth-row">
                                <div className="text-wrapper left">
                                    <h4>Responsive Design</h4>
                                    <h5>PrintBuddy is a responsive web application that works like a dream on any device.</h5>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                            <div className="col m6 s12 grid-example content-second right ">
                                <div className="img-wrapper right" >
                                    <img src="https://static.pexels.com/photos/6508/nature-laptop-outside-macbook.jpg" />
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
