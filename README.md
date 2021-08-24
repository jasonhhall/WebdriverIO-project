# WebdriverIO-project



### Run Test


You can start your test suite by using the run command and pointing to the WebdriverIO config
```js
npx wdio run ./wdio.conf.js    
```
If you like to run specific test files you can add a --spec parameter:
```js
npx wdio run ./wdio.conf.js --spec login.spec.js   
```
Or define suites in your config file and run just the test files defined by in a suite:
```js
npx wdio run ./wdio.conf.js --suite login  
```
