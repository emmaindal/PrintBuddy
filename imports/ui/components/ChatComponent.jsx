import React from "react";

import ChatMessageList from "./ChatMessageList";
import ChatSendMessage from "./ChatSendMessage";

export default class ChatComponent extends React.Component {
    componentDidMount() {
        $('#chatbox').animate({ 
                   scrollTop: $("#chatbox").prop("scrollHeight")}, 0
                );
    }
    render() {
        return (
            <div className="row chat-row">
                <h1 className="center-align">ChatComponent</h1>
                <div id="chatbox" className="col s12 m8 l4 xl4 offset-m2 offset-l4 offset-xl4 chat" >
                    <ChatMessageList />
                    <ChatSendMessage />
                </div>
            </div>
        );
    }
}

