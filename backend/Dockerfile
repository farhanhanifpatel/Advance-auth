FROM node:18-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=farhan123

RUN mkdir -p backend

COPY . /backend


CMD  ["node", "/backend/index.js"]
