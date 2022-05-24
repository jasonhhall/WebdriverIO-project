const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnGenderMale () { return $('#gender-male') }
    get btnGenderFemale () { return $('#gender-female') }
    get inputFirstName () { return $('#FirstName') }
    get inputLastName () { return $('#LastName') }
    get inputEmail () { return $('#Email') }
    get inputPassword () { return $('#Password') }
    get inputConfirmPassword () { return $('#ConfirmPassword') }
    get btnRegister () { return $('#register-button')}
    get message () {return $('div.page-body div.result')}
    get btnContinue () { return $('.register-continue-button') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async registerAccount (gender, firstName, lastName, email, password) {

        if(gender == 'M' || gender == 'm'){
            await this.btnGenderMale.click();
        }
        if(gender == 'F' || gender == 'f'){
            await this.btnGenderFemale.click();
        }
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputEmail.setValue(email);
        console.log(email);
        await this.inputPassword.setValue(password);
        await this.inputConfirmPassword.setValue(password);
        await this.btnRegister.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('register');
    }

    continue(){ btnContinue.click() }
    
}

module.exports = new RegisterPage();
