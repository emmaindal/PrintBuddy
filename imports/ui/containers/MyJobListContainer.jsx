import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import {browserHistory} from 'react-router'

import {Request} from '../../api/request/request.js';
import PendingJobList from "../components/PendingJobList";
import ActiveJobList from "../components/ActiveJobList.jsx";
import MapContainer from './MapContainer';

class MyJobList extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
			defaultCenter: this.props.userposition,
			clickedJobId: '',
		};

        this.onChatClicked = this.onChatClicked.bind(this);
        this.onViewLocation = this.onViewLocation.bind(this);
    }

    // TODO onClick handlers för click på markers
    // TODO onClick handlers för VIEW knapp (när den e skapad)
    // TODO - Kanske borde filtrera vilka jobb som skickas in som markers i kartan?? Så det bara är pending och active.

    onChatClicked(id){
        browserHistory.push('/myjobs/chat/'+id);
    }

    onViewLocation(clickedJob) {
		this.setState({
			defaultCenter: clickedJob.requestorPosition(),
			clickedJobId: clickedJob._id,
		})
    }

	render() {

        let jobsMarkerList = [];
        this.props.pendingJobs.map((job) => {
            jobsMarkerList.push(job);
        });
        this.props.activeJobs.map((job) => {
            jobsMarkerList.push(job);
        });

		return (
			<div>
                <div className="row">
                    <div className="col l10 offset-l1">
                        <div className="col l6">
                            <div className="row">
                                <PendingJobList listofjobs={this.props.pendingJobs} onView={this.onViewLocation}/>
                            </div>
                            <div className="row">
                                <ActiveJobList listofjobs={this.props.activeJobs} onChatClicked={this.onChatClicked} onView={this.onViewLocation}/>
                            </div>
                        </div>
                        <MapContainer isBuddy={true} clickedId={this.state.clickedJobId} markers={jobsMarkerList} defaultCenter={this.state.defaultCenter}/>
                    </div>
                </div> 
			</div>
		);
	}
}

const MyJobListContainer = createContainer(() => {
    Meteor.subscribe('myjob-request-active');
    Meteor.subscribe('myjob-request-pending');

    return {
        activeJobs: Request.find({chosenOne: Meteor.userId(), isDone : false}).fetch(),
        pendingJobs: Request.find({possibleOnes: Meteor.userId(), isDone : false, chosenOne: { $exists: false}}).fetch(),
        userposition: Meteor.users.findOne(Meteor.userId()).position
    };
}, MyJobList);


export default MyJobListContainer;
