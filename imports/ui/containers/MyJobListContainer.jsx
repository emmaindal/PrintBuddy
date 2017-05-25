import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import {browserHistory} from 'react-router';
import i18n from 'meteor/universe:i18n';

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
            defaultPosition: this.props.userposition,
            clickedJobId: '',
        };

        this.onChatClicked = this.onChatClicked.bind(this);
        this.onViewLocation = this.onViewLocation.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.userposition.lat != this.props.userposition.lat &&
            nextProps.userposition.lng != this.props.userposition.lng)
        {
            this.setState({
                defaultCenter: nextProps.userposition,
                defaultPosition: nextProps.userposition,
                clickedJobId: ''
            });
        }
    }



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
                displayError(i18n.__('other.whoops'), i18n.__('container.myjoblistcontainer.errorMsg'));
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
                            defaultCenter={this.state.defaultCenter}
                            defaultPosition={this.state.defaultPosition}/>
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
