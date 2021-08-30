const LoginPage = require('../page/login-page');
const LoginPageData = require('./data/login-page');

describe('TEST LOGIN PAGE', () => {
    it('should deny access with wrong creds', async () => {
        await LoginPage.open()
        await LoginPage.username.setValue('foo@test.com')
        await LoginPage.password.setValue('bar')
        await LoginPage.login()
        await expect(LoginPage.flash).toHaveTextContaining("Login was unsuccessful");
    })

    it('should allow access with correct creds', async () => {
        await LoginPage.open()
        await LoginPage.username.setValue(LoginPageData.username)
        await LoginPage.password.setValue(LoginPageData.password)
        await LoginPage.login()
        await expect(LoginPage.customerInfo).toHaveText(LoginPageData.username);
    })
})