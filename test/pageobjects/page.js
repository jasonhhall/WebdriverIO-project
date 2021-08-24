module.exports = class Page {
    constructor() {
        this.title = 'My Page'
    }

    async open (path) {
        await browser.url("http://demowebshop.tricentis.com/"+path)
    }
}