const exp = require("constants");
const express = require("express");
const http = require("http");
const { Server } = require("ws");
const { sendAudioStream } = require("../services/asrtTpServ");

const app = express();
const server = http.createServer(app);

// 创建 WebSocket Server
const wss = new Server({ noServer: true });

// WebSocket 连接和消息处理
wss.on("connection", (socket) => {
  console.log("WebSocket 连接成功");

  socket.on("message", (message) => {
    console.log("接收到消息:", message);
    // 根据接收到的消息，调用 sendAudioStream 方法
    sendAudioStream(message);
  });

  socket.on("close", () => console.log("WebSocket 连接已关闭"));
});

// 创建 /record 路由的中间件函数,然后再app当中注册全局中间件
exports.handleRecordRoute = (req, res, next) => {
  if (req.url === "/record") {
    wss.handleUpgrade(req, res, res.socket, () => {});
  } else {
    next();
  }
};
