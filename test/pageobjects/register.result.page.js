const BasePage = require('./base.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterResultPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get registResult () { return $('div.result') }
    get btnContinue () { return $('.register-continue-button') }
    get messageAlert () { return $('div.result')}
   

    /**
     * 
     *
     */
  
    
    

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('registerresult/1');
    }
    
}

module.exports = new RegisterResultPage();
