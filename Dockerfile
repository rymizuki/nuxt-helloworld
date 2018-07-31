FROM node:8.10.0-alpine

WORKDIR /app

COPY . /app

RUN yarn install
RUN yarn build

CMD [ "yarn", "start" ]

EXPOSE 3000
