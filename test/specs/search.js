describe('Ebay Product Search', ()=> {
    it('should open the main url and verify the title', () =>{
        browser.url('https//www/ebay.com/');
        expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');
    });
});
