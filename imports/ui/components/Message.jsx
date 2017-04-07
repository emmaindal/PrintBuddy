import React from "react";

export default class Message extends React.Component {
    render() {
        let messageClassName = `message-user-${this.props.user.number}`

        return (
            <li className="collection-item avatar">
                <div className={messageClassName}>
                    <span className="message-username">{this.props.user.username}:</span>
                    <p>{this.props.user.text}</p>
                    <div className="secondary-content">{this.props.user.createdAt}</div>
                </div>
            </li>
        );
    }
}
