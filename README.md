# ICSS-Intelligent-Conference-Summary-System

# 项目简介&&原型

## 原型

### HomeScreen

![](https://matt-obstorage777-1313452829.cos.ap-shanghai.myqcloud.com/pic_store/20230418003855.png)

# 前端

采用 IONIC 进行跨平台开发

底部 bar 阴影颜色:品牌颜色 main

音频库卡片功能实现了:但是样式还需要微调(搜索功能 null:是全局搜索还是仅标题关键词?)

## 实现滑动效果

采用 BetterScroll 实现滑动相关功能

## 启动前端

- 安装 node/npm 相关依赖
- 安装 IONIC CLI: npm install -g @ionic/cli
- 运行项目: ionic serve

## 启动录音通过 recordRTC 返回服务器数据

on record.vue
recordrtc 文档:https://recordrtc.org/
// start the recording
startRecording: function() {},

// stop the recording
// getBlob inside callback function
stopRecording: function(blobURL) {},

# 后端

采用 Node.js 开发

## 语音识别模型

### 参考 API 文档

采用 grpc 协议实现
https://wiki.ailemon.net/docs/asrt-doc/asrt-doc-1dkgq9td5mvjj
![](https://matt-obstorage777-1313452829.cos.ap-shanghai.myqcloud.com/pic_store/202305202023668.png)
_估摸着 grpc 优势_

rpc 能够将服务封装起来(只需要提供函数接口),客户就能够像调用代码一样直接操作(不用管网络通信当中的事务).因此客户端没有服务端功能代码
![](https://matt-obstorage777-1313452829.cos.ap-shanghai.myqcloud.com/pic_store/202305202045440.png)

- 性能优势：gRPC 基于 HTTP/2 协议，比使用 HTTP/1.1 的传输性能更高。HTTP/2 支持多路复用(因为 2.0 使用的是二进制分帧传输非文本)，这意味着可以在单个 TCP 连接上同时传输多个独立的请求和响应。这有助于减少延迟，提高资源利用率和网速性能。多路复用能够允许再同一个 tcp 连接上同时传输多个请求和响应(减少了 tcp 连接的数量)

- 二进制协议：gRPC 使用 Protocol Buffers（Protobuf）进行数据序列化。与 JSON 相比，二进制协议在编码和解码速度以及数据存储方面更加高效。这就使得 gRPC 在传输大量数据时（例如音频和视频数据）表现得更加出色。
- 流式传输：gRPC 天然支持双向流式传输。这意味着客户端与服务器之间可以实时交换数据。通过将数据拆分为较小的块进行发送，不需要等待整个数据传输完成。这有助于减少延迟，特别是在实时场景中，如语音识别、视频处理等。普通的 HTTP 和 JSON 除非采取 WebSocket 等技术，不然很难实现低延迟的实时流式传输。

自动生成客户端和服务端代码：gRPC 框架允许你编写一次 Proto 文件，并通过 protobuf 编译器生成多种编程语言的客户端和服务端代码。这简化了跨语言和平台的开发过程。

# Problems and Solutions

# Others

- vscode 快速打开关闭终端快捷键 ctrl + `
