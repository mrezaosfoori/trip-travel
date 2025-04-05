FROM node:21-alpine as builder

ARG REACT_APP_BASE_URL="https://devapi.vandawallet.com"

ARG REACT_APP_VERSION="1.0.74"

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build 

FROM nginx:stable

COPY --from=builder /app/build /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
