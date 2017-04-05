import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import { browserHistory } from 'react-router';


class Request extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
		// todo kolla vilket state användaren är på requestet! och välj rätt route.
        browserHistory.push('/request/create');
    }

	render() {
		return (
			<div>
				<h1>Request Container</h1>
				{this.props.children}
			</div>
		);
	}
}

const RequestContainer = createContainer(() => {

    return {
    };
}, Request);


export default RequestContainer;