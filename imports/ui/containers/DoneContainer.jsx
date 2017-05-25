import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import i18n from 'meteor/universe:i18n';

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
                    displayError(i18n.__('other.whoops'), i18n.__('container.donecontainer.errorMsg'));
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
						<h2>{i18n.__('container.donecontainer.doneHeader')}</h2>
					<p className="done-icon"><i className="fa fa-check-circle" aria-hidden="true"></i></p>
				<button onClick={this.onClick} className="waves-effect waves-light btn-large">{i18n.__('container.donecontainer.doneNewUploadBtn')}</button>
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
