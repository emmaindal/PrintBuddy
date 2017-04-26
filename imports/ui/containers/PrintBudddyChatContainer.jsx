import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import ChatContainer from './ChatContainer';
import {Request} from '../../api/request/request.js';


class PrintBuddyChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        if (this.props.loading) {
            return (<div></div>); // or show loading icon
        }
        let isDone =  null;
        let isCancel =  null;

        if (this.props.request.isDone) {
            isDone = <div><h1>This request is done!</h1></div>; // or show loading icon
        }
        if (this.props.request.isCancel) {
            isDone = <div><h1>This request is cancel!</h1></div>; // or show loading icon
        }
        return (
            <div className="margin-top-5">
                {isDone}
                {isCancel}
                <ChatContainer request={this.props.request}/>
            </div>
        );
    }
}

const PrintBuddyChatContainer = createContainer(({params}) => {
    const requestHandle = Meteor.subscribe('myjob-request-buddy-chat');
    const loading = !requestHandle.ready();
    const req = Request.find({_id: params.id});
    const reqExists = !loading && !!req;

    return {
        loading: loading,
        reqExists: reqExists,
        request: reqExists ? req.fetch()[0] : {}
    };
}, PrintBuddyChat);


export default PrintBuddyChatContainer;
