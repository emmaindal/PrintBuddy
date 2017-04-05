import React from "react";

import ChatMessageList from "./ChatMessageList";
import ChatSendMessage from "./ChatSendMessage";

export default class ChatComponent extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m8 l6 xl4 offset-m2 offset-l3 offset-xl4" >
                    <h1>ChatComponent</h1>
                    <ChatMessageList/>
                    <ChatSendMessage/>
                </div>
            </div>
        );
    }
}

