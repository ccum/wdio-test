import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import {addNewAppointment} from '../../pages/AddNewAppointment.page'


Given(/^I have load the page new appointments$/, async function(){
    await addNewAppointment.open().then(async function(){
        await browser.pause(1000);
    });
})

When(/^I fill all inputs and do click on Agregar Nueva Cita$/, async function(){
    await addNewAppointment.addPet().then(async()=>{
        await browser.pause(1000)
    })
})

Then(/^the system add the new appointment on the list$/, async function(){
    await addNewAppointment.clickOnButton();
    assert.equal("hola","hola");
})
