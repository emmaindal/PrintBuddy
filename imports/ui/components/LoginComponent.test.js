import { Meteor } from 'meteor/meteor';
//import { Factory } from 'meteor/factory';
import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import { sinon,stub } from 'meteor/practicalmeteor:sinon';
import LoginComponent from './LoginComponent.jsx';


if (Meteor.isClient) {
    describe('LoginComponent', () => {
        it('should render', () => {
            const onSubmit = sinon.stub();// The cancel function is no longer defined
            const onSubmit2 = sinon.stub();// The cancel function is no longer defined

            const item = shallow(<LoginComponent submit={onSubmit} />);
            chai.assert.equal(item.find('form').length, 1);
            chai.assert.equal(item.find('form').prop('onSubmit'), item.instance().onSubmit);
            chai.assert.equal(item.find('input[type="password"]').length, 1);
            chai.assert.equal(item.find('input[type="email"]').length, 1);

        });
    });
}
