import React from "react";
//import { Mongo } from "meteor/mongo";
//import FlipMove from 'react-flip-move';

import Message from "./Message";

export default class PlayerList extends React.Component {
    renderMessages() {
        const messages = [
            {
                _id: "1",
                username: "Alex",
                text: "Hej vad heter du?",
                createdAt: new Date(),
            },
            {
                _id: "2",
                username: "Micke",
                text: "Jag heter Micke, vad heter du?",
                createdAt: new Date(),
            }
        ]

        if (messages.length === 0) {
            return (
                <div className="item">
                    <p className="item__message">Type your first message to get started!</p>
                </div>
            );
        } else {
            return messages.map((message) => {
                return <Message key={message._id} player={message}/>;
	        });
        }
    }
    render () {
        return (
            <div>
                <h1>render messages</h1>
                *{this.renderMessages()}
            </div>
        );
    }
};

