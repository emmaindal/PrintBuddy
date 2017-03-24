import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import i18n from 'meteor/universe:i18n';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Meteor } from 'meteor/meteor';

// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';


i18n.setLocale('en');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

function requireAuth(nextState, replace) {
    if (!Meteor.userId()) {
        replace({
            pathname: '/login',
            state: {nextPathname: nextState.location.pathname}
        });
    }
}

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={AppContainer}></Route>
    </Router>
);
