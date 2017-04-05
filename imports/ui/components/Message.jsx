import React from "react";

export default class Message extends React.Component {
    render() {
        let messageClassName = `collection-item avatar message-user-${this.props.user.number}`

        return (
            <div className={messageClassName}>
                <div>
                    <span className="message-username">{this.props.user.username}:</span>
                    <p>{this.props.user.text}</p>
                    <div className="secondary-content">{this.props.user.createdAt}</div>
                </div>
            </div>
        );
    }
}
