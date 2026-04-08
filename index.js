const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Aplicación funcionando 🎉');
});

server.listen(3000, () => {
  console.log('Servidor en puerto 3000');
});
