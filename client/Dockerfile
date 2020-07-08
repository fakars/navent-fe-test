FROM node:12.14.0-alpine3.11

RUN mkdir -p /app/client

WORKDIR /app/client

COPY package.json /app/client
COPY yarn.lock /app/client

RUN yarn install

COPY . /app/client

CMD ["yarn", "start"]