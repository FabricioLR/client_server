const express = require('express')
const socketio = require("socket.io")
const http = require("http")
const cors = require("cors")
const net = require("net")

const app = express()
const server = http.createServer(app)
const io = new socketio.Server(server)

const PORT = process.env.PORT || 8000

app.use(cors())

app.get("/", (request, response) => {
    return response.status(200).send("server is running")
})

io.once("connection", (socket) => {
    user.id = socket.id

    const client = new net.Socket()

    client.connect(50755, '189.39.6.18')

    socket.on("client_data", (data) => {
        client.write(data)
    })

    client.on("data", (data) => {
        socket.emit("server_data", (data))
    })

    socket.once("disconnect", () => {
        return;
    });
});

server.listen(PORT, () => {
    console.log("Server is running")
})
