# ---- Development Stage ----
FROM node AS development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# ---- Production Stage ----
FROM node AS production

WORKDIR /app

COPY package*.json ./

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN npm install --production


COPY --from=development /app/dist ./dist


CMD ["node", "./dist/index.js"]
