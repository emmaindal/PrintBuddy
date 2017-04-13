import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import ChatComponent from "../components/ChatComponent";
import {Chat} from '../../api/chat/chat';
import {addMessageToRequest} from '../../api/chat/methods';
import {displayError} from '../helpers/errors';
class ChatHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: ""
        }
    }

    onSubmit(text) {
        const message = {requestId: this.props.request._id, text: text, username: Meteor.user().username};
        addMessageToRequest.call(message, (err, res) => {
            if (err) {
                console.log(err);
                if (err.error === 'chat.addMessageToRequest.unauthorized') {
                    displayError("Wrong!", 'You need to login to chat');
                } else {
                    displayError("Error!", 'Something went wrong :( ');
                }
            }
        });
    }

    handleDownload() {
        // Download the document URL
        console.log("Download Document")
    }

    render() {
        return (
            <div>
                <h1>Chat Container</h1>
                <ChatComponent userId={Meteor.userId()} chat={this.props.chat} request={this.props.request}
                               handleDownload={this.handleDownload.bind(this)} onSubmit={this.onSubmit.bind(this)}/>
            </div>
        );
    }
}

ChatHolder.propTypes = {
    chat: React.PropTypes.object,
    request: React.PropTypes.object
};

const ChatContainer = createContainer((props) => {
    const chatHandle = Meteor.subscribe('chat-request', props.request._id);
    const loading = !chatHandle.ready();
    const chat = Chat.find({requestId: props.request._id});
    const chatExists = !loading && !!chat;

    return {
        loading: loading,
        chat: chatExists ? chat.fetch()[0] : {}
    };
}, ChatHolder);


export default ChatContainer;