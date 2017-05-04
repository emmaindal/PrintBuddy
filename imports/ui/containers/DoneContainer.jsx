import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import {finishRequest} from '../../api/request/methods';

class Done extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        if (Meteor.userId() === this.props.request.userReqId) {
            finishRequest.call({requestId: this.props.request._id}, (err, res) => {
                if (err) {
                    displayError("Error!", 'Something went wrong :( ');
                } else {
                    browserHistory.replace("/request");
                }
            });
        }
	}

	render() {
		return (
			<div className="done-page">
					<div className="done">
						<h2>You are now done!</h2>
					<p className="done-icon"><i className="fa fa-check-circle" aria-hidden="true"></i></p>
				<button onClick={this.onClick} className="waves-effect waves-light btn-large">UPLOAD A NEW JOB</button>
					</div>
			</div>
		);
	}
}


Done.propTypes = {
    request: React.PropTypes.object
};

const DoneContainer = createContainer(() => {

    return {
    };
}, Done);


export default DoneContainer;
