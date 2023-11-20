// 웹소켓 셋팅
const {createServer} = require("http")
const app = require("./app")
const {Server} = require("socket.io")
require("dotenv").config();

const httpServer = createServer(app)
const io = new Server(httpServer, {
    cors:{
        origin:"http://localhost:3000"
    }
})
// io 기능이 많아 따로 만듬 웹소켓 기능들
require("./utils/io")(io);
httpServer.listen(process.env.PORT,()=>{
    console.log("server listening on port",process.env.PORT);
})