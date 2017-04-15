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
			clickedJobId: '',
		};
		this.onViewLocation = this.onViewLocation.bind(this);
        // TODO får räkna ut på något sätt hur långt det är från sin egna address.
    }

    componentDidMount() {
        if (!this.props.isBuddy) {
            browserHistory.replace('/request');
        }
    }

    onApply(clickedId) {
        const req = {requestId:clickedId}
        applyRequest.call(req, (err, res) => {
            if (err) {
                if (err.error === 'request.applyRequest.exist') {
                    displayError("Error!", 'You already applied for this job!');
                }else{
                    displayError("Error!", 'Something went wrong :( ');
                }
            }else{
                displayAlert("Nice work :)",`You clicked APPLY for job`);
            }
        });
    }

    onChoose(clickedId) {
        alert(`You clicked onChoose for buddy: ${clickedId}`);
    }

    onViewLocation(clickedJob) {
		this.setState({
			defaultCenter: clickedJob.requestorPosition(),
			clickedJobId: clickedJob._id,
		})
    }

    render() {
        return (
            <div>
                <h1>Jobs Component</h1>
                <div id="test-joblist" className="row">
                    <div className="col l10 offset-l1">
                        <JobList listofjobs={this.props.jobs} onApply={this.onApply} onView={this.onViewLocation}/>
                        <MapContainer isBuddy={true} clickedId={this.state.clickedJobId} markers={this.props.jobs} defaultCenter={this.state.defaultCenter}/>
                    </div>
                </div>
            </div>
        );
    }
}

const JobsContainer = createContainer(() => {
    Meteor.subscribe('request');

    return {
        jobs: Request.find({}).fetch(),
		userposition: Meteor.users.findOne(Meteor.userId()).position
    };
}, Jobs);


export default JobsContainer;