FROM ianwalter/puppeteer:latest
WORKDIR /app
ADD . /app

RUN npm install

CMD npm run remote