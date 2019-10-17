// stepdefinitions.js
 
const assert = require('assert')
const { Given, Then } = require('cucumber')

// import { assert } from 'chai';
// import { Given,Then } from 'cucumber';

//const { Given, Then } = require('cucumber')
// import FromMascotas from '../../pageobjects/FromMascotas';
//const FromMascotas = require("../../pageobjects/FromMascotas")


Given('I go to the website', async function () {
  await browser.url('https://www.google.com/').then(function(){
      browser.pause(5000);
    });
});

Then('I expect the title of the page', async function () {
  await browser.pause(1000).then(function(){
    console.log("hola")
  })
  assert.equal(await browser.getTitle(), "Google")
});
