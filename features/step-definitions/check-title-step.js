// stepdefinitions.js
 
const assert = require('assert')
const { Given, Then } = require('cucumber')


Given('I go to the website', function () {
    browser.url("www.google.com");
});

Then('I expect the title of the page', function () {
  assert.equal(browser.getTitle(), "hola")
});

// module.exports = function () {
//   this.Given(/^I go to the website$/, () => {
//     console.log("HOLLAAA");
//     browser.url("www.google.com");
//   });

//   this.Then(/^I expect the title of the page$/, () => {
//     expect(browser.getTitle()).to.be.eql("hola");
//     browser.pause(2000);
//   }); 
// }