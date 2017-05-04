import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React from 'react';
import { browserHistory } from 'react-router';


class MyJobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        if (!this.props.isBuddy) {
            browserHistory.replace('/request');
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("ADSASDASDASD ");

        if (!nextProps.isBuddy) {
            browserHistory.replace('/request');
        }
    }


    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

const MyJobsContainer = createContainer(() => {
    return {
    };
}, MyJobs);


export default MyJobsContainer;