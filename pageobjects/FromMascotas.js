import Page from './page'

class FromMascotas extends Page {

    /**
     * define elements
     */
    get Mascota () { return $('//*[@id="root"]/div/div/div[1]/div/div/form/div[1]/div/input') }
    get Propietario () { return $('//*[@id="root"]/div/div/div[1]/div/div/form/div[2]/div/input') }
    get Fecha () { return $('//*[@id="root"]/div/div/div[1]/div/div/form/div[3]/div[1]/input') }
    get Hora () { return $('//*[@id="root"]/div/div/div[1]/div/div/form/div[3]/div[2]/input') }
    get Sintomas(){return $('//*[@id="root"]/div/div/div[1]/div/div/form/div[4]/div/textarea')}

    /**
     * define or overwrite page methods
     */
    // open () {
    //     super.open('login')
    // }

    // submit () {
    //     this.submitButton.click()
    // }

    putMascota(){
        this.Mascota.setValue("11111");
    }
}

export default new FromMascotas()