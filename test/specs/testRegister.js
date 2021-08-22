const RegisterPage = require('../pageobjects/register.page');
const RegisterResultPage = require('../pageobjects/register.result.page');

describe('TEST Register Page', () => {
    it('Your registration completed', async () => {
        await RegisterPage.open();
        let value = Math.floor(Math.random() * 100);
        await RegisterPage.register('M', 'Tom', 'Ford', 'tomford'+value+'@test.com', '123456');
        await RegisterResultPage.open();
        await expect(RegisterResultPage.messageAlert).toHaveText('Your registration completed!');

    });
});

