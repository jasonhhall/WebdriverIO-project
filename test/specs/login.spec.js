const LoginPage = require('../pageobjects/login.page');
const LoginPageData = require('../testdata/login.data');
const loginTestData = require('../utilities/testdata-wrapper')

describe('TEST LOGIN PAGE', () => {
    // it('should deny access with wrong creds', async () => {
    //     await LoginPage.open()
    //     await LoginPage.username.setValue('foo@test.com')
    //     await LoginPage.password.setValue('bar')
    //     await LoginPage.login()
    //     await expect(LoginPage.flash).toHaveTextContaining("Login was unsuccessful");
    // })

    it('should allow access with correct creds', async () => {
        
        // console.log(loginTestData.getTableRow(__dirname+'/data/sample.xlsx', 'info', 'emp_id', '101'))
        await LoginPage.open()
        await LoginPage.username.setValue(LoginPageData.username)
        await LoginPage.password.setValue(LoginPageData.password)
        await LoginPage.login()
        await expect(LoginPage.customerInfo).toHaveText(LoginPageData.username);
    })
})