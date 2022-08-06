
const Page = require('./page');
const allureReporter = require('@wdio/allure-reporter').default;

class LoginPage extends Page {
   
    get email() { return $('#Email') }
    get password() { return $('#Password') }
    get loginBtn() { return $("//input[contains(@class,'login-button')]") }

    async open() {
        allureReporter.addStep('Login');
        super.open('login');
        allureReporter.endStep('passed');
    };

    async getCustomerInfo(){
        return await super.customerInfo.getText();
    }

    async clickLogin() {
        await this.loginBtn.click()
     
    };
    async setEmailAddress(email) {
        await this.email.setValue(email);
    
    };
    async setPassword(userPassowrd) {
        await this.password.setValue(userPassowrd);
    };
    
}

module.exports = new LoginPage();