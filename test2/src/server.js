// server.js 파일에서
const { io } = require("socket.io-client");
const socket = io("http://localhost:5001");

module.exports = socket;


