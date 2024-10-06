FROM node AS build

WORKDIR /client

COPY ./client/package*.json .

RUN npm install

COPY ./client .

RUN npm run build

FROM nginx 

COPY --from=build /client/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf