FROM skozo/webdriverio-chrome-headless
WORKDIR /usr/local/app
COPY . .
RUN npm i
CMD [ "/usr/local/app/node_modules/.bin/wdio ./usr/local/app/test/config/wdio.local.conf.js" ]