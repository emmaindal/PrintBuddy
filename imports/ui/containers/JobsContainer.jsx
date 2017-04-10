import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import {Request} from '../../api/request/request.js';
import MapContainer from './MapContainer';
import {JobList} from '../components/JobListComponent';
import { browserHistory } from 'react-router';


class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        // TODO får räkna ut på något sätt hur långt det är från sin egna address.
    }

    componentDidMount() {
        // todo kolla vilket state användaren är på requestet! och välj rätt route.
        if(!this.props.isBuddy){
            browserHistory.replace('/request');
        }
    }

    onApply(clickedId) {
        alert(`You clicked APPLY for job: ${clickedId}`);
    }
    onChoose(clickedId) {
        alert(`You clicked onChoose for buddy: ${clickedId}`);
    }
    onViewLocation(clickedLocation) {
        alert(`You clicked to view location for ${clickedLocation}! This should update the map to show it`);
    }

    render() {
        return (
            <div>
                <h1>Jobs Component</h1>
                <div id="test-joblist" className="row">
                    <div className="col l10 offset-l1">
                        <JobList listofjobs={this.props.items} onApply={this.onApply} onView={this.onViewLocation}/>
                        <MapContainer/>
                    </div>
                </div>
            </div>
        );
    }
}

const JobsContainer = createContainer(() => {
    Meteor.subscribe('request');

    return {
        items: Request.find({}).fetch()
    };
}, Jobs);


export default JobsContainer;