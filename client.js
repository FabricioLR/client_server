const net = require('net');
const client = require("socket.io-client")

const server = net.createServer((socket) => {
    const socket_ = client.io("https://client-server-0wuk.onrender.com/", {
        autoConnect: true
    });

    socket.on('data', (data) => {
        console.log("client_data ", data)
        socket_.emit("client_data", data)
    });

    socket_.on("server_data", (data) => {
        console.log("server_data ", data)
        socket.write(data);
    })

    socket.on('end', () => {
        console.log('Client disconnected');
    });

    socket.on('error', (err) => {
        console.error(`Socket error: ${err.message}`);
    });
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

server.on('error', (err) => {
    console.error(`Server error: ${err.message}`);
});