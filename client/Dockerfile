FROM node:18
WORKDIR /app
COPY client.js .
RUN npm init -y && npm install express axios
CMD ["node", "client.js"]
