import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import Content from './Content';

if (Meteor.isClient) {
    describe('Start/Content page', function () {
        it('should call popLoginModal on click', function () {
            const spy = expect.spyOn(Content.prototype, "popLoginModal");
            const wrapper = mount(<Content/>);

            expect(spy).toNotHaveBeenCalled();
            wrapper.find('#btn-poploginmodal').simulate('click');
            expect(spy).toHaveBeenCalled();
        });
        it('should call popRegisterModal on click', function () {
            const spy = expect.spyOn(Content.prototype, "popRegisterModal");
            const wrapper = mount(<Content/>);

            expect(spy).toNotHaveBeenCalled();
            wrapper.find('#btn-popregistermodal').simulate('click');
            expect(spy).toHaveBeenCalled();
        });
    });
}