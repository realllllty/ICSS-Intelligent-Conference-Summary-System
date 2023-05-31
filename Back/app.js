const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user");
const { expressjwt: jwt } = require("express-jwt");
const { secretKey } = require("./config/index");
const joi = require("joi");
const setupSocketIO = require("./routes/asrt");
const http = require("http");
const { Server } = require("socket.io");
const whisper = require("./routes/whisper_route");

const app = express();
const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "*", // 允许访问的域名
//     methods: ["GET", "POST"], // 允许的 HTTP 方法
//   },
// });

app.use(express.urlencoded({ extended: true }));
//urlencoded:Express内置中间件,用于解析URL编码的请求体数据
//extended:true,表示可以解析复杂对象
//使用之后可以直接通过req.body直接访问请求体当中的数据
app.use(cors());
// app.use(
//   jwt({ secret: secretKey, algorithms: ["HS256"] }).unless({
//     path: [/^\/user/],
//   })
// );
app.use("/user", userRouter);
app.use("/whisper", whisper);
//定义错误处理中间件
app.use((err, req, res, next) => {
  if (err instanceof joi.ValidationError)
    return res.send({
      status: 400,
      msg: "请求参数不合法" + err.message,
    });
  if (err.name === "UnauthorziedError")
    return res.send({ status: 401, msg: "无效的token" });
  res.send({
    status: 500,
    msg: err.message,
  });
});

setupSocketIO(server); // 设置 socket.io
// io.on("connection", (socket) => {
//   console.log("a user connected");
// });

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
