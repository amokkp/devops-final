FROM node:16.13-alpine

WORKDIR /app

COPY src/package*.json ./
RUN npm install

COPY . .

EXPOSE 3002
ENTRYPOINT ["npm", "run", "start"]