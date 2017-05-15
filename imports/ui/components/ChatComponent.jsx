import React from "react";

import ChatHolder from "./ChatHolder";
import ChatMessageList from "./ChatMessageList";
import ChatSendMessage from "./ChatSendMessage";
import ChatInfo from "./ChatInfo";


class ChatComponent extends React.Component {
    componentDidMount() {
        
    }

    chatInfoStyle() {
        if (this.props.userId === this.props.request.userReqId) {
            return "col s10 m10 l6 hide-on-med-and-down";
        } else {
            return "col s10 m10 l6 hide-on-med-and-down chat-info-buddy";
        }
    }

    render() {
        const canCancel = this.props.userId === this.props.request.userReqId;
        return (
            <div>
                <div className="row chat-row">
                    <div className={this.chatInfoStyle()}>
                        <ChatInfo handleDownload={this.props.handleDownload.bind(this)} canCancel={canCancel}
                                  request={this.props.request} handleJobCancel={this.props.handleJobCancel}
                                  handleJobDone={this.props.handleJobDone}/>
                    </div>
                    <div className="col s12 m10 l6 offset-m1">
                        <ChatHolder userId={this.props.userId} chat={this.props.chat} request={this.props.request}
                                    handleDownload={this.props.handleDownload.bind(this)} onSubmit={this.props.onSubmit}
                                    handleJobCancel={this.props.handleJobCancel}
                                    handleJobDone={this.props.handleJobDone}
                                    canCancel={canCancel}/>
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

