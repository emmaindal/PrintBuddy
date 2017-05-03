import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import moment from 'moment';

import Message from './Message';

if (Meteor.isClient) {
    describe('Message (chat)', function () {
        const testMessage = {
            username: 'testuser',
            createdAt: new Date(),
            text: 'detta e testmeddelandet'
        };

        it('should set message-username to the logged-in user', function () {
            const wrapper = mount(<Message message={testMessage}/>);
            const userName = wrapper.find('.message-username').text();

            expect(userName).toBe(testMessage.username);
        });
        it('should set message paragraph to the message text', function () {
            const wrapper = mount(<Message message={testMessage}/>);
            const messageText = wrapper.find('p').text();

            expect(messageText).toBe(testMessage.text);
        });
        
        it('should format message date with moment.js', function () {
            const wrapper = mount(<Message message={testMessage}/>);
            const messageDate = wrapper.find('.secondary-content').text();

            expect(messageDate).toBe(moment(testMessage.createdAt.toISOString()).fromNow());
        });
    });
}