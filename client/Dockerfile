FROM node:16.13-alpine

WORKDIR /app

COPY ./package*.json ./
RUN npm install
COPY ./src ./
RUN npm run build
COPY .server.js .

EXPOSE 3001
ENTRYPOINT ["npm", "run", "serve"]