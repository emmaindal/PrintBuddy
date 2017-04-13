import React from "react";

class Message extends React.Component {
    render() {
        let messageClassName = `message-user-one`;

        if(this.props.userId == this.props.message.userId){
            messageClassName = `message-user-two`;
        }

        return (
            <li className="collection-item avatar">
                <div className={messageClassName}>
                    <span className="message-username">{this.props.message.username}:</span>
                    <p>{this.props.message.text}</p>
                    <div className="secondary-content">{this.props.message.createdAt.toISOString()}</div>
                </div>
            </li>
        );
    }
}

Message.propTypes = {
    message: React.PropTypes.object,
    userId: React.PropTypes.string
};

export default Message;