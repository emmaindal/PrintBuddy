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
            return "chat chat-message invisible-scrollbar"
        } else {
            return "chat chat-message chat-buddy invisible-scrollbar"
        }
    }
    chatHolderStyle() {
        if (this.props.userId === this.props.request.userReqId) {
            return "chat-holder"
        } else {
            return "chat-holder chat-holder-buddy"
        }
    }
    render() {
        const canCancel =  this.props.userId === this.props.request.userReqId;
        
        return (
            <div className={this.chatHolderStyle()}>
                <div className="chat-header">
                    <a onClick={this.showChatInfo.bind(this)}><i className="info-icon material-icons hide-on-large-only">info_outline</i></a>
                    <h6 className="chat-title center-align">Chat</h6>
                    {!canCancel ? 
                    <a onClick={this.props.handleDownload} className="waves-effect waves-light btn mobile-download-btn hide-on-large-only">Download</a>
                    : null}
                </div>
                <div id="chatbox" className={this.chatHeight()}>
                    <ChatMessageList userId={this.props.userId} chat={this.props.chat} />
                </div>
                <div className="chat-form chat">
                    <ChatSendMessage onSubmit={this.props.onSubmit} />
                </div>

                {/*JobInfo Modal that open on click in mobile view*/}
                <div id="modal1" className="modal">
                    <div className="modal-content" style={{padding:0}}>
                        <i className="material-icons modal-close modal-action cancel-icon">clear</i>
                        <ChatInfo request={this.props.request} canCancel={canCancel}/>
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
