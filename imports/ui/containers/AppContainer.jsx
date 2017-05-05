import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React from 'react';

import Nav from '../components/Nav';
import { PrintBuddy } from '../../api/printbuddy/printbuddy';
import {subscriptionToPushIdChange} from '../helpers/pushhelper';
import {removePushId} from '../helpers/pushhelper';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onLogout = this.onLogout.bind(this);
    }
    componentDidMount() {
        $("#prepage").fadeOut(200);
        subscriptionToPushIdChange();
    }

    onLogout(){
        removePushId(() =>{
            Meteor.logout(function () {
                browserHistory.replace('/start');
            })
        });
    }

    render() {
        if (this.props.loading) {
            return (
                <div>
                    <div className="containerOne container1">
                        <div className="loading-circle loading-circle1"></div>
                        <div className="loading-circle loading-circle2"></div>
                        <div className="loading-circle loading-circle3"></div>
                    </div>
                    <div className="containerOne container2">
                        <p className="msg">
                            <span className="color1">· #</span><span className="color2">Print</span><span className="color3">Buddy ·</span>
                        </p>
                    </div>
                </div>
            ); //show loading icon
        }
        const { currentUser, children } = this.props;
        let child = (<div></div>);
        if (children) {
            child = React.cloneElement(children, { isBuddy: currentUser.isBuddy(), userId: currentUser._id });
        }
        return (
            <div>
                <Nav onLogout={this.onLogout} isBuddy={currentUser.isBuddy()} />
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
