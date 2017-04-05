import React from "react";
//import { Mongo } from "meteor/mongo";
//import FlipMove from 'react-flip-move';

import Message from "./Message";

export default class PlayerList extends React.Component {
    renderMessages() {
        const users = [
            {
                _id: "1",
                username: "Alex",
                text: "Hej vad heter du?",
                createdAt: "Tuesday 9.05PM",
                number: "one"
            },
            {
                _id: "2",
                username: "Micke",
                text: "Jag heter Micke, vad heter du?Jag heter Micke, vad heter du?Jag heter Micke, vad heter du?Jag heter Micke, vad heter du?Jag heter Micke, vad heter du?Jag heter Micke, vad heter du?Jag heter Micke, vad heter du?Jag heter Micke, vad heter du?",
                createdAt: "Tuesday 9.05PM",
                number: "two"
            },
            {
                _id: "3",
                username: "Alex",
                text: "Alex heter jag, gillar du bira?",
                createdAt: "Tuesday 9.05PM",
                number: "one"
            },
            {
                _id: "4",
                username: "Micke",
                text: "Jag älskar bira! h3h3h3...",
                createdAt: "Tuesday 9.05PM",
                number: "two"
            },
            {
                _id: "5",
                username: "Alex",
                text: "Hej vad heter du?",
                createdAt: "Tuesday 9.05PM",
                number: "one"
            },
            {
                _id: "6",
                username: "Micke",
                text: "Jag heter Micke, vad heter du?",
                createdAt: "Tuesday 9.05PM",
                number: "two"
            },
            {
                _id: "7",
                username: "Alex",
                text: "Alex heter jag, gillar du bira?",
                createdAt: "Tuesday 9.05PM",
                number: "one"
            },
            {
                _id: "8",
                username: "Micke",
                text: "Jag älskar bira! h3h3h3...",
                createdAt: "Tuesday 9.05PM",
                number: "two"
            }
            
        ]

        if (users.length === 0) {
            return (
                <div className="collection-header">
                    <h5 className="center-align">Type your first message to get started!</h5>
                </div>
            );
        } else {
            return users.map((user) => {
                return <Message key={user._id} user={user}/>;
	        });
        }
    }
    render () {
        return (
            <div>
                <ul className="collection">
                    {this.renderMessages()}
                </ul>
            </div>
        );
    }
};

