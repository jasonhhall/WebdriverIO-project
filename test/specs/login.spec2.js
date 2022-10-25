const LoginPage = require('../pageobjects/login');
const Page = require('../pageobjects/page');
let MainPage = new Page();
require('dotenv').config();


describe('TEST LOGIN PAGE 2', () => {

        it('should allow access with correct creds', async () => {
            await LoginPage.open()
            await LoginPage.setEmailAddress(process.env.EMAIL);
            await LoginPage.setPassword(process.env.PASSWORD);
            await LoginPage.clickLogin();
            const customerEmail = await $("div .header-links [href='/customer/info']");
            await expect(customerEmail).toHaveText(process.env.EMAIL);
            await LoginPage.clickLogoutLink();
        })
})