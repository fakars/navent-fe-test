FROM node:12.14.0-alpine3.11

RUN mkdir -p /app/server

WORKDIR /app/server

COPY package.json /app/server
COPY yarn.lock /app/server

RUN yarn install

COPY . /app/server

CMD ["yarn", "rest"]