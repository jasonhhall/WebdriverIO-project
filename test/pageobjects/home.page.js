const BasePage = require('./base.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get userEmailAddrees () { return $('div.header-links li:nth-child(1)>a') }
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // async login (email, password) {
    //     await this.inputEmail.setValue(email);
    //     await this.inputPassword.setValue(password);
    //     await this.btnLogin.click();
    // }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
    
}

module.exports = new HomePage();
