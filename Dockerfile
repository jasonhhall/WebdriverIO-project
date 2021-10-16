FROM twitchautomation/salesforce-cx-repo:latest
WORKDIR /usr/local/app/salesforce
COPY . .
RUN npm install