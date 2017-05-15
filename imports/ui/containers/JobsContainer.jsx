import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import {Request} from '../../api/request/request.js';
import MapContainer from './MapContainer';
import {JobList} from '../components/JobListComponent';
import {browserHistory} from 'react-router';
import {applyRequest} from '../../api/request/methods';
import {displayError} from '../helpers/errors';
import {displayAlert} from '../helpers/alerts';

class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultCenter: this.props.userposition,
            defaultPosition: this.props.userposition,
            clickedJobId: '',
        };
        this.onViewLocation = this.onViewLocation.bind(this);
    }

    componentDidMount() {
        if (!this.props.isBuddy) {
            browserHistory.replace('/request');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.isBuddy) {
            browserHistory.replace('/request');
        } else {
            if (nextProps.userposition.lat != this.props.userposition.lat &&
                nextProps.userposition.lng != this.props.userposition.lng) {
                this.setState({
                    defaultCenter: nextProps.userposition,
                    defaultPosition: nextProps.userposition,
                    clickedJobId: ''
                });
            }
        }
    }

    onApply(clickedId) {
        const req = {requestId: clickedId}
        applyRequest.call(req, (err, res) => {
            if (err) {
                if (err.error === 'request.applyRequest.exist') {
                    displayError("Whoops!", 'You already applied for this job!');
                } else {
                    displayError("Whoops!", 'Something went wrong :( ');
                }
            } else {
                displayAlert("Nice!", `You applied for a new printjob`);
            }
        });
    }

    onViewLocation(clickedJob) {
        this.setState({
            defaultCenter: clickedJob.requestorPosition(),
            clickedJobId: clickedJob._id,
        })
    }

    render() {
        return (
            <div id="jobslistcontainer">
                <div className="row">
                    <div className="col s12 m12 l6">
                        <JobList userId={this.props.userId} listofjobs={this.props.jobs} onApply={this.onApply}
                                 onView={this.onViewLocation}/>
                    </div>
                    <div className="col s12 m12 l6" id="map-column">
                        <MapContainer isBuddy={true} clickedId={this.state.clickedJobId} markers={this.props.jobs}
                                      defaultCenter={this.state.defaultCenter}
                                      defaultPosition={this.state.defaultPosition}/>
                    </div>
                </div>
            </div>
        );
    }
}

const JobsContainer = createContainer(() => {
    const jobsRequestSub = Meteor.subscribe(
        'jobs-request',
        Meteor.user().position.coordinates[1],
        Meteor.user().position.coordinates[0],
        Meteor.user().canColor()
    );
    const jobsRequestDeliverySub = Meteor.subscribe(
        'jobs-request-delivery',
        Meteor.user().position.coordinates[1],
        Meteor.user().position.coordinates[0],
        Meteor.user().canColor()
    );
    const isReady = jobsRequestDeliverySub.ready() && jobsRequestSub.ready();
    return {
        jobs: isReady ? Request.find({distance: {$exists: true}}, {
            sort: {distance: 1}
        }).fetch() : [],
        userposition: {lat: Meteor.user().position.coordinates[1], lng: Meteor.user().position.coordinates[0]}
    };
}, Jobs);


export default JobsContainer;