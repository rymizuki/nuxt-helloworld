
FROM node:8.10.0-alpine

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

CMD [ "npm", "start" ]

EXPOSE 3000
