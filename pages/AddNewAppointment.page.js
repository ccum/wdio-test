
class AddNewAppointment
{

    async open() {
        await browser.url("http://localhost:3000/");
    }

    async addPet(){
        const mascota = await browser.$('//*[@id="root"]/div/div/div[1]/div/div/form/div[1]/div/input')
        const propietario = await browser.$('//*[@id="root"]/div/div/div[1]/div/div/form/div[2]/div/input')
        const fecha =  await browser.$('//*[@id="root"]/div/div/div[1]/div/div/form/div[3]/div[1]/input')
        const hora =   await browser.$('//*[@id="root"]/div/div/div[1]/div/div/form/div[3]/div[2]/input')
        const sintomas = await browser.$('//*[@id="root"]/div/div/div[1]/div/div/form/div[4]/div/textarea');
        await mascota.setValue('Iguana');
        await propietario.setValue('Dany Cenas');
        await fecha.setValue('10/08/2019');
        await hora.setValue('1010AM');
        await sintomas.setValue('Dolor de pansa');
        
        const button = await browser.$('//*[@id="root"]/div/div/div[1]/div/div/form/input');
        await button.click();

      
    }
    async clickOnButton(){
        await console.log("test");
        
    }
}

export const addNewAppointment = new AddNewAppointment();