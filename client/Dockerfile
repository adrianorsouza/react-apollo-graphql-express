FROM node:lts AS development

WORKDIR /var/src/app

COPY package.json .

RUN npm install

COPY . .

FROM development AS builder

RUN npm run build

FROM nginx:latest

COPY --from=builder /var/src/app/build /usr/share/nginx/html
