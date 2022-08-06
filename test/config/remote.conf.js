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
                browserName: 'chrome',
                'goog:chromeOptions': {
                    args: ['--no-sandbox',
                        '--headless',
                        '--disable-infobars',
                        '--disable-gpu',]
                }
            },
            {
                browserName: 'firefox',
                'moz:firefoxOptions': {
                    args: ['-headless']
                }
            },
        ],
    }
}
