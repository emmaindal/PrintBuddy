import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import TestComponent from '../components/TestComponent';
import {displayAlert}from '../helpers/alerts';
import {Items} from '../../api/items/items.js';
import {insert} from '../../api/items/methods';
import {removeAll} from '../../api/items/methods';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.testClick = this.testClick.bind(this);
        this.testClick2 = this.testClick2.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    testClick() {
        displayAlert("title", "message");
    }

    testClick2() {
        const title = Math.random().toString(36).substring(7);
        const desc = Math.random().toString(36).substring(7);
        insert.call({title: title, desc: desc});
    }

    testClick3() {
        removeAll.call();
    }

    render() {
        const {items} = this.props;

        return (
            <div id="container">
                <h1>PrintBuddy</h1>
                <TestComponent title='Test title' onClick={this.testClick} add={this.testClick2} remove={this.testClick3} items={items} ></TestComponent>
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.element, // matched child route component
};

// Create container är en hjälp class för att binda meteor data till react komponents
// https://atmospherejs.com/meteor/react-meteor-data
const AppContainer = createContainer(() => {
    Meteor.subscribe('items');

    return {
        items: Items.find({}).fetch()
    };
}, App);


export default AppContainer;
