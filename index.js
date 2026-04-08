const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hola desde mi imagen Docker 🚀");
});

server.listen(3000, () => {
  console.log("Servidor en puerto 3000");
});
