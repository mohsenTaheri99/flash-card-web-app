FROM node

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm" , "run" , "dev" ,"--" , "--host" ]