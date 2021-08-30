const Page = require('./page');

class LoginPage extends Page {

    get username () { return $('#Email') }
    get password () { return $('#Password') }
    get LoginBtn () { return $('.login-button') }
    get flash () { return $('div.message-error span') }
    get headerLinks () { return $$('#header a') }
    get customerInfo () { return $('div.header-links ul li:nth-child(1) a') }

    async open () {
        await super.open('login')
    }

    async login () {
        await this.LoginBtn.click()
    }

}

module.exports = new LoginPage();