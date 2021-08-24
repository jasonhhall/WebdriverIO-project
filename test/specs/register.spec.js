const RegisterPage = require('../pageobjects/register.page');

describe('TEST REGISTER PAGE', () => {
    it('Register a new account', async () => {
        await RegisterPage.open();
        let value = Math.floor(Math.random() * 100);
        await RegisterPage.registerAccount('M', 'Tom', 'Ford', 'txford'+value+'@test.com', '123456');
        expect(RegisterPage.message).toHaveText('Your registration completed');
    });
});

