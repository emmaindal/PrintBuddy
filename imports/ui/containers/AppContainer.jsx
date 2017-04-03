import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import Nav from '../components/Nav';
import TestComponent from '../components/TestComponent';
import Footer from '../components/Footer';
import {displayAlert}from '../helpers/alerts';
import {Items} from '../../api/items/items.js';
import {insert} from '../../api/items/methods';
import {removeAll} from '../../api/items/methods';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }


    render() {
        const {items} = this.props;

        return (
            <div>
				<Nav/>
                <main>
                <h1>PrintBuddy</h1>
				<h4>Under Development</h4>
				{this.props.children}
                </main>
                <Footer/>
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
