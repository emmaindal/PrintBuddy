import React from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component {
	componentDidMount() {
		$(".button-collapse").sideNav();
	}
	render() {
		const {isBuddy} = this.props;

		if(isBuddy){
            return (
				<nav>
					<div className="nav-wrapper container">
						<a href="" className="brand-logo">PrintBuddy</a>
						<a href="" data-activates="mobile-nav" className="button-collapse"><i className="material-icons">menu</i></a>
						<ul className="right hide-on-med-and-down">
							<li><IndexLink to="/jobs" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Jobs</IndexLink></li>
							<li><Link to="/myjobs" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>My Jobs</Link></li>
						</ul>
						<ul className="side-nav" id="mobile-nav">
							<li><IndexLink to="/jobs" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Jobs</IndexLink></li>
							<li><Link to="/myjobs" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>My Jobs</Link></li>
						</ul>
					</div>
				</nav>
            );

		}else {
            return (
				<nav>
					<div className="nav-wrapper container">
						<a href="" className="brand-logo">PrintBuddy</a>
						<a href="" data-activates="mobile-nav" className="button-collapse"><i className="material-icons">menu</i></a>
						<ul className="right hide-on-med-and-down">
							<li><IndexLink to="/request" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Requests</IndexLink></li>
						</ul>
						<ul className="side-nav" id="mobile-nav">
							<li><IndexLink to="/request" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Requests</IndexLink></li>
						</ul>
					</div>
				</nav>
            );
		}
	}
}

Nav.propTypes = {
    isBuddy: React.PropTypes.bool,
};

export default Nav;
