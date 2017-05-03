import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';

import ChatSendMessage from './ChatSendMessage';

if (Meteor.isClient) {
    describe('Message Send (chat)', function () {
        it('should call onSubmit on form submit', function () {
            const spy = expect.spyOn(ChatSendMessage.prototype, "onSubmit");
            const wrapper = shallow(<ChatSendMessage/>);

            expect(spy).toNotHaveBeenCalled();
            wrapper.find('form').simulate('submit');
            expect(spy).toHaveBeenCalled();
        });
    });
}