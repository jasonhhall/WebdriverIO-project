/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Basepage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`http://demowebshop.tricentis.com/${path}`)

   
    }

    // pageValidation (pageTitle){
    //     let currentTitle = $(document).attr('title');
    //     if( pageTitle != currentTitle){
    //         throw 'Page Vaildation failed';
    //     }
    //     else 
    //     console.log("The current page is "+currentTitle)
    // }
}
