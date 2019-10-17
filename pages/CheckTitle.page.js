
class CheckTitle
{
    get inputForSearch(){
        return $('//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[2]/input')
    }
    async open() {


    }

    async clickOnButton(){
        await console.log("test");
    }
}

export const checkTitle = new CheckTitle();