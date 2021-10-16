
FROM twitchautomation/salesforce-cx-repo:latest
RUN mkdir -p /usr/local/app/salesforce
WORKDIR /usr/local/app/salesforce
COPY . .
RUN npm install

FROM ubuntu:16.04
# install packages

RUN apt-get update && \
    apt-get install -y curl \
    wget \
    openjdk-8-jdk
ENV JAVA_HOME=/usr/bin/java
RUN export JAVA_HOME