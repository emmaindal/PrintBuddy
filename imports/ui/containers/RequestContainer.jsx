import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'
import { createContainer } from 'meteor/react-meteor-data';
import React from 'react';
import { browserHistory } from 'react-router';

import Stepper from 'react-stepper-horizontal';
import CreateRequestContainer from './CreateRequestContainer';
import PendingRequestContainer from './PendingRequestContainer';
import ChatContainer from './ChatContainer';

import DoneContainer from './DoneContainer';

import { Request } from '../../api/request/request.js';


class RequestComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0
        };
    }
    componentDidMount() {
        if (this.props.isBuddy) {
            browserHistory.replace('/jobs');
        }
    }     
    getActiveStep(){
         if (this.props.loading) {
             return 0;
        }

        if (!this.props.request) {
            return 0;
        }
        // Chat
        if (this.props.request.chosenOne && !this.props.request.isDone) {
            return 2;
        }
        // done.
        if (this.props.request.isDone) {
            return 3;
        }
        // pending
        return 1;
    }
    renderRightContainer() {
        if (this.props.loading) {
            return (<div></div>); // or show loading icon
        }

        if (!this.props.request) {
            return (
                <div>
                    <CreateRequestContainer />
                </div>
            );
        }
        // Chat
        if (this.props.request.chosenOne && !this.props.request.isDone && !this.props.request.isCancel) {
            return (
                <div>
                    <ChatContainer request={this.props.request} />
                </div>
            );
        }
        // done.
        if (this.props.request.isDone) {
            return (
                <div>
                    <DoneContainer request={this.props.request} />
                </div>
            );
        }
        // pending
        return (
            <div>
                <PendingRequestContainer request={this.props.request} />
            </div>
        );
    }
    render() {
        return (
            <div>
                <p>Request Container</p>
                <div className="step-by-step container">
                    <Stepper steps={[
                        { title: "Request" },
                        { title: "Pending" },
                        { title: "Chat" },
                        { title: "Done" }]}
                        activeStep={this.getActiveStep()} size={36} completeColor="green" activeColor="#B88B4A" 
                        completeTitleColor="green" activeTitleColor="#B88B4A" 
                        defaultTitleColor="rgba(0, 0, 0, 0.3)" defaultColor="rgba(0, 0, 0, 0.3)"/>
                </div>
                {this.renderRightContainer()}
            </div>
        );

    }
}

const RequestContainer = createContainer(() => {
    const requestHandle = Meteor.subscribe('user-request');
    const loading = !requestHandle.ready();
    const req = Request.find({ userReqId: Meteor.userId(), isCancel: false ,finishAt: {$exists: false}});
    const reqExists = !loading && !!req;

    return {
        loading: loading,
        request: reqExists ? req.fetch()[0] : {}
    };
}, RequestComp);


export default RequestContainer;
