import React from 'react';

export default class Content extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col s12 grid-example first">
                    <h1>Welcome to PrintBuddy</h1>
                    <a className="waves-effect waves-light btn-large">Get started</a>
                </div>
                <a href="#second-content-row" className="btn-floating btn-large waves-effect waves-light">
                    <i className="material-icons">expand_more</i>
                </a>

                <div className="col s6 grid-example" id="second-content-row">
                    <h4>About PrintBuddies</h4>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
                <div className="col s6 grid-example" id="second-content-row">
                    <h4>About Requestor's</h4>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
                <a href="#third-content-row" className="btn-floating btn-large waves-effect waves-light">
                    <i className="material-icons">expand_more</i>
                </a>
                <div className="col s12 grid-example" id="third-content-row">
                    <div className="col m4 s12">
                        <div className="center promo promo-example">
                            <i className="material-icons">grade</i>
                            <p className="promo-caption">Heading</p>
                            <p className="light center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                    <div className="col m4 s12">
                        <div className="center promo promo-example">
                            <i className="material-icons">group</i>
                            <p className="promo-caption">Heading</p>
                            <p className="light center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>

                    </div>
                    <div className="col m4 s12">
                        <div className="center promo promo-example">
                            <i className="material-icons">print</i>
                            <p className="promo-caption">Heading</p>
                            <p className="light center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                </div>
                <a href="#fourth-content-row" className="btn-floating btn-large waves-effect waves-light">
                    <i className="material-icons">expand_more</i>
                </a>
                <div className="col s12 grid-example" id="fourth-content-row">
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

                </div>
            </div>
        );
    }
}
