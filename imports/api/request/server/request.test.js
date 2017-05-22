import {Meteor} from 'meteor/meteor';
import expect from 'expect'
import {Random} from 'meteor/random';
import {_} from 'meteor/underscore';
import {resetDatabase} from 'meteor/xolvio:cleaner';
import {Factory} from 'meteor/dburles:factory';
import {PublicationCollector} from 'meteor/johanbrook:publication-collector';

import {Request} from '../request.js';
import {insert, applyRequest, cancelRequest, doneRequest, finishRequest} from '../methods.js';

import './publications.js';


const userReqId = Random.id();
const userPossibleId = Random.id();


function setUpData() {
    Factory.define('request', Request, {
        userReqId: userReqId,
        reward: 1000,
        delivery: false,
        needColor: false,
        currency: "SEK",
        pages: 2,
        copies: 2,
        title: "Test title",
        radius: 1000,
        lastDate: new Date(),
        lastTime: "10:00",
        possibleOnes: [],
        docURL: "http://bild.se",
        isDone: false,
        isCancel: false,
        position: {type: "Point", coordinates: [0, 0]}
    });
}

function getOkeyRequest() {
    let d = new Date();
    d.setDate(d.getDate() + 2);
    return {
        reward: 1000,
        delivery: false,
        needColor: false,
        currency: "SEK",
        pages: 2,
        copies: 2,
        title: "Test title",
        radius: 1000,
        lastDate: d,
        lastTime: "10:00",
        docURL: "http://bild.se",
        position: {type: "Point", coordinates: [0, 0]}
    }
}

function getBadDateRequest() {
    let d = new Date();
    d.setDate(d.getDate() - 2);
    return {
        reward: 1000,
        delivery: false,
        needColor: false,
        currency: "SEK",
        pages: 2,
        copies: 2,
        title: "Test title",
        radius: 1000,
        lastDate: d,
        lastTime: "10:00",
        docURL: "http://bild.se",
        position: {type: "Point", coordinates: [0, 0]}
    }
}

describe('Request', () => {


    beforeEach(function () {
        // mock up mongodb data
        setUpData();
    });

    afterEach(() => {
        resetDatabase();
    });

    it('Builds correctly from factory', () => {
        const request = Factory.create('request');
        expect(request).toBeA('object');
        expect(request.createdAt).toBeA(Date);
    });

    it('Must be logged in to add a item', function () {
        const request = getOkeyRequest();
        expect(function () {
            insert._execute({}, request);
        }).toThrow("request.insert.unauthorized");
    });

    it('Cant add request with bad date', function () {
        const userId = Random.id();
        const request = getBadDateRequest();
        expect(function () {
            insert._execute({userId}, request);
        }).toThrow("request.insert.invalidDate");
    });

    it('Can insert request', function () {
        const userId = Random.id();
        const request = getOkeyRequest();
        insert._execute({userId}, request);
        expect(Request.find().count()).toEqual(1);
    });

    it('Apply to request', function () {
        const request = Factory.create('request');
        const userId = Random.id();
        applyRequest._execute({userId}, {requestId: request._id});
        expect(function () {
            applyRequest._execute({userId}, {requestId: request._id});
        }).toThrow("request.applyRequest.exist");
    });

    it('Cancel request', function () {
        const request = Factory.create('request');
        const randomUserId = Random.id();

        expect(function () {
            cancelRequest._execute({userId: randomUserId}, {requestId: request._id});
        }).toThrow("request.cancelRequest.notsame");

        cancelRequest._execute({userId: userReqId}, {requestId: request._id});
        expect(Request.findOne(request._id).isCancel).toEqual(true);
    });

    it('Finish request', function () {
        const request = Factory.create('request');
        const randomUserId = Random.id();

        expect(function () {
            finishRequest._execute({userId: randomUserId}, {requestId: request._id});
        }).toThrow("request.finishRequest.notsame");

        finishRequest._execute({userId: userReqId}, {requestId: request._id});
        expect(Request.findOne(request._id).finishAt).toBeA(Date);
    });
});

describe('Request publication', () => {
    const userId = Random.id();
    const printBuddyId = Random.id();
    ;

    beforeEach(function () {
        // mock up mongodb data
        setUpData();
    });

    afterEach(() => {
       resetDatabase();
    });



    it('jobs-request', function (done) {
        Factory.create('request', {
            userReqId: userId,
            radius: 1000,
            position: {type: "Point", coordinates: [13.031432, 55.604431]}
        });
        Factory.create('request', {
            userReqId: userId,
            radius: 300,
            position: {type: "Point", coordinates: [13.031432, 55.604431]}
        });
        Factory.create('request', {
            userReqId: userId,
            delivery: true,
            radius: 200,
            position: {type: "Point", coordinates: [12.920604, 55.572084]}
        });
        const collector = new PublicationCollector();
        collector.collect('jobs-request', 55.605492, 13.024297, true, (collections) => {
            expect(collections.request.length).toEqual(1);
            done();
        });
    });

    it('jobs-request-delivery', function (done) {
        Factory.create('request', {
            userReqId: userId,
            delivery: true,
            radius: 1000,
            position: {type: "Point", coordinates: [13.031432, 55.604431]}
        });
        Factory.create('request', {
            userReqId: userId,
            delivery: false,
            radius: 300,
            position: {type: "Point", coordinates: [13.031432, 55.604431]}
        });
        Factory.create('request', {
            userReqId: userId,
            delivery: true,
            radius: 200,
            position: {type: "Point", coordinates: [12.920604, 55.572084]}
        });

        const collector = new PublicationCollector();
        collector.collect('jobs-request-delivery', 55.605492, 13.024297,true, (collections) => {
            expect(collections.request.length).toEqual(2);
            done();
        });
    });


    it('user-request', function (done) {
        // Good
        Factory.create('request', {userReqId: userId});

        // Bad
        Factory.create('request', {userReqId: Random.id()});
        Factory.create('request', {userReqId: userId, isCancel: true});
        Factory.create('request', {userReqId: userId, isCancel: false, finishAt: new Date()});

        const collector = new PublicationCollector({userId: userId});
        collector.collect('user-request', (collections) => {
            expect(collections.request.length).toEqual(1);
            done();
        });
    });

    it('myjob-request-active', function (done) {
        // Good
        Factory.create('request', {chosenOne: userId});

        // Bad
        Factory.create('request', {chosenOne: Random.id()});
        Factory.create('request', {chosenOne: userId, isDone: true, isCancel:false});
        Factory.create('request', {chosenOne: userId, isDone: false, isCancel:true});

        const collector = new PublicationCollector({userId: userId});
        collector.collect('myjob-request-active', (collections) => {
            expect(collections.request.length).toEqual(1);
            done();
        });
    });

    it('myjob-request-pending', function (done) {
        // Good
        const c = Factory.create('request', {isDone: false, isCancel: false});
        Request.update(c._id, {$push: {possibleOnes: userId}});

        // Bad
        const c2 = Factory.create('request',{isDone: true, isCancel: false });
        Request.update(c2._id, {$push: {possibleOnes: Random.id()}});
        const c3 = Factory.create('request',{isDone: false, isCancel: true });
        Request.update(c3._id, {$push: {possibleOnes: Random.id()}});
        const c4 = Factory.create('request',{isDone: true, isCancel: true});
        Request.update(c4._id, {$push: {possibleOnes: Random.id()}});
        const c5 = Factory.create('request',{isDone: false, isCancel: false, chosenOne: Random.id()});
        Request.update(c5._id, {$push: {possibleOnes: Random.id()}});

        const collector = new PublicationCollector({userId: userId});
        collector.collect('myjob-request-pending', (collections) => {
            expect(collections.request.length).toEqual(1);
            done();
        });
    });

    it('myjob-request-buddy-chat', function (done) {
        // Good
        Factory.create('request', {chosenOne: userId});

        // Bad
        Factory.create('request', {chosenOne: Random.id()});

        const collector = new PublicationCollector({userId: userId});
        collector.collect('myjob-request-buddy-chat', (collections) => {
            expect(collections.request.length).toEqual(1);
            done();
        });
    });

});

