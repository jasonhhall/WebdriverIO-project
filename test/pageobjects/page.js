module.exports = class Page {

    get register() { return $("div.header-links a[href='/register']") };
    get login() { return $("div.header-links a[href='/login']") };
    get cart() { return $("div.header-links a[href='/cart']") };
    get wish() { return $("div.header-links a[href='/wishlist']") };
    get logout() { return $("div.header-links a[href='/logout']") };
    get customerInfo() { return $("div.header-links a[href='/customer/info'") };
    get books() { return $("div.header-menu a[href='/books']") };
    get computers() { return $("div.header-menu a[href='/computers']") };
    get electronics() { return $("div.header-menu a[href='/electronics']") };
    get apparel() { return $("div.header-menu a[href='/apparel-shoes'']") };
    get downloads() { return $("div.header-menu a[href='/digital-downloads") };
    get jewelry() { return $("div.header-menu a[href='/jewelry']") };
    get giftcard() { return $("div.header-menu a[href='/gift-cards']") };

    async clickRegisterLink() { await this.register.click(); }
    async clickLoginLink() { await his.login,click(); }
    async clickLogoutLink() { await this.logout.click(); };
    async clickShoppingCartLink() { await this.cart.click(); };
    async clickWishlistLink() {await this.wish.click(); };
    async clickCustomerAccount() { await this.customerInfo.click(); };
    async clickBooksMenu() { await this.books.click(); };
    async clickComputersMenu() { await this.computers.click(); };
    async clickElectronicsMenu() { await this.electronics.click(); };
    async clickApparelShoesMenu() { await this.apparel.click(); };
    async clickDigitalDownloadsMenu() { await this.downloads.click(); };
    async clickJewelryMenu() { await this.jewelry.click(); };
    async clickGiftCardsMenu() { await this.giftcard.click(); };
  
    async open (path) {
        await browser.url(path)
    }
}