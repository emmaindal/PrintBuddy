import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';


class MyJobList extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
    }

	render() {
		return (
			<div>
				<h1>MyJobList Component</h1>
			</div>
		);
	}
}

const MyJobListContainer = createContainer(() => {

    return {
    };
}, MyJobList);


export default MyJobListContainer;