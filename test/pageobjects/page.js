
class Page {
    get temperature() { return $('span#temperature')};
    get moisturizerBtn() { return $("[href='\/moisturizer'] .btn-primary")};
    get sunscreenBtn() { return $("[href='\/sunscreen'] .btn-primary")};

    async openMoisturizers(){
        if (await this.temperature.getText() < 19){
            await this.moisturizerBtn.click();
        }
    }
    async openSunscreens(){
        if (await this.temperature.getText() > 34){
            await this.sunscreenBtn.click()
        }
    }
}

export default Page;