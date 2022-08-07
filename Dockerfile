FROM node:12.18.3-buster

# INSTALL LIBRARIES & FONTS 
RUN apt-get update && \
  apt-get install --no-install-recommends -y \
  libgtk2.0-0 \
  libgtk-3-0 \
  libnotify-dev \
  libgconf-2-4 \
  libgbm-dev \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  xauth \
  xvfb \
  fonts-arphic-bkai00mp \
  fonts-arphic-bsmi00lp \
  fonts-arphic-gbsn00lp \
  fonts-arphic-gkai00mp \
  fonts-arphic-ukai \
  fonts-arphic-uming \
  ttf-wqy-zenhei \
  ttf-wqy-microhei \
  xfonts-wqy \
  && rm -rf /var/lib/apt/lists/*

# INSTALL NPM 
RUN npm install -g npm@latest
RUN npm --version
# INSTALL YARN 
RUN npm install -g yarn@latest --force
RUN yarn --version

# ENVIRONMENT VARIABLES
# good colors for most applications
ENV TERM xterm
# avoid million NPM install messages
ENV npm_config_loglevel warn
# allow installing when the main user is root
ENV npm_config_unsafe_perm true

# Node libraries
RUN node -p process.versions

# INSTALL CHROME

# Chrome dependencies
RUN apt-get update
RUN apt-get install -y fonts-liberation libappindicator3-1 xdg-utils

 ENV CHROME_VERSION 87.0.4280.66
RUN wget -O /usr/src/google-chrome-stable_current_amd64.deb "http://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${CHROME_VERSION}-1_amd64.deb" && \
  dpkg -i /usr/src/google-chrome-stable_current_amd64.deb ; \
  apt-get install -f -y && \
  rm -f /usr/src/google-chrome-stable_current_amd64.deb
RUN google-chrome --version
# "fake" dbus address to prevent errors
# https://github.com/SeleniumHQ/docker-selenium/issues/87
ENV DBUS_SESSION_BUS_ADDRESS=/dev/null

# INSTALL PACKAGES
WORKDIR /usr/app
COPY . /usr/app
RUN npm install

# VERIFICATION

# ON RUNNING THE IMAGE THIS COMMAND WILL BE TRIGGERED BY DEFAULT
#  ENTRYPOINT ["npm", "run"]
#  CMD ["docker"]

# # # FROM ianwalter/puppeteer:latest
# # # WORKDIR /app
# # # ADD . /app

# # # RUN npm install

# # # CMD npm run remote
# # FROM node:12
# # RUN apt-get update && apt-get install -y openjdk-8-jdk

# # WORKDIR /app
# # ADD . /app

# # RUN npm install

# # The FROM instruction initializes a new build stage and sets the Base Image for subsequent instructions
# # alpine will serve as the base image
# FROM alpine

# # The LABEL instruction adds metadata to an image
# LABEL maintainer="madhank93"

# # The RUN instruction will execute any commands in a new layer on top of the current image and commit the results
# # apk is the package manager for alpine based images
# # using that installing necessary packages
# RUN apk --no-cache add \
#     build-base\
#     python3\
#     nodejs \
#     npm \
#     ffmpeg \
#     && npm install -g \
#     npm@6.14.9 \
#     # Clean up obsolete files:
#     && rm -rf \
#     /tmp/* \
#     /root/.npm

# # add a simple script that can auto-detect the appropriate JAVA_HOME value
# # based on whether the JDK or only the JRE is installed
# FROM alpine:3.5

# LABEL maintainer "wrlennon"

# # Java Version
# ENV JAVA_VERSION_MAJOR 8
# ENV JAVA_VERSION_MINOR 121
# ENV JAVA_VERSION_BUILD 13
# ENV JAVA_PACKAGE       jdk
# ENV JAVA_SHA256_SUM    97e30203f1aef324a07c94d9d078f5d19bb6c50e638e4492722debca588210bc
# ENV JAVA_URL_ELEMENT   e9e7ea248e2c4826b92b3f075a80e441

# # Update curl
# # Install glibc-2.21 which is a hard dependency of Java 8. and see https://github.com/mesosphere/kubernetes-mesos/issues/801
# # Download the Oracle JRE using tricks in this SO article.
# # Remove spurious folders not needed (like jre/lib).
# # Set the proper environment variables.

# RUN apk add --update curl &&\
# 	curl -Ls https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.21-r2/glibc-2.21-r2.apk > /tmp/glibc-2.21-r2.apk &&\
# 	apk add --allow-untrusted /tmp/glibc-2.21-r2.apk &&\
# 	mkdir -p /opt &&\
# 	curl -jkLH "Cookie: oraclelicense=accept-securebackup-cookie" -o java.tar.gz\
#     http://download.oracle.com/otn-pub/java/jdk/${JAVA_VERSION_MAJOR}u${JAVA_VERSION_MINOR}-b${JAVA_VERSION_BUILD}/${JAVA_URL_ELEMENT}/${JAVA_PACKAGE}-${JAVA_VERSION_MAJOR}u${JAVA_VERSION_MINOR}-linux-x64.tar.gz &&\
# 	echo "$JAVA_SHA256_SUM  java.tar.gz" | sha256sum -c - &&\
# 	gunzip -c java.tar.gz | tar -xf - -C /opt && rm -f java.tar.gz &&\
# 	ln -s /opt/jdk1.${JAVA_VERSION_MAJOR}.0_${JAVA_VERSION_MINOR} /opt/jdk &&\
# 	rm -rf /opt/jdk/*src.zip \
#          /opt/jdk/lib/missioncontrol \
#          /opt/jdk/lib/visualvm \
#          /opt/jdk/lib/*javafx* \
#          /opt/jdk/jre/lib/plugin.jar \
#          /opt/jdk/jre/lib/ext/jfxrt.jar \
#          /opt/jdk/jre/bin/javaws \
#          /opt/jdk/jre/lib/javaws.jar \
#          /opt/jdk/jre/lib/desktop \
#          /opt/jdk/jre/plugin \
#          /opt/jdk/jre/lib/deploy* \
#          /opt/jdk/jre/lib/*javafx* \
#          /opt/jdk/jre/lib/*jfx* \
#          /opt/jdk/jre/lib/amd64/libdecora_sse.so \
#          /opt/jdk/jre/lib/amd64/libprism_*.so \
#          /opt/jdk/jre/lib/amd64/libfxplugins.so \
#          /opt/jdk/jre/lib/amd64/libglass.so \
#          /opt/jdk/jre/lib/amd64/libgstreamer-lite.so \
#          /opt/jdk/jre/lib/amd64/libjavafx*.so \
#          /opt/jdk/jre/lib/amd64/libjfx*.so &&\
#   apk del curl &&\
#   rm -rf /var/cache/apk/*

# # Set environment
# ENV JAVA_HOME /opt/jdk
# ENV PATH ${PATH}:${JAVA_HOME}/bin

# # The WORKDIR instruction sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD 
# # instructions that follow it in the Dockerfile.
# WORKDIR /usr/lib/wdio

# # The COPY instruction copies new files or directories from <src> and 
# # adds them to the filesystem of the container at the path <dest>.
# COPY package.json /usr/lib/wdio


# # Installing all the dependecies present in the package.json file
# RUN npm install \
#     # Clean up obsolete files:
#     && rm -rf \
#     /tmp/* \
#     /root/.npm

# # Copying all the source code into the folder
# COPY . /usr/lib/wdio

# RUN npm install

# # An ENTRYPOINT allows you to configure a container that will run as an executable.
# ENTRYPOINT [ "npm", "run" ]

# # The main purpose of a CMD is to provide default commands to an executing container
# CMD ["docker"]