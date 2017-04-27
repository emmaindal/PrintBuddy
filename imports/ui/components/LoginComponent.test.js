import {Meteor} from 'meteor/meteor';
import React from 'react';
import {shallow,mount} from 'enzyme';
import {sinon, stub} from 'meteor/practicalmeteor:sinon';
import expect from 'expect'
import enzymify from 'expect-enzyme'

expect.extend(enzymify)

import LoginComponent from './LoginComponent.jsx';


if (Meteor.isClient) {
    describe('LoginComponent', () => {
        it('should render', () => {
            const onSubmit = sinon.stub();

            const wrapper = shallow(<LoginComponent submit={onSubmit}/>);
            expect(wrapper.find('form')).toExist();
            expect(wrapper.find('form')).toHaveProp('onSubmit', wrapper.instance().onSubmit);
            expect(wrapper.find('input[type="password"]')).toExist();
            expect(wrapper.find('input[type="email"]')).toExist();
            wrapper.setState({ password: 'foo' });
            wrapper.setState({ email: 'bar' });
            expect(wrapper.find('input[type="email"]')).toHaveProp('value',wrapper.state().email);
            expect(wrapper.find('input[type="password"]')).toHaveProp('value',wrapper.state().password);
        });

        it('onSubmit should button click', () => {
            const onSubmit = sinon.spy();

            expect(onSubmit.calledOnce).toNotExist();
            const wrapper = mount(<LoginComponent submit={onSubmit}/>);
            wrapper.find('button').simulate('submit');
            expect(onSubmit.calledOnce).toExist();
        });

        it('Input is changing state', () => {
            const onSubmit = sinon.spy();

            const wrapper = mount(<LoginComponent submit={onSubmit}/>);
            const password = wrapper.find('input[type="password"]');
            const email = wrapper.find('input[type="email"]');

            wrapper.setState({ password: 'foo' });
            wrapper.setState({ email: 'bar' });

            email.simulate('change',
                { target: { value: 'mikael@mail.se' } }
            );

            password.simulate('change',
                { target: { value: 'qwerty' } }
            );

            expect(wrapper).toHaveState({email: 'mikael@mail.se',  password: 'qwerty' });

        });
    });
}
