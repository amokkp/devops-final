FROM node:16.13-alpine

WORKDIR /app

COPY ./package*.json ./
RUN npm install
COPY src ./src
RUN npm run build
COPY . .

EXPOSE 3001
ENTRYPOINT ["npm", "run", "serve"]