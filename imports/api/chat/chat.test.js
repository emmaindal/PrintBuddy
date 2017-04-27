import expect from 'expect';
import { Meteor } from 'meteor/meteor';

import { Chat } from './chat';
import  {addMessageToRequest } from './methods';

if (Meteor.isServer) {
    describe('Chat', function () {
        // consts here if needed

        beforeEach(function () {
            // Stuff to do for each it() function.
        });

        it('should add new chatmessage if user is logged in', function () {
            //expect().toNotThrow();
        })
    });
};