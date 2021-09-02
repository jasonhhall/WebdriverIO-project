FROM ianwalter/puppeteer:latest
WORKDIR /app
ADD . /WebdriverIO-project

RUN npm install

CMD npx wdio run ./test/config/wdio.local.conf.js