describe('Ebay Product Search', ()=> {
    it('should open the main url and verify the title', () =>{
        browser.url('register');
        expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');
    });
});
