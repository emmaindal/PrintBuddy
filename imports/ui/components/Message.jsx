import React from "react";
import moment from "moment";

class Message extends React.Component {
    render() {
        let messageClassName = `message-user-one`;
        let listClassName = `list-user-one collection-item avatar`;

        if(this.props.userId == this.props.message.userId){
            messageClassName = `message-user-two`;
            listClassName = `list-user-two collection-item avatar`;
        }

        return (
            <li className={listClassName}>
                <div className={messageClassName}>
                    <span className="message-username">{this.props.message.username}</span>
                    <div className="secondary-content">{moment(this.props.message.createdAt.toISOString()).fromNow()}</div>
                    <p>{this.props.message.text}</p>
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
