const RegisterPage = require('../pageobjects/register.page');
const RegisterResultPage = require('../pageobjects/register.result.page');

describe('TEST Register Page', () => {
    it('should register account with valid credentials', async () => {
        await RegisterPage.open();

        await RegisterPage.register('M', 'Tom', 'Ford', 'tford565@test.com', '123456');
     
        await RegisterResultPage.open();
        // await expect(RegisterResultPage.getRegisterStatus()).toHaveTextContaining('Your registration completed');
        await new Promise(r => setTimeout(r, 10000));

    });
});

