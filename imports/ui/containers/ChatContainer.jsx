import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import ChatComponent from "../components/ChatComponent";


class Chat extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            users: ""
        }
    }
    onSubmit(message) {
        console.log(message);
        // INSERT Message till databas
        const obj = {
            _id: "212",
            username: "Hampus",
            text: message,
            createdAt: "Saturday 10.05PM",
            number: "one"
        }
        console.log(obj);
    }
    componentDidMount() {
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
        this.setState({
            users: users,
        });
    }
	render() {        
		return (
			<div>
				<h1>Chat Container</h1>
                <ChatComponent users={this.state.users} onSubmit={this.onSubmit.bind(this)}/>
			</div>
		);
	}
}

const ChatContainer = createContainer(() => {

    return {
    };
}, Chat);


export default ChatContainer;