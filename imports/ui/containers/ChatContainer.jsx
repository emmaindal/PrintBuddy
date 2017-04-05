import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import ChatComponent from "../components/ChatComponent";


class Chat extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
    }

	render() {
		return (
			<div>
				<h1>Chat Container</h1>
                <ChatComponent/>
			</div>
		);
	}
}

const ChatContainer = createContainer(() => {

    return {
    };
}, Chat);


export default ChatContainer;