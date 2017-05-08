import {Meteor} from 'meteor/meteor';

import {Request} from '../request/request';
import {sendNewRequestPushPickUp, sendNewRequestPushDelivery, sendAppliedPush,sendAcceptPush} from './push';
import {sendNewRequestEmailPickUp, sendNewRequestEmailDelivery, sendAcceptEmail,sendAppliedEmail} from './email';

export function sendNewRequestNotificationPickUp(userId, title, lat, lng, radius,needColor){

    try{
        sendNewRequestEmailPickUp(userId, title, lat, lng, radius,needColor);
    }
    catch(err)  {
        console.log(err);
    }
    try{
        sendNewRequestPushPickUp(userId, title, lat, lng, radius,needColor);
    }
    catch(err)  {
        console.log(err);
    }

}

export function sendNewRequestNotificationDelivery(userId, title, lat, lng,needColor){

    try{
        sendNewRequestPushDelivery(userId, title, lat, lng,needColor);
    }
    catch(err)  {
        console.log(err);
    }
    try{
        sendNewRequestEmailDelivery(userId, title, lat, lng,needColor);
    }
    catch(err)  {
        console.log(err);
    }
}

export function sendAppliedNotification(requestId){

    const request = Request.findOne(requestId);
    const user = Meteor.users.findOne(request.userReqId);
    try{

        sendAppliedPush(user);
    }
    catch(err)  {
        console.log(err);
    }
    try{

        sendAppliedEmail(user);
    }
    catch(err)  {
        console.log(err);
    }
}

export function sendAcceptNotification(userId){

    const user = Meteor.users.findOne(userId);
    try{
        sendAcceptPush(user);
    }
    catch(err)  {
        console.log(err);
    }
    try{
        sendAcceptEmail(user);
    }
    catch(err)  {
        console.log(err);
    }
}