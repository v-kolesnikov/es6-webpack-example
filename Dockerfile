FROM node:6.3.1

RUN mkdir /usr/src/es6_webpack_example
WORKDIR /usr/src/es6_webpack_example
ADD ./package.json /usr/src/es6_webpack_example
RUN npm install
