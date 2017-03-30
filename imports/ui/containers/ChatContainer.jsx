import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';


class Chat extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
    }

	render() {
		return (
			<div>
				<h1>Chat Component</h1>
			</div>
		);
	}
}

const ChatContainer = createContainer(() => {

    return {
    };
}, Chat);


export default ChatContainer;