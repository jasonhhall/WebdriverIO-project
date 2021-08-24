describe('Test API', () => {
    it('APi Test 1', () => {
        browser.url('https://restful-booker.herokuapp.com');
        browser.setupInterceptor(); // capture ajax calls
        browser.expectRequest('GET', '/auth', 200); // expect GET request to /api/foo with 200 statusCode
        
    });
    
});