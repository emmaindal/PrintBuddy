import React from 'react';

import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";

export default class Content extends React.Component {
    componentDidMount() {

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
    }
    render() {
        return (
            <div className="start-page">

                <div className="row">
                    <div className="col s12 m12 l12 grid-example content-first" id="first-row">
                        <h1>Welcome to PrintBuddy</h1>
                        <a onClick={this.popRegisterModal} className="waves-effect waves-light btn-large sign-up">SIGN UP</a>
                        <h5><a onClick={this.popLoginModal}>Already have an account? Sign in here.</a></h5>
                        <div className="arrow bounce">
                            <a className="fa fa-arrow-down fa-2x" href="#second-row"></a>
                        </div>
                    </div>
                    <div className="row two">
                        <div className="col m6 s12 grid-example content-second left" id="second-row">
                            <div className="text-wrapper left">
                                <h4>Get your document delivered</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                <div className="img-wrapper hide-on-large-only">
                                    <img src="https://static.pexels.com/photos/6508/nature-laptop-outside-macbook.jpg"/>
                                </div>

                                <div className="arrow bounce">
                                    <a className="fa fa-arrow-down fa-2x" href="#third-row"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col m6 s12 grid-example content-second right hide-on-med-and-down">
                            <div className="img-wrapper right">
                                <img src="https://static.pexels.com/photos/33488/navigation-car-drive-road.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className="row two">
                        <div className="col m6 s12 grid-example content-second left hide-on-med-and-down" id="third-row">
                            <div className="img-wrapper left">
                                <img src="https://static.pexels.com/photos/48734/pexels-photo-48734.jpeg" />
                            </div>
                        </div>
                        <div className="col m6 s12 grid-example content-second right">
                            <div className="text-wrapper right">
                                <h4>All over the world</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="arrow bounce">
                                <a className="fa fa-arrow-down fa-2x" href="#fourth-row"></a>
                            </div>
                        </div>
                    </div>
                    <div className="row two">
                        <div className="col m6 s12 grid-example content-second left" id="fourth-row">
                            <div className="text-wrapper left">
                                <h4>Responsive design</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="arrow bounce">
                                <a className="fa fa-arrow-down fa-2x" href="#fifth-row"></a>
                            </div>
                        </div>
                        <div className="col m6 s12 grid-example content-second right hide-on-med-and-down">
                            <div className="img-wrapper right" >
                                <img src="https://static.pexels.com/photos/6508/nature-laptop-outside-macbook.jpg" />
                            </div>
                        </div>

                    </div>
                </div>
                <div id="login-modal" className="modal login-modal">
                    <div className="modal-content">
                        <a className="cance-login-modal-btn modal-action modal-close btn-floating btn waves-effect waves-light red lighten-2"><i className="material-icons">clear</i></a>
                        <LoginContainer/>
                        <div className="breakit row">
                            <div className="line-break col s10 offset-s1"></div>
                        </div>
                        <div className="row">
                            <div className="col s10 offset-s1" style={{display: "flex", justifyContent: "space-between", marginBottom: "15px"}}>
                                <div>Don't have an Account?</div>
                                <a onClick={this.popRegisterModal}>Register</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="register-modal" className="modal register-modal">
                    <div className="modal-content">
                        <a className="cance-login-modal-btn modal-action modal-close btn-floating btn waves-effect waves-light red lighten-2"><i className="material-icons">clear</i></a>
                        <RegisterContainer/>
                        <div className="breakit row">
                            <div className="line-break col s10 offset-s1"></div>
                        </div>
                        <div className="row">
                            <div className="col s10 offset-s1" style={{display: "flex", justifyContent: "space-between", marginBottom: "15px"}}>
                                <div>Already have an Account?</div>
                                <a onClick={this.popLoginModal}>Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
