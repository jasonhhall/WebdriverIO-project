const Basepage = require('./base.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SubPage extends Basepage {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('#flash') }
}

module.exports = new SubPage();
