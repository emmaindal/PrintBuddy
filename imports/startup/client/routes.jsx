import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import i18n from 'meteor/universe:i18n';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { PrintBuddy } from '../../api/printbuddy/printbuddy';
//import gapi from 'gapi-client';

// route components
import RedirectContainer from '../../ui/containers/RedirectContainer';
import ProfileContainer from '../../ui/containers/ProfileContainer';
import LoginContainer from '../../ui/containers/LoginContainer';
import RegisterContainer from '../../ui/containers/RegisterContainer';
import StartContainer from '../../ui/containers/StartContainer';
import AboutContainer from '../../ui/containers/AboutContainer';
import AppContainer from '../../ui/containers/AppContainer';
import RequestContainer from '../../ui/containers/RequestContainer';
import PrintBudddyChatContainer from '../../ui/containers/PrintBudddyChatContainer';
import DoneContainer from '../../ui/containers/DoneContainer';
import JobsContainer from '../../ui/containers/JobsContainer';
import MyJobsContainer from '../../ui/containers/MyJobsContainer';
import MyJobListContainer from '../../ui/containers/MyJobListContainer';
import VerifiedContainer from '../../ui/containers/VerifiedContainer';
import TestContainer from '../../ui/containers/TestContainer';


import '../../api/user/user.js';

i18n.setLocale('en');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

function requireAuth(nextState, replace) {
    if (!Meteor.userId()) {
        replace({
            pathname: '/start',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}

/*
* 	<Route path="create" component={CreateRequestContainer}/>
 <Route path="pending" component={PendingRequestContainer}/>
 <Route path="chat" component={ChatContainer}/>
 <Route path="done" component={DoneContainer}/>
* */

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/profile" component={ProfileContainer} />
        <Route path="/start" component={StartContainer} />
        <Route path="/about" component={AboutContainer} />
        <Route path="/verified" component={VerifiedContainer} />
        <Route onEnter={requireAuth} path="/" component={AppContainer}>
            <IndexRoute component={RedirectContainer} />
            <Route path="request" component={RequestContainer}>
            </Route>
            <Route path="jobs" component={JobsContainer} />
            <Route path="myjobs" component={MyJobsContainer}>
                <IndexRoute component={MyJobListContainer} />
                <Route path="chat/:id" component={PrintBudddyChatContainer} />
                <Route path="done" component={DoneContainer} />
            </Route>
            <Route path="test" component={TestContainer} />
        </Route>
    </Router>
);
