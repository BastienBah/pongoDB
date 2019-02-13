console.log('starting pongodb server');

const net = require('net');
const Server = require('socket.io');

class SocketServer {

    constructor(){
        // On crée un serveur de socket
        this.server = new Server(1337);
        this.server.on("connect",this.newConnectionHandler);
    
        // On lance un message à toutes les connections
        setInterval(this.echoTime, 1000);

        this.testConnection();
    };

    newConnectionHandler(socket){
        console.log("client connected ");
        socket.emit('welcome','welcome, you are connected to this websocket server');     
    }

    echoTime() {
        // let date = new Date();
        // let dateString = date.getHours() + "h" + date.getMinutes()+"m"+date.getSeconds()+"s";
        // SocketServer.server.sockets.emit("tick","Il est " + dateString);
    }

    testConnection(){
        let client = require("socket.io-client");
        let socket = client("ws://localhost:1337");
        socket.on("welcome",(data)=>console.log(data));
        socket.on("tick",(data)=>console.log(data));
        
    }

}

const server = new SocketServer();