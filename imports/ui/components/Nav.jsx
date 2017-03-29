import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Nav extends React.Component {
	componentDidMount() {
		$(".button-collapse").sideNav();
	}
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a href="#" className="brand-logo">PrintBuddy</a>
					<a href="#" data-activates="mobile-nav" className="button-collapse"><i className="material-icons">menu</i></a>
					<ul className="right hide-on-med-and-down">
						<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink></li>
					</ul>
					<ul className="side-nav" id="mobile-nav">
						<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink></li>
					</ul>
				</div>
			</nav>
		);
	}
}
