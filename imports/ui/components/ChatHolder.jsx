import React from "react";

import ChatMessageList from "./ChatMessageList";
import ChatSendMessage from "./ChatSendMessage";
import ChatInfo from "./ChatInfo";


class ChatHolder extends React.Component {
    componentDidMount() {
        $('.modal-trigger').leanModal();
    }
    showChatInfo() {
        $('#modal1').openModal('open');
    }
    handleCancelModalClose() {
        $('#cancelModal').closeModal('close');
    }
    handleCancelModalAccept() {
        $('#cancelModal').closeModal('close');
        console.log(this.props);
        this.props.handleJobCancel;
    }
    handleDoneModalClose() {
        $('#doneModal').closeModal('close');
    }
    handleDoneModalAccept() {
        $('#doneModal').closeModal('close');
        this.props.handleJobDone;
    }
    chatHeight() {
        if (this.props.userId === this.props.request.userReqId) {
            return "53vh"
        } else {
            return "63vh"
        }
    }
    render() {
        const canCancel =  this.props.userId === this.props.request.userReqId;
        return (
            <div className="chat-holder">
                <div className="chat-header">
                    <a onClick={this.showChatInfo.bind(this)}><i className="info-icon material-icons hide-on-large-only">info_outline</i></a>
                    <h6 className="chat-title">Chat</h6>
                    <a onClick={this.props.handleDownload} className="waves-effect waves-light btn mobile-download-btn hide-on-large-only">Download</a>
                </div>
                <div id="chatbox" className="chat chat-message" style={{minHeight: this.chatHeight()}} >
                    <ChatMessageList userId={this.props.userId} chat={this.props.chat} />
                </div>
                <div className="chat-form chat">
                    <ChatSendMessage onSubmit={this.props.onSubmit} />
                </div>

                {/*JobInfo Modal that open on click in mobile view*/}
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <ChatInfo request={this.props.request} canCancel={canCancel}/>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                    </div>
                </div>
                <div id="cancelModal" className="modal">
                    <div className="modal-content">
                        <h5>Are you sure?</h5>
                        <br />
                        <p>Are you absolutely sure you want to Cancel this request?</p>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-action modal-close waves-effect waves-green btn-flat">No</a>
                        <a onClick={this.props.handleJobCancel} className="modal-action modal-close waves-effect waves-green btn-flat">Yes</a>
                    </div>
                </div>
                <div id="doneModal" className="modal">
                    <div className="modal-content">
                        <h5>Are you sure?</h5>
                        <p>Are you absolutely sure this job is Done?</p>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-action modal-close waves-effect waves-green btn-flat">No</a>
                        <a onClick={this.props.handleJobDone} className="modal-action modal-close waves-effect waves-green btn-flat">Yes</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatHolder;
