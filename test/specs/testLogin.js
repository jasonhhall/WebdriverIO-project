const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const logindata = require("../testdata/login.data")

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(logindata.username, logindata.password);
        await HomePage.open();
        await expect(HomePage.userEmailAddrees).toHaveText(logindata.username);
    });
});


describe('TEST CASE 2', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(logindata.username, logindata.password);
        await HomePage.open();
        await expect(HomePage.userEmailAddrees).toHaveText(logindata.username);
    });
});

