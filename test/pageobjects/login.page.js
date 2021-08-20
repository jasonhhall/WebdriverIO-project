const BasePage = require('./base.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get inputEmail () { return $('#Email') }
    get inputPassword () { return $('#Password') }
    get btnLogin () { return $('.login-button') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
    
}

module.exports = new LoginPage();
