console.log("client script");

// Create WebSocket connection.
const socket = io("ws://localhost:1337");

// Connection opened
socket.on("connect", function (event) {
    console.log("Socket Connected");
});

// Listen for messages
socket.on("welcome", function (data) {
    console.log(data);
    document.getElementById("messageDiv").innerHTML = data;
});
socket.on("tick", function (data) {
    document.getElementById("messageDiv").innerHTML = data;
});