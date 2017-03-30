import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';


class Start extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
    }

	render() {
		return (
			<div>
				<h1>Start Component</h1>
			</div>
		);
	}
}

const StartContainer = createContainer(() => {

    return {
    };
}, Start);


export default StartContainer;
