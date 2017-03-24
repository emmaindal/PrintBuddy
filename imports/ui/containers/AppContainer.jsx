import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import TestComponent from '../components/TestComponent';
import {displayAlert}from '../helpers/alerts';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.testClick = this.testClick.bind(this);

    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    testClick() {
        displayAlert("title", "message");
    }

    render() {
        return (
            <div id="container">
                <h1>PrintBuddy</h1>
                <TestComponent title='Test title' onClick={this.testClick} ></TestComponent>
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.element, // matched child route component
};

const AppContainer = createContainer(() => {
    return {};
}, App);


export default AppContainer;
