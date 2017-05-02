import React from 'react';
import {Link, IndexLink} from 'react-router';


export default class Footer extends React.Component {

    render() {
        return(
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">About</h5>
                            <p className="grey-text text-lighten-4">Some information....... blablabla</p>
                        </div>
                        <div className="col l2 offset-l2 s12">
                            <h5 className="white-text">Contact</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!"><i className="material-icons">email</i> info@printbuddy.se</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2017 PrintBuddy
                    </div>
                </div>
            </footer>

        );
    }
}
