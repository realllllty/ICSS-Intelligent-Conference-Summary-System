const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = "../proto/asrt.proto"; // 编译 .proto 文件

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const myProto = grpc.loadPackageDefinition(packageDefinition).asrt;

console.log("init client");

// const grpcClient = new MyService(
//   "localhost:50051",
//   grpc.credentials.createInsecure()
// ); // 定义 gRPC 客户端

const grpcClient = new myProto.AsrtGrpcService(
  "192.168.31.181:20001",
  grpc.credentials.createInsecure() //链接选项:使用不安全的链接方式进行通信
);

const audioStream = grpcClient.Stream();

//----------处理服务端提供的服务-----------------
audioStream.on("data", (response) => {
  // 处理从 gRPC 端过来的数据
  //返回音频识别信息
  console.log("connect");
  console.log(response);
});

audioStream.on("end", () => {
  // 处理 gRPC 端的结束信号
  console.log("Stream ended");
});

//----------发送语音流到服务端-----------------
// 获取音频流并通过 grpc 客户端发送出去
function sendAudioStream(audioData) {
  const speechRequest = {
    audioData: audioData,
    // 提供其他所需的 SpeechRequest 字段
  };

  audioStream.write(speechRequest);
}

//暴露自身方法
module.exports = { sendAudioStream: sendAudioStream };
