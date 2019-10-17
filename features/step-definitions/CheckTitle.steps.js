// stepdefinitions.js
 
import { assert } from 'chai';
import { Given, Then } from 'cucumber';

Given(/^I go to the website$/, async function () {
  await browser.url('https://www.google.com/')
  const elemento = await browser.$('//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[2]/input');
  await elemento.setValue('hola')
});

Then(/^I expect the title of the page$/,  async function () {
  await browser.pause(1000).then(function(){
    console.log("hola")
  })
  assert.equal(await browser.getTitle(), "Google")
});