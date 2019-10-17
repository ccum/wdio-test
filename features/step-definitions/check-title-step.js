// stepdefinitions.js
 
// const assert = require('assert')
import { assert } from 'chai';
import { Given,Then } from 'cucumber';

//const { Given, Then } = require('cucumber')
// import FromMascotas from '../../pageobjects/FromMascotas';
//const FromMascotas = require("../../pageobjects/FromMascotas")

Given('I go to the website', function () {
    browser.url('http://localhost:3000/');
});

Then('I expect the title of the page', function () {
  
  FromMascotas().putMascota();
  assert.equal(browser.getTitle(), "React App");
  browser.pause(1000);
 
});
