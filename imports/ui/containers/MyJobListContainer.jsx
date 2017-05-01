import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import {browserHistory} from 'react-router'

import {Request} from '../../api/request/request.js';
import {removeApplyRequest} from '../../api/request/methods';
import PendingJobList from "../components/PendingJobList";
import ActiveJobList from "../components/ActiveJobList.jsx";
import MapContainer from './MapContainer';

class MyJobList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultCenter: this.props.userposition,
            userObject: this.props.userObject,
            clickedJobId: '',
        };

        this.onChatClicked = this.onChatClicked.bind(this);
        this.onViewLocation = this.onViewLocation.bind(this);
        this.onCancel = this.onCancel.bind(this);

    }

    // TODO onClick handlers för click på markers
    // TODO onClick handlers för VIEW knapp (när den e skapad)
    // TODO - Kanske borde filtrera vilka jobb som skickas in som markers i kartan?? Så det bara är pending och active.

    onChatClicked(id) {
        browserHistory.push('/myjobs/chat/' + id);
    }

    onViewLocation(clickedJob) {
        this.setState({
            defaultCenter: clickedJob.requestorPosition(),
            clickedJobId: clickedJob._id,
        })
    }

    onCancel(clickedJob) {
        removeApplyRequest.call({requestId: clickedJob._id}, (err, res) => {
            if (err) {
                displayError("Error!", 'Something went wrong :( ');
            }
        });
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
            <div id="myjobslist">
                <div className="row">
                    <div className="col s12 m12 l6 invisible-scrollbar" id="myjobslist-scroller">
                        <div className="row">
                            <ActiveJobList listofjobs={this.props.activeJobs} onChatClicked={this.onChatClicked}
                                            onView={this.onViewLocation}/>
                        </div>
                        <div className="row">
                            <PendingJobList listofjobs={this.props.pendingJobs} onView={this.onViewLocation}
                                            onCancel={this.onCancel}/>
                        </div>
                    </div>
                    <div className="col s12 m12 l6" id="map-column">
                        <MapContainer 
                            isBuddy={true} 
                            clickedId={this.state.clickedJobId} 
                            markers={jobsMarkerList}
                            defaultCenter={this.state.defaultCenter}/>
                    </div>
                </div>
            </div>
        );
    }
}

const MyJobListContainer = createContainer(() => {
    Meteor.subscribe('myjob-request-active');
    Meteor.subscribe('myjob-request-pending');
    Meteor.subscribe("allUsers")

    return {
        activeJobs: Request.find({chosenOne: Meteor.userId(), isDone: false, isCancel: false}).fetch(),
        pendingJobs: Request.find({
            possibleOnes: Meteor.userId(),
            isDone: false,
            isCancel: false,
            chosenOne: {$exists: false}
        }).fetch(),
        userposition: {lat: Meteor.user().position.coordinates[1], lng: Meteor.user().position.coordinates[0]},
    };
}, MyJobList);


export default MyJobListContainer;
