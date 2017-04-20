import React from "react";

import ChatHolder from "./ChatHolder";
import ChatMessageList from "./ChatMessageList";
import ChatSendMessage from "./ChatSendMessage";
import ChatInfo from "./ChatInfo";



class ChatComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row chat-row">
                    <div className="col s10 m10 l3 hide-on-med-and-down chat-info">
                        <ChatInfo request={this.props.request} handleJobCancel={this.props.handleJobCancel} handleJobDone={this.props.handleJobDone} />
                    </div>
                    <div className="col s12 m10 l5 offset-m1  offset-l1 chat-holder">
                        <ChatHolder userId={this.props.userId} chat={this.props.chat} request={this.props.request} 
                        onClick={this.props.handleDownload.bind(this)} onSubmit={this.props.onSubmit}
                        handleJobCancel={this.props.handleJobCancel} handleJobDone={this.props.handleJobDone}/>
                    </div>
                    <div className="col hide-on-med-and-down l2 offset-l1">
                        <a onClick={this.props.handleDownload.bind(this)} className="waves-effect waves-light btn-large shadow button-doc">Download Document</a>
                    </div>
                </div>
            </div>
        );
    }
}

ChatComponent.propTypes = {
    chat: React.PropTypes.object,
    userId: React.PropTypes.string,
    request: React.PropTypes.object,
};

export default ChatComponent

