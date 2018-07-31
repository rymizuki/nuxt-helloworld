
FROM node:8.10.0-alpine

# FOR aws cli
COPY .aws /root/.aws

RUN apk --no-cache --update add curl \
 && apk --no-cache --update add python \
 && curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py \
 && python get-pip.py \
 && pip install awscli

# FOR serverless cli
RUN npm install -g serverless

WORKDIR /app

COPY . /app

RUN yarn install
RUN yarn build

CMD [ "yarn", "start" ]

EXPOSE 3000
