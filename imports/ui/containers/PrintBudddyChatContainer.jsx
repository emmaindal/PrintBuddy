import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import { browserHistory } from 'react-router';
import i18n from 'meteor/universe:i18n';

import ChatContainer from './ChatContainer';
import {Request} from '../../api/request/request.js';


class PrintBuddyChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        {browserHistory.replace("/jobs")};
    }

    renderRightContainer(){
        if (this.props.request.isDone) {
            return <div className="done-page">
                        <div className="done">
                            <h2>{i18n.__('container.pendingchatcontainer.doneHeader')}</h2>
                            <p className="done-icon"><i className="fa fa-check-circle" aria-hidden="true"></i></p>
                            <button onClick={this.onClick} className="waves-effect waves-light btn-large">{i18n.__('container.pendingchatcontainer.findNewJobBtn')}</button>
                        </div>
                    </div>;
        } else if (this.props.request.isCancel) {
            return <div className="cancel-page">
                        <div className="cancel">
                            <h2>{i18n.__('container.pendingchatcontainer.cancelHeader')}</h2>
                            <p className="cancel-icon"><i className="fa fa-times-circle" aria-hidden="true"></i></p>
                            <button onClick={this.onClick} className="waves-effect waves-light btn-large">{i18n.__('container.pendingchatcontainer.findNewJobBtn')}</button>
                        </div>
                    </div>;
        } else {
            return <ChatContainer request={this.props.request}/>
        }

    }
    render() {
        if (this.props.loading) {
            return (<div></div>); // or show loading icon
        }
        return (
            <div className="margin-top-4">
                {this.renderRightContainer()}
            </div>
        );
    }
}

const PrintBuddyChatContainer = createContainer(({params}) => {
    const requestHandle = Meteor.subscribe('myjob-request-buddy-chat');
    const loading = !requestHandle.ready();
    const req = Request.find({_id: params.id});
    const reqExists = !loading && !!req;

    return {
        loading: loading,
        reqExists: reqExists,
        request: reqExists ? req.fetch()[0] : {}
    };
}, PrintBuddyChat);


export default PrintBuddyChatContainer;
