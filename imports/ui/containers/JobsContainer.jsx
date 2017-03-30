import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';


class Jobs extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
    }

	render() {
		return (
			<div>
				<h1>Jobs Component</h1>
			</div>
		);
	}
}

const JobsContainer = createContainer(() => {

    return {
    };
}, Jobs);


export default JobsContainer;