import React from 'react';


export default class ErrorComponent extends React.Component {

    render() {
        return(

            <div className="error-component">
                <nav className="start-nav hide-on-small-only">
                    <div className="nav-wrapper nav-container">
                        <a href="/start" className="brand-logo">PRINTBUDDY</a>
                        <ul className="right">
                            <li><a  onClick={this.popLoginModal}>LOG IN</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="error-container"><h1>Error</h1></div>
            </div>
        );
    }
}
