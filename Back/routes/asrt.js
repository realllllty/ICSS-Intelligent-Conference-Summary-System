// socket.js

const { Server } = require("socket.io");
// const { sendAudioStream } = require("../services/asrtTpServ");

module.exports = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("websocket connected");

    socket.emit("test", "test");

    socket.emit("asrt");

    socket.on("record", (message) => {
      console.log("received messsage");
      console.log(message);
      // sendAudioStream(message);
    });
    socket.on("disconnect", () => {
      console.log("disconnected");
    });
    socket.on("error", (err) => {
      if (err && err.message === "unauthorized event") {
        console.log("error");
        socket.disconnect();
      }
    });
  });
};

// module.exports = (server) => {
//   const io = new Server(server, {
//     cors: {
//       origin: "*", // 允许访问的域名
//       methods: ["GET", "POST"], // 允许的 HTTP 方法
//     },
//   });
//   console.log("receive");
//   io.on("connection", (socket) => {
//     console.log("websocket connected");
//   });
//   io.emit("asrt");
//   io.on("record", (message) => {
//     console.log("received messsage");
//     console.log(message);
//   });
// };

// const exp = require("constants");
// const express = require("express");
// const http = require("http");

// // const { sendAudioStream } = require("../services/asrtTpServ");

// const app = express();
// const server = http.createServer(app);

// // 创建 WebSocket Server
// const wss = new Server({ noServer: true });

// // WebSocket 连接和消息处理
// wss.on("connection", (socket) => {
//   console.log("WebSocket 连接成功");
//   wss.send("asrt");
//   socket.on("record", (message) => {
//     console.log("接收到消息:", message);
//     // 根据接收到的消息，调用 sendAudioStream 方法
//     // sendAudioStream(message);
//   });

//   socket.on("close", () => console.log("WebSocket 连接已关闭"));
// });

// // 创建 /record 路由的中间件函数,然后再app当中注册全局中间件
// exports.handleRecordRoute = (req, res, next) => {
//   if (req.url === "/record") {
//     wss.handleUpgrade(req, req.socket, req.headers, (ws) => {
//       wss.emit("connection", ws, req);
//     });
//   } else {
//     next();
//   }
// };
