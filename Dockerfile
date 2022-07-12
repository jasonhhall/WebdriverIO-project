FROM huli/webdriverio

WORKDIR /app
ADD . /app

RUN npm install
