import {Meteor} from 'meteor/meteor';
//import { Factory } from 'meteor/factory';
import React from 'react';
import {shallow} from 'enzyme';
import {chai} from 'meteor/practicalmeteor:chai';
import {sinon} from 'meteor/practicalmeteor:sinon';
import Nav from './Nav.jsx';


if (Meteor.isClient) {
    describe('Nav', () => {
        it('should render', () => {
            const item = shallow(<Nav/>);

        });
    });
}
