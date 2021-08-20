const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('hjtest@test.com', '123456');
        await new Promise(r => setTimeout(r, 10000));
       
        // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
            // 'You logged into a secure area!');
    });
});


