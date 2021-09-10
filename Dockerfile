FROM skozo/webdriverio-chrome-headless
WORKDIR /usr/local/app
COPY . .
RUN npm install
