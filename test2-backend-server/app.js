// db연결
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
const app = express();
// const http = require("http");
// const WebSocket = require("ws");
// const wss = new WebSocket.Server({server});
// const port = 3001;

app.use(cors());

mongoose.connect(process.env.DB, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
}).then(() => console.log("Connected to the database"));

module.exports = app;
