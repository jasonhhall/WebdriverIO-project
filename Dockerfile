FROM ianwalter/puppeteer:latest
WORKDIR /usr/local/app
COPY . .
RUN npm install