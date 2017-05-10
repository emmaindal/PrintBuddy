import React from 'react';



export default class ErrorComponent extends React.Component {

    render() {
        return(
            <div className="error-component">
                <div className="error-container">
                    <nav className="start-nav">
                        <div className="nav-wrapper nav-container">
                            <a href="/start" className="brand-logo">PRINTBUDDY</a>
                        </div>
                    </nav>
                    <h1>Oops...error 404 </h1>
                    <h5>Looks like something went wrong.</h5>
                    <h6>Go back to start or send us a message if you have problem</h6>
                </div>

                <div className="error-message">
                    <div className="hero2"></div>
                    <div className="btn-one">
                        <a onClick={this.onClick} className="btn-floating btn-large waves-effect waves-light blue error-btn"><i className="fa fa-envelope" aria-hidden="true"></i></a>

                    </div>

                    <div className="btn-two">
                        <a onClick={this.onClick} className="btn-floating btn-large waves-effect waves-light blue error-btn"><i className="fa fa-home" aria-hidden="true"></i></a>

                    </div>



                </div>

            </div>
        );
    }
}
