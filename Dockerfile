FROM node:alpine
RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app
WORKDIR /usr/src/app
USER node
COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node . .

EXPOSE 3001
CMD ["node", "index.js"]