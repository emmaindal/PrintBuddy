import React from 'react';

export default class Content extends React.Component {

    render() {
        return (
            <div >
                <div className="row">
                    <div className="col s12 m12 l12 grid-example content-first" id="first-row">
                        <h1>Welcome to PrintBuddy</h1>
                        <a href="/register"className="waves-effect waves-light btn-large">SIGN UP</a>
                        <p>Already have an account? <a href="/login">Sign in here.</a></p>
                        <a href="#second-row" className="scroll-btn btn btn-floating">
                            <i className="material-icons">expand_more</i>
                        </a>
                    </div>
                    <div className="row two">
                        <div className="col m6 s12 grid-example content-second left" id="second-row">
                            <div className="text-wrapper left">
                                <h5>Heading</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <a href="#third-row" className="scroll-btn btn btn-floating">
                                <i className="material-icons">expand_more</i>
                            </a>
                        </div>
                        <div className="col m6 s12 grid-example content-second right hide-on-med-and-down">
                            <div className="img-wrapper right">
                                <img src="https://static.pexels.com/photos/7075/people-office-group-team.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className="row two">
                        <div className="col m6 s12 grid-example content-second left hide-on-med-and-down" id="third-row">
                            <div className="img-wrapper left">
                                <img src="https://static.pexels.com/photos/48734/pexels-photo-48734.jpeg"/>
                            </div>
                        </div>
                        <div className="col m6 s12 grid-example content-second right">
                            <div className="text-wrapper right">
                                <h5>Heading</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <a href="#fourth-row" className="scroll-btn btn btn-floating">
                                <i className="material-icons">expand_more</i>
                            </a>
                        </div>
                    </div>
                    <div className="row two">
                        <div className="col m6 s12 grid-example content-second left" id="fourth-row">
                            <div className="text-wrapper left">
                                <h5>Heading</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <a href="#fifth-row" className="scroll-btn btn btn-floating">
                                <i className="material-icons">expand_more</i>
                            </a>
                        </div>
                        <div className="col m6 s12 grid-example content-second right hide-on-med-and-down">
                            <div className="img-wrapper right" >
                                <img src="https://static.pexels.com/photos/173418/pexels-photo-173418.jpeg"/>
                            </div>
                        </div>
                    </div>
                    <div className="row two">
                        <div className="col m6 s12 grid-example content-second left hide-on-med-and-down" id="fifth-row">
                            <div className="img-wrapper left">
                                <img src="https://static.pexels.com/photos/33488/navigation-car-drive-road.jpg"/>
                            </div>
                        </div>
                        <div className="col m6 s12 grid-example content-second right">
                            <div className="text-wrapper right">
                                <h5>Heading</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <a href="#first-row" className="scroll-btn btn btn-floating back-to-top-btn">
                                <i className="material-icons">expand_less</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
