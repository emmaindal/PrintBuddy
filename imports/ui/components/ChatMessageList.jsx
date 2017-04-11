import React from "react";
import FlipMove from 'react-flip-move';

import Message from "./Message";

export default class ChatMessageList extends React.Component {
    renderMessages() {
        const users = this.props.users;

        if (users.length === 0) {
            return (
                <div className="collection-header">
                    <h5 className="center-align">Type your first message to get started!</h5>
                </div>
            );
        } else {
            return users.map((user) => {
                return <Message key={user._id} user={user} />;
            });
        }
    }
    render() {
        return (
            <div>
                <ul className="collection">
                    <FlipMove maintainContainerHeight={true} duration={700} easing="ease" >
                        {this.renderMessages()}
                    </FlipMove>
                </ul>
            </div>
        );
    }
};



