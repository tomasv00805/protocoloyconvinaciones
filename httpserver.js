const net = require('net');

// Crear un servidor TCP
const server = net.createServer((socket) => {
  // Se ejecutará cada vez que un cliente se conecte
  console.log('Cliente conectado.');

  // Manejar datos recibidos desde el cliente
  socket.on('data', (data) => {
    console.log(`Datos recibidos del cliente: ${data}`);
    
    // Puedes enviar datos de vuelta al cliente
    socket.write(`${Date.now()} hola facu grupo Tomi Juli Joaqui`);
  });

  // Manejar el evento cuando el cliente se desconecta
  socket.on('end', () => {
    console.log('Cliente desconectado.');
  });
});

// Escuchar en un puerto específico
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor TCP escuchando en el puerto ${PORT}`);
});

