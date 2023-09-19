const net = require("net");

const server = net.createServer();

server.on("connection", (socket) => {
  socket.on("data", (data) => {
    console.log("mensaje recibido desde el cliente: " + data);
    socket.write(`${Date.now()} hola facu grupo Tomi Juli Joaqui`);
  });

  socket.on("close", () => {
    console.log("Comunicacion finalizada");
  });

  socket.on("error", (err) => {
    console.log(err.message);
  });
});

server.listen(5000, () => {
  console.log("Servidor esta escuchando en el puerto", server.address().port);
});