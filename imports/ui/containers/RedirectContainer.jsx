import { Meteor } from 'meteor/meteor';
import React from 'react';

import { browserHistory } from 'react-router';

class RedirectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {

    }

    componentDidMount() {
        let isBuddy = this.props.isBuddy;
        if (!isBuddy) {
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

export default RedirectContainer;
