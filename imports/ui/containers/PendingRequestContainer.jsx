import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import {PendingBuddiesList} from '../components/PendingBuddiesListComponent';
import {acceptBuddy} from '../../api/request/methods';
import {displayError} from '../helpers/errors';

class PendingRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onViewClicked = this.onViewClicked.bind(this);
        this.onChooseClicked = this.onChooseClicked.bind(this);
    }

    onViewClicked(e) {

    }

    onChooseClicked(buddyId) {
        console.log(buddyId);
        acceptBuddy.call({requestId :this.props.request._id, buddyId:buddyId}, (err, res) => {
            if (err) {
                if (err.error === 'request.acceptBuddy.exist') {
                    displayError("Error!", 'You already accepted this job!');
                } else {
                    console.log(err);
                    displayError("Error!", 'Something went wrong :( ');
                }
            }
        });
    }

    render() {
        return (
            <div>
                <h1>PendingRequest Component</h1>
                <PendingBuddiesList buddylist={this.props.request.possiblePrintBuddies()} onView={this.onViewClicked}
                                    onChoose={this.onChooseClicked}></PendingBuddiesList>
            </div>
        );
    }
}

PendingRequest.propTypes = {
    request: React.PropTypes.object
};

const PendingRequestContainer = createContainer(() => {

    return {};
}, PendingRequest);


export default PendingRequestContainer;