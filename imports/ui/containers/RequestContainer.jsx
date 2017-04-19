import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import {browserHistory} from 'react-router';


import CreateRequestContainer from './CreateRequestContainer';
import PendingRequestContainer from './PendingRequestContainer';
import ChatContainer from './ChatContainer';

import DoneContainer from './DoneContainer';

import {Request} from '../../api/request/request.js';


class RequestComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        if (this.props.isBuddy) {
            browserHistory.replace('/jobs');
        }
    }

    render() {
        if (this.props.loading) {
            return (<div></div>); // or show loading icon
        }
        
        if (!this.props.request) {
            return (
                <div>
                    <p>Request Container</p>
                    <CreateRequestContainer/>
                </div>
            );
        }
        // Chat
        if (this.props.request.chosenOne && !this.props.request.isDone) {
            return (
                <div>
                    <p>Request Container</p>
                    <ChatContainer request={this.props.request}/>
                </div>
            );
        }
        // done.
        if (this.props.request.isDone) {
            return (
                <div>
                    <p>Request Container</p>
                    <DoneContainer/>
                </div>
            );
        }

        // pending
        return (
            <div>
                <p>Request Container</p>
                <PendingRequestContainer request={this.props.request}/>
            </div>
        );
    }
}

const RequestContainer = createContainer(() => {
    const requestHandle = Meteor.subscribe('user-request');
    const loading = !requestHandle.ready();
    const req = Request.find({userReqId: Meteor.userId(), isDone: false});
    const reqExists = !loading && !!req;

    return {
        loading: loading,
        request: reqExists ? req.fetch()[0] : {}
    };
}, RequestComp);


export default RequestContainer;
