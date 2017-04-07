import React from "react";

import ChatMessageList from "./ChatMessageList";
import ChatSendMessage from "./ChatSendMessage";

export default class ChatComponent extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            $('#chatbox').animate({
                scrollTop: $("#chatbox").prop("scrollHeight")
            }, 0);
        }, 100);
    }
    
    render() {
        return (
            <div className="row chat-row">
                <h1 className="center-align">ChatComponent</h1>
                <div className="chat-container">
                    <div className="chat-header col s12 m8 l4 xl4 offset-m2 offset-l4 offset-xl4 center-align">
                        <h5>Chatt med Micke</h5>
                    </div>
                    <div id="chatbox" className="col s12 m8 l4 xl4 offset-m2 offset-l4 offset-xl4 chat" >
                        <ChatMessageList users={this.props.users} />
                        <ChatSendMessage onSubmit={this.props.onSubmit.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}

