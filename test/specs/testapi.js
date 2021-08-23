describe('Test API', () => {
    it('APi Test 1', () => {
        browser.url('http://foo.bar');
        browser.setupInterceptor(); // capture ajax calls
        browser.expectRequest('GET', '/api/foo', 200); // expect GET request to /api/foo with 200 statusCode
        
    });
    
});