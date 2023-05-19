FROM node:lts-alpine

ADD . /backend/
WORKDIR /backend

RUN yarn

EXPOSE 3003
