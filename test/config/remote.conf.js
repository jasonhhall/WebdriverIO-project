const { config } = require('./wdio.shared.conf');

exports.config = {
    ...config,
    ...{
        //
        // ====================
        // Runner Configuration
        // ====================
        runner: 'local',
        hostname: 'localhost',
        port: 4444,
        path: '/',

        capabilities: [
            {
                maxInstances: 1,
                browserName: 'chrome',
                'goog:chromeOptions': {
                    args: [
                        '--no-sandbox',
                        '--disable-infobars',
                        '--headless',
                        '--disable-gpu',
                        '--window-size=1440,735'
                    ]

                }
            },
            // {
            //     browserName: 'firefox',
            //     'moz:firefoxOptions': {
            //         args: ['-headless']
            //     }
            // },
        ],
    }
}
