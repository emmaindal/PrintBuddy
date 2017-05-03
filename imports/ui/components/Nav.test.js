import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';

import Nav from './Nav';

if (Meteor.isClient) {
    describe('Navbar', function () {
        it('should call popProfileModal on click', function () {
            const spy = expect.spyOn(Nav.prototype, "popProfileModal");
            const wrapper = shallow(<Nav isBuddy={true}/>);

            expect(spy).toNotHaveBeenCalled();
            wrapper.find('#btn-settingsmodal').simulate('click');
            expect(spy).toHaveBeenCalled();
        });
        it('should call onLogout on click', function () {
            const spy = expect.spyOn(Nav.prototype, "onLogout");
            const wrapper = shallow(<Nav isBuddy={true}/>);

            expect(spy).toNotHaveBeenCalled();
            wrapper.find('#btn-onlogout').simulate('click');
            expect(spy).toHaveBeenCalled();
        });

        it('should set Indexlink to "Jobs" if user is a PrintBuddy', function () {
            const wrapper = shallow(<Nav isBuddy={true}/>);
            const indexLinkText = wrapper.find('#mainindexlink').node.props.to;
            expect(indexLinkText).toBe('/jobs');
        });
        it('should show link to "My Jobs" if user is a PrintBuddy', function () {
            const wrapper = shallow(<Nav isBuddy={true}/>);
            const myJobsLink = wrapper.find('#myjobslink');
            expect(myJobsLink).toExist();
        });

        it('should set Indexlink to "Request" if user is a Requestor', function () {
            const wrapper = shallow(<Nav isBuddy={false}/>);
            const indexLinkText = wrapper.find('#mainindexlink').node.props.to;
            expect(indexLinkText).toBe('/request');
        });
        it('should Hide link to "My Jobs" if user is a Requestor', function () {
            const wrapper = shallow(<Nav isBuddy={false}/>);
            const myJobsLink = wrapper.find('#myjobslink');
            expect(myJobsLink).toNotExist();
        });
    });
}