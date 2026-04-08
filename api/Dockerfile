FROM node:18
WORKDIR /app
COPY api.js .
RUN npm init -y && npm install express
CMD ["node", "api.js"]
