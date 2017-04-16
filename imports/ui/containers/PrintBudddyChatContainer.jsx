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
        return (
            <div>
                <ChatContainer request={this.props.request}/>
            </div>
        );
    }
}

const PrintBuddyChatContainer = createContainer(({params}) => {
    console.log(params);

    const requestHandle = Meteor.subscribe('myjob-request-active');
    const loading = !requestHandle.ready();
    const req = Request.find({_id: params.id});
    const reqExists = !loading && !!req;

    return {
        loading: loading,
        request: reqExists ? req.fetch()[0] : {}
    };
}, PrintBuddyChat);


export default PrintBuddyChatContainer;
