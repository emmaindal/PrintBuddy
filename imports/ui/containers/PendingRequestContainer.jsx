import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import {browserHistory} from  'react-router';

import {PendingBuddiesList} from '../components/PendingBuddiesListComponent';
import MapContainer from './MapContainer';
import {acceptBuddy, cancelRequest} from '../../api/request/methods';
import {displayError} from '../helpers/errors';

class PendingRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultCenter: this.props.request.requestorPosition(),
            defaultPosition: this.props.request.requestorPosition(),
            clickedBuddyId: '',
        };
        this.onViewClicked = this.onViewClicked.bind(this);
        this.onChooseClicked = this.onChooseClicked.bind(this);
    }

    onViewClicked(e) {
        this.setState({
            defaultCenter: {lat:e.position.coordinates[1], lng: e.position.coordinates[0]},
            clickedBuddyId: e._id,
        })
    }

    onChooseClicked(buddyId) {
        acceptBuddy.call({requestId :this.props.request._id, buddyId:buddyId}, (err, res) => {
            if (err) {
                if (err.error === 'request.acceptBuddy.exist') {
                    displayError("Error!", 'You already accepted this job!');
                } else {
                    displayError("Error!", 'Something went wrong :( ');
                }
            }
        });
    }
    handleJobCancel() {
        cancelRequest.call({requestId:this.props.request._id}, (err, res) => {
            if (err) {
                displayError("Error!", 'Something went wrong :( ');
            }else {
                browserHistory.push("/request");
            }
        });  
    }
    render() {
        return (
            <div id="pending-request-container">
                <div className="row">
                    <div className="col s12 m12 l12 invisible-scrollbar" id="pendingbuddieslist-scroller">
                        <PendingBuddiesList 
                            buddylist={this.props.request.possiblePrintBuddies()} 
                            onView={this.onViewClicked}
                            onChoose={this.onChooseClicked}
                            handleJobCancel={this.handleJobCancel.bind(this)}
                        />
                        <MapContainer
                            clickedId={this.state.clickedBuddyId} 
                            isBuddy={false} 
                            markers={this.props.request.possiblePrintBuddies()} 
                            defaultCenter={this.state.defaultCenter}
                            defaultPosition={this.state.defaultPosition}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

PendingRequest.propTypes = {
    request: React.PropTypes.object
};

// const PendingRequestContainer = createContainer(() => {

//     return {};
// }, PendingRequest);


export default PendingRequest;