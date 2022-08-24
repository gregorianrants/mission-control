import path from "path";

import express from 'express'
const app = express();
import http from 'http'
const server = http.createServer(app);
import {Server} from 'socket.io'
const io = new Server(server);

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const staticPath = path.join(__dirname, "../client/build")
console.log(staticPath)


app.use(express.static(staticPath));

app.get("/*", function (req, res) {
    const thePath = path.join(__dirname, "../client/build", "index.html")
    console.log(thePath)
    res.sendFile(thePath);
});

io.on('connection', (socket) => {
    socket.on('ping',()=>{
        console.log('we got a ping')
        socket.emit('pong')
    })
});

io.on('ping',(socket)=>{

})

server.listen(3000, () => {
    console.log('listening on *:3000');
});