FROM nginx:stable-alpine as base
EXPOSE 80
EXPOSE 443
COPY build/ /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]
