import React from "react";

import ChatHolder from "./ChatHolder";
import ChatMessageList from "./ChatMessageList";
import ChatSendMessage from "./ChatSendMessage";
import ChatInfo from "./ChatInfo";



class ChatComponent extends React.Component {
    componentDidMount() {
        $(".mobile-emoji").hide();
        $(document).click(function (e) {
            if (!$(e.target).hasClass("smiley-pop")
                && $(e.target).parents(".mobile-emoji").length === 0) {
                $("#mobile-emoji").hide();
            }
        });
    }
    render() {
        const canCancel =  this.props.userId === this.props.request.userReqId;
        return (
            <div>
                <div className="row chat-row">
                    <div className="col s10 m10 l3 hide-on-med-and-down chat-info">
                        <ChatInfo handleDownload={this.props.handleDownload.bind(this)} canCancel={canCancel} request={this.props.request} handleJobCancel={this.props.handleJobCancel} handleJobDone={this.props.handleJobDone} />
                    </div>
                    <div className="col s12 m10 l5 offset-m1 chat-holder">
                        <ChatHolder userId={this.props.userId} chat={this.props.chat} request={this.props.request}
                            onClick={this.props.handleDownload.bind(this)} onSubmit={this.props.onSubmit}
                            handleJobCancel={this.props.handleJobCancel} handleJobDone={this.props.handleJobDone}
                            canCancel={canCancel} />
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

