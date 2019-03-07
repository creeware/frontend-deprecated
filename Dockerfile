# Latest version of Erlang-based Elixir installation: https://hub.docker.com/_/elixir/
FROM node:11.4-alpine

LABEL maintainer="Murat Eksi"

# Add bash to the image
RUN apk add --update bash
# Add inotify to the image
RUN apk add --update inotify-tools
# Add node to the image
RUN apk add --update nodejs yarn

RUN mkdir -p app
WORKDIR /app

COPY . ./app
