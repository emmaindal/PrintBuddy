import React from "react";
import i18n from 'meteor/universe:i18n';
import FlipMove from 'react-flip-move';

import Message from "./Message";

class ChatMessageList extends React.Component {
    renderMessages() {
        const users = this.props.users;
        const { userId, chat } = this.props;
        if (!chat.messages || chat.messages.length == 0) {
            return (
                <div className="collection-header">
                    <h5 className="center-align">{i18n.__('components.chatmessagelist.headerMessage')}</h5>
                </div>
            );
        } else {
            return chat.messages.map((message, index) => {
                return <Message userId={userId} key={index} message={message} />;
            });
        }
    }
    componentWillUpdate() {
        $('#chatbox').animate({
            scrollTop: $("#chatbox").prop("scrollHeight")
        });
    }
    render() {
        return (
            <div>
                <ul className="collection">
                    <FlipMove maintainContainerHeight={true} duration={700} easing="ease">
                        {this.renderMessages()}
                    </FlipMove>
                </ul>
            </div>
        );
    }
}
;

ChatMessageList.propTypes = {
    chat: React.PropTypes.object,
    userId: React.PropTypes.string
};

export default ChatMessageList;



