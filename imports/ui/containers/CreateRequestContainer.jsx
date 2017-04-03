import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import CreateRequestComponent from "../components/CreateRequestComponent";


class CreateRequest extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
    }
    onSubmit() {
        return(
            <h1>hello</h1>
        );
    }
	render() {
		return (
			<div>
				<h2>CreateRequest Container</h2>
                <CreateRequestComponent/>
			</div>
		);
	}
}

const CreateRequestContainer = createContainer(() => {

    return {
    };
}, CreateRequest);


export default CreateRequestContainer;