import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

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
    }

    // TODO onClick handlers för click på markers
    // TODO saknas VIEW location knapp i listorna Pendging och Active
        // TODO onClick handlers för VIEW knapp (när den e skapad)
    
    // TODO - Kanske borde filtrera vilka jobb som skickas in som markers i kartan?? Så det bara är pending och active.

	render() {
		return (
			<div>
                <div className="row">
                    <div className="col l10 offset-l1">
                        <div className="col l6">
                            <div className="row">
                                <PendingJobList listofjobs={this.props.jobs} userId={Meteor.userId()}/>
                            </div>
                            <div className="row">
                                <ActiveJobList listofjobs={this.props.jobs} userId={Meteor.userId()}/>
                            </div>
                        </div>
                        <MapContainer isBuddy={true} clickedId={this.state.clickedJobId} markers={this.props.jobs} defaultCenter={this.state.defaultCenter}/>
                    </div>
                </div> 
			</div>
		);
	}
}

const MyJobListContainer = createContainer(() => {
    Meteor.subscribe('request');

    return {
        jobs: Request.find({}).fetch(),
        userposition: Meteor.users.findOne(Meteor.userId()).position
    };
}, MyJobList);


export default MyJobListContainer;
