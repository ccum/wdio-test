// stepdefinitions.js
 
import { assert } from 'chai';
import { Given, Then } from 'cucumber';

Given(/^I go to the website$/, async function () {
  await browser.url('https://www.google.com/').then(function(){
      browser.pause(5000);
    });
});

Then(/^I expect the title of the page$/,  async function () {
  await browser.pause(1000).then(function(){
    console.log("hola")
  })
  assert.equal(await browser.getTitle(), "Google")
});