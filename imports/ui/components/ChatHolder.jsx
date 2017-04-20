import React from "react";

import ChatMessageList from "./ChatMessageList";
import ChatSendMessage from "./ChatSendMessage";
import ChatInfo from "./ChatInfo";


class ChatHolder extends React.Component {
    showChatInfo() {
        $('#modal1').openModal('open');
    }
    render() {
        return (
            <div>
                <div className="chat-header">
                    <a onClick={this.showChatInfo.bind(this)}><i className="info-icon material-icons hide-on-large-only">info_outline</i></a>
                    <h6 className="chat-title">Chat</h6>
                    <a onClick={this.props.handleDownload} className="waves-effect waves-light btn mobile-download-btn hide-on-large-only">Download</a>
                </div>
                <div id="chatbox" className="chat chat-message" >
                    <ChatMessageList userId={this.props.userId} chat={this.props.chat} />
                </div>
                <div className="chat-form chat">
                    <ChatSendMessage onSubmit={this.props.onSubmit} />
                </div>

                {/*Modal that open on click in mobile view*/}
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <ChatInfo request={this.props.request} />
                    </div>
                    <div className="modal-footer">
                        <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatHolder;

/*<div className="row chat-row">
    <div className="chat-header col s12 m8 l5 offset-m2 offset-l4">
        <a onClick={this.showChatInfo.bind(this)}><i className="info-icon material-icons hide-on-large-only">info_outline</i></a>
        <h6 className="chat-title">Chat</h6>
        <a onClick={this.props.handleDownload.bind(this)} className="waves-effect waves-light btn mobile-download-btn hide-on-large-only">Download</a>
    </div>
</div>
    <div id="chatbox" className="col s12 m8 l5 offset-m2 offset-l1 chat chat-message" >
        <ChatMessageList userId={this.props.userId} chat={this.props.chat} />
    </div>
    <div className="row chat-row">
        <div className="chat-form col s12 m8 l5 offset-m2 offset-l4 chat">
            <ChatSendMessage onSubmit={this.props.onSubmit.bind(this)} />
        </div>
    </div>
    <div id="modal1" className="modal">
        <div className="modal-content">
            <ChatInfo request={this.props.request} />
        </div>
        <div className="modal-footer">
            <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
        </div>
    </div>*/