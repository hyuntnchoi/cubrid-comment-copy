# # Stage 1
# FROM node:10-alpine as build-step

# RUN mkdir -p /app

# WORKDIR /app

# COPY package.json /app

# RUN npm install

# COPY . /app

# RUN npm run build --prod

# # Stage 2

# FROM nginx:1.17.1-alpine

# COPY --from=build-step /app/dist/cubrid-comment-copy /usr/share/nginx/html

FROM node:12-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 8080
CMD [ "node", "server.js" ]