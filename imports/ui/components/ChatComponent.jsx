import React from "react";

import ChatMessageList from "./ChatMessageList";
import ChatSendMessage from "./ChatSendMessage";
import ChatInfo from "./ChatInfo";

import { Picker } from 'emoji-mart';
import Stepper from 'react-stepper-horizontal';

class ChatComponent extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            $('#chatbox').animate({
                scrollTop: $("#chatbox").prop("scrollHeight")
            }, 0);
        }, 100);
    }
    showChatInfo() {
        $('#modal1').openModal('open');
    }
    render() {
        return (
            <div className="container">
                <div className="step-by-step">
                    <Stepper steps={[{title:'Request'}, {title:'Pending'}, {title:'Chat'}, {title:'Done'}]} activeStep={2} size={40} completeColor={"green"} activeColor={"orange"} />
                </div>
                <div className="row chat-row">
                    <div className="chat-header col s12 m8 l5 offset-m2 offset-l4">
                        <a onClick={this.showChatInfo.bind(this)}><i className="info-icon material-icons hide-on-large-only">info_outline</i></a>
                        <h6 className="chat-title">Chat</h6>
                        <a onClick={this.props.handleDownload.bind(this)} className="waves-effect waves-light btn mobile-download-btn hide-on-large-only">Download</a>
                    </div>
                </div>
                <div className="row chat-row">
                    <div className="col s10 m10 l3 hide-on-med-and-down chat-info">
                        <ChatInfo request={this.props.request} />
                    </div>
                    <div id="chatbox" className="col s12 m8 l5 offset-m2 offset-l1 chat chat-message" >
                        <ChatMessageList userId={this.props.userId} chat={this.props.chat} />
                    </div>
                    <div className="col hide-on-med-and-down l2 offset-l1">
                        <a onClick={this.props.handleDownload.bind(this)} className="waves-effect waves-light btn-large shadow button-doc">Download Document</a>
                    </div>
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

