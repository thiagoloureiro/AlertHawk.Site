# Stage 1
FROM node:24 AS react-build
WORKDIR /app
COPY --chown=node:node package.json package-lock.json ./
USER node
RUN npm ci
COPY --chown=node:node . .
RUN npm run build

# Stage 2 - the production environment
FROM dhi.io/nginx:1

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["-g", "daemon off;"]