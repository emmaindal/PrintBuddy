import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import Nav from '../components/Nav';
import {browserHistory} from 'react-router';
import {PrintBuddy} from '../../api/printbuddy/printbuddy';

import isLoading from "../components/Loading";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
    }
    render() {
        if (this.props.loading) {
            return (<div><isLoading/></div>); //show loading icon
        }
        const {currentUser, children } = this.props;
        let child = (<div></div>);
        if(children){
            // Todo fixa detta! så den routar rätt
            child =   React.cloneElement(children, {isBuddy: currentUser.isBuddy()});
        }
        return (
            <div> 
                <Nav isBuddy={currentUser.isBuddy()}/>
                <main>
                    {child}   
                </main>   
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.element, // matched child route component
    currentUser: React.PropTypes.object,
    loading: React.PropTypes.bool   // subscription status
};

// Create container är en hjälp class för att binda meteor data till react komponents
// https://atmospherejs.com/meteor/react-meteor-data
const AppContainer = createContainer(() => {
    const printbuddyHandle = Meteor.subscribe('printbuddy');
    const userDataHandle = Meteor.subscribe('userData');

    return {
        loading: !(printbuddyHandle.ready() && userDataHandle.ready()),
        currentUser: Meteor.user(),
        printBuddy: PrintBuddy.find({}).fetch()
    };
}, App)


export default AppContainer;
