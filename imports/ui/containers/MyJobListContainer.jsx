import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import {Request} from '../../api/request/request.js';

import PendingJobList from "../components/PendingJobList";
import ActiveJobList from "../components/ActiveJobList.jsx";

class MyJobList extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
    }

	render() {
		return (
			<div>
				<h1>MyJobList Component</h1>
                <div className="row">
                    <PendingJobList listofjobs={this.props.jobs} userId={Meteor.userId()}/>
                </div>
                <div className="row">
                    <ActiveJobList listofjobs={this.props.jobs} userId={Meteor.userId()}/>
                </div>
			</div>
		);
	}
}

const MyJobListContainer = createContainer(() => {
    Meteor.subscribe('request');

    return {
        jobs: Request.find({}).fetch(),
    };
}, MyJobList);


export default MyJobListContainer;
