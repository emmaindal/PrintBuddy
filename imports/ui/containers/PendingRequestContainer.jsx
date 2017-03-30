import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';


class PendingRequest extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
    }

	render() {
		return (
			<div>
				<h1>PendingRequest Component</h1>
			</div>
		);
	}
}

const PendingRequestContainer = createContainer(() => {

    return {
    };
}, PendingRequest);


export default PendingRequestContainer;