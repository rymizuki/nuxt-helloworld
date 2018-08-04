FROM docker:18.06

RUN apk --update --no-cache add \
 build-base \
 curl \
 python \
 python-dev \
 py-pip \
 nodejs=8.9.3-r1 \
 yarn

RUN apk --update add tzdata \
 && cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
 && apk del tzdata

RUN rm -rf /var/cache/apk/*

RUN pip install --upgrade pip \
 && pip install --user --upgrade awscli \
 && pip install --user --upgrade aws-sam-cli

WORKDIR /app
COPY ./ /app

EXPOSE 3000

CMD [ "./bin/dev" ]
