//Cucumber keywords : Given, When, Then
const { Given, When, Then } = require('cucumber');

//Verify the result: using assert
const assert = require('assert');

//The product feature code to test: login?
const login = require('../../dev/dev').login

//the givenDay parameter will be set to whatever matches {string}
Given('I log in as {string}', function (username) {
    this.username = username;
});

When('I try to login', function () {
    this.actualAnswer = login(this.username);
});

//the expectedAnswer parameter will be set to whatever matches {string}
Then('I should be told {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer)
});
