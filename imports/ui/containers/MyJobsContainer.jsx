import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';


class MyJobs extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
    }

	render() {
		return (
			<div>
				<h1>MyJobs Component</h1>
				{this.props.children}
			</div>
		);
	}
}

const MyJobsContainer = createContainer(() => {

    return {
    };
}, MyJobs);


export default MyJobsContainer;