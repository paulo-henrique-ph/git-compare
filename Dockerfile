FROM nginx:stable-alpine as base
EXPOSE 80
EXPOSE 443

FROM node:lts-alpine as build
COPY src /app/src
COPY public /app/public
COPY package.json /app/
WORKDIR /app/
RUN npm install && \
  npm run build

FROM base as deploy
COPY --from=build  /app/build/ /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]
