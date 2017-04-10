import React from "react";

import ChatMessageList from "./ChatMessageList";
import ChatSendMessage from "./ChatSendMessage";
import ChatInfo from "./ChatInfo";

export default class ChatComponent extends React.Component {
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
            <div>
                <div className="row chat-row">
                    <div className="chat-header col s12 m8 l4 offset-m2 offset-l4">
                        <a onClick={this.showChatInfo.bind(this)}><i className="info-icon material-icons hide-on-large-only">info_outline</i></a>
                        <h6 className="chat-title">Chatt med Micke</h6>
                        <a onClick={this.props.handleDownload.bind(this)} className="waves-effect waves-light btn mobile-download-btn hide-on-large-only">Donwload</a>
                    </div>
                </div>
                <div className="row chat-row">
                    <div className="col s10 m10 l2 offset-l1 o hide-on-med-and-down chat-info">
                        <ChatInfo />
                    </div>
                    <div id="chatbox" className="col s12 m8 l4 offset-m2 offset-l1 chat shadow" >
                        <ChatMessageList users={this.props.users} />
                        <ChatSendMessage onSubmit={this.props.onSubmit.bind(this)} />
                    </div>
                    <div className="col hide-on-med-and-down l2 offset-l1">
                        <a onClick={this.props.handleDownload.bind(this)} className="waves-effect waves-light btn-large shadow button-doc">Download Document</a>
                    </div>
                </div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <ul className="collection with-header chat-info-wrapper">
                            <li className="collection-header"><h4>Job info</h4></li>
                            <li className="collection-item"><span>Namn:</span> Alexander Lööf </li>
                            <li className="collection-item"><span>Adress:</span> Webersgade 7. St th 2100 Köpenhamn S</li>
                            <li className="collection-item"><span>Color:</span> No </li>
                            <li className="collection-item"><span>Pages:</span> 2 </li>
                            <li className="collection-item"><span>Copies:</span> 1 </li>
                            <li className="collection-item"><span>Delivery:</span> Yes </li>
                            <li className="collection-item"><span>Last Date:</span> 2017-04-20</li>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                    </div>
                </div>
            </div>
        );
    }
}

