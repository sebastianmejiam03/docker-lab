const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hola desde bind mount! 🚀');
});

server.listen(3000, () => {
  console.log('Servidor en puerto 3000');
});
