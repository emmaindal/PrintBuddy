import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import { browserHistory } from 'react-router';

import {Items} from '../../api/items/items.js';


class Request extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
		// todo kolla vilket state användaren är på requestet! och välj rätt route.
        if(this.props.isBuddy){
            browserHistory.replace('/jobs');
		}
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
	Meteor.subscribe('items');

    return {
        items: Items.find({}).fetch()
    };
}, Request);


export default RequestContainer;
