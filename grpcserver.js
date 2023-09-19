const grpc = require('grpc');
const calculatorProto = grpc.load('calculator.proto');
const server = new grpc.Server();

server.addService(calculatorProto.Calculator.service, {
  Add: (call, callback) => {
    const num1 = call.request.num1;
    const num2 = call.request.num2;
    const result = num1 + num2;
    callback(null, { result });
  },
});

const PORT = 50051;
server.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure());
console.log(`Servidor gRPC escuchando en el puerto ${PORT}`);
server.start();