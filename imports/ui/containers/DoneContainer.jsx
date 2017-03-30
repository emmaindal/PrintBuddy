import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';


class Done extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
    }

	render() {
		return (
			<div>
				<h1>Done Component</h1>
			</div>
		);
	}
}

const DoneContainer = createContainer(() => {

    return {
    };
}, Done);


export default DoneContainer;