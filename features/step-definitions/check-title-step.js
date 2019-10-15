// stepdefinitions.js
 
const assert = require('assert')
const { Given, Then } = require('cucumber')

Given('I go to the website', function () {
    browser.url('https://www.google.com/');
});

Then('I expect the title of the page', function () {
  browser.pause(10000);
  assert.equal(browser.getTitle(), "Google")
 
});
