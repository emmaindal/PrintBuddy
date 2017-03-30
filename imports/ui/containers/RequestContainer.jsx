import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';


class Request extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
    }

	render() {
		return (
			<div>
				<h1>Request Component</h1>
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