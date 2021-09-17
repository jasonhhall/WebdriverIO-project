const { config } = require('./wdio.shared.conf')
const allure = require('allure-commandline')
const path = require('path')



exports.config = {
    ...config,
    ...{
      services: ['selenium-standalone', 'docker'],
      dockerOptions: {
        image: 'selenium/standalone-chrome',
        healthCheck: 'http://localhost:4444',
        options: {
            p: ['4444:4444'],
            shmSize: '2g'
        }
    },
    
      capabilities: [
          {
            maxInstances: 5,
            browserName: 'chrome',
            'goog:chromeOptions': {
                //headless: true
            }
        },
        // {
        //   maxInstances: 5,
        //   browserName: 'firefox',
        //   "moz:firefoxOptions": {
        //     // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
        //     //args: ['-headless']
        //   }
        // },

        // {
        //   maxInstances: 5,
        //   browserName: 'safari',
        // },

      ],
      // define specific suites
    suites: {
      suiteA: [
          './test/specs/mySuite1.js',
          './test/specs/mySuite2.js'
      ],
      suiteB: [
        './test/specs/mySuite3.js',
        './test/specs/mySuite4.js'
    ],
      otherFeature: [
          // ...
      ]
  },
    }
}