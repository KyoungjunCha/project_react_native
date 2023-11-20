// const { Socket } = require("socket.io")
const userController = require("../Controllers/user.controller")
const chatController = require('../Controllers/chat.controller');
// const { default: socket } = require("../../chatapp-client-master/src/server");

module.exports = function (io) {
    // emit , on 말하기 듣기 함수
    io.on("connection", async (socket) => {
        // 연결
        console.log("client is connected", socket.id);

        //로그인
        socket.on("login", async (userName, cb) => {
            //유저정보 저장
            //에러 try-catch
            try {
                const user = await userController.saveUser(userName, socket.id);
                const welcomeMessage = {
                    chat:`${user.name} is joined to this room`,
                    user: {id:null, name:"system"},
                };
                io.emit("message",welcomeMessage);
                cb({ ok: true, data: user })
            } catch (error) {
                cb({ ok: false, error: error.message });
            }
        })

        // 메시지 확인
        socket.on("sendMessage", async (message, cb) => {
            try {
                // 유저 찾기 socket.id
                const user = await userController.checkUser(socket.id)
                // 메시지 저장 (유저 매개변수)
                const newMessage = await chatController.saveChat(message, user);
                // 기존의 방법과 다름
                // 서버에 접속한 클라이언트들한테 전부 보내져야함
                // cb({ok:true,data:newMessage});
                io.emit("message", newMessage);
                cb({ ok: true });
            } catch (error) {
                cb({ok:false,error:error.message})
            }

        })

        // 연결 해제
        socket.on("disconnect", () => {
            console.log("user is disconnected");
        })
    })
}