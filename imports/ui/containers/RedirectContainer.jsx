import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React from 'react';

import { browserHistory } from 'react-router';
import { PrintBuddy } from '../../api/printbuddy/printbuddy';

class Redirect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {

    }
    componentDidMount() {
        const printbuddyHandle = Meteor.subscribe('printbuddy');
        const userDataHandle = Meteor.subscribe('userData');
        let currentUser = Meteor.user().isBuddy();
        if (!currentUser) {
            browserHistory.replace("/request");
        } else {
            browserHistory.replace("/jobs");
        }
    }
    render() {
        return (
            <div></div>
        );
    }
}


const RedirectContainer = createContainer(() => {
    const printbuddyHandle = Meteor.subscribe('printbuddy');
    const userDataHandle = Meteor.subscribe('userData');

    return {
        loading: !(printbuddyHandle.ready() && userDataHandle.ready()),
        currentUser: Meteor.user(),
        printBuddy: PrintBuddy.find({}).fetch()
    };
}, Redirect)


export default RedirectContainer;
