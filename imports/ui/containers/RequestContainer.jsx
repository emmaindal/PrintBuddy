import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import { browserHistory } from 'react-router';

import Nav from '../components/Nav';
import TestComponent from '../components/TestComponent';
import {StepByStep} from '../components/StepByStepComponent';
import {displayAlert}from '../helpers/alerts';
import {Items} from '../../api/items/items.js';
import {insert} from '../../api/items/methods';
import {removeAll} from '../../api/items/methods';


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
		const {items} = this.props;

		return (
			<div>
				<h1>Request Container</h1>
				{this.props.children}
			</div>
		);
	}
}

const RequestContainer = createContainer(() => {
	Meteor.subscribe('items');

    return {
        items: Items.find({}).fetch()
    };
}, Request);


export default RequestContainer;
