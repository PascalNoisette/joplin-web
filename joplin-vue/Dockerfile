# étape de build
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# étape de production
FROM nginx:stable-alpine as production-stage
RUN apk add jq
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["sh", "-c", "echo window._env_=`jq -n env`> /usr/share/nginx/html/js/env.config.js; nginx -g 'daemon off;'"]