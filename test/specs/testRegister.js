const RegisterPage = require('../pageobjects/register.page');
const RegisterResultPage = require('../pageobjects/register.result.page');

describe('TEST Register Page', () => {
    it('Register a new account', async () => {
        await RegisterPage.open();
        let value = Math.floor(Math.random() * 100);
        await RegisterPage.register('M', 'Tom', 'Ford', 'tomford'+value+'@test.com', '123456');
        await RegisterResultPage.open();
        await expect(RegisterResultPage.messageAlert).toHaveText('Your registration completed');
    });

    it('TEST CASE 2', async () => {
        await RegisterPage.open();
        let value = Math.floor(Math.random() * 100);
        await RegisterPage.register('M', 'Tom', 'Ford', 'tomford'+value+'@test.com', '123456');
        await RegisterResultPage.open();
        await expect(RegisterResultPage.messageAlert).toHaveText('Your registration completed');
    });

    it('TEST CASE 3', async () => {
        await RegisterPage.open();
        let value = Math.floor(Math.random() * 100);
        await RegisterPage.register('M', 'Tom', 'Ford', 'tomford'+value+'@test.com', '123456');
        await RegisterResultPage.open();
        await expect(RegisterResultPage.messageAlert).toHaveText('Your registration completed');
    });

    it('TEST CASE 4', async () => {
        await RegisterPage.open();
        let value = Math.floor(Math.random() * 100);
        await RegisterPage.register('M', 'Tom', 'Ford', 'tomford'+value+'@test.com', '123456');
        await RegisterResultPage.open();
        await expect(RegisterResultPage.messageAlert).toHaveText('Your registration completed');
    });

    it('TEST CASE 5', async () => {
        await RegisterPage.open();
        let value = Math.floor(Math.random() * 100);
        await RegisterPage.register('M', 'Tom', 'Ford', 'tomford'+value+'@test.com', '123456');
        await RegisterResultPage.open();
        await expect(RegisterResultPage.messageAlert).toHaveText('Your registration completed');
    });

    it('THIS TEST SHOULD FAIL', async () => {
        await RegisterPage.open();
        let value = Math.floor(Math.random() * 100);
        await RegisterPage.register('M', 'Tom', 'Ford', 'tomford'+value+'@test.com', '123456');
        await RegisterResultPage.open();
        expect(RegisterResultPage.messageAlert).toHaveValue('Your registration completedxyz');
    });
});

