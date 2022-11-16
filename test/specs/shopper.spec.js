import Page from "../pageobjects/page";


describe('Main page check', () => {
    it('should check the main page', async() => {
       await browser.url('/')
        expect(await browser.getUrl()).toEqual('https://weathershopper.pythonanywhere.com/');
    });
    it('should check the temperature', function () {

    });
});