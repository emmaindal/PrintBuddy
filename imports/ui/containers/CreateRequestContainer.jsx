import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';


class CreateRequest extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
    }

	render() {
		return (
			<div>
				<h1>CreateRequest Component</h1>
			</div>
		);
	}
}

const CreateRequestContainer = createContainer(() => {

    return {
    };
}, CreateRequest);


export default CreateRequestContainer;