<template>
  <ion-button class="heartbeat_left_1" fill="clear">
    <ion-icon slot="icon-only" :icon="heartbeat()"></ion-icon>
  </ion-button>

  <ion-button id="back_button_Left_2" fill="clear">
    <ion-icon slot="icon-only" :icon="Back()"></ion-icon>
  </ion-button>

  <ion-button id="record_button_left_3" fill="clear" @click="toggleRecording">
    <ion-icon slot="icon-only" :icon="record()"></ion-icon>
  </ion-button>

  <ion-button id="forward_button_left_4" fill="clear">
    <ion-icon slot="icon-only" :icon="forward()"></ion-icon>
  </ion-button>

  <ion-button class="repeaticon_left_5" fill="clear">
    <ion-icon slot="icon-only" :icon="repeaticon()"></ion-icon>
  </ion-button>
</template>

<script setup>
import { onUnmounted, ref } from "vue";

function heartbeat() {
  return "../../assets/player/music-library-2.svg";
}

function Back() {
  return "../../assets/player/Frame 34087.svg";
}

function record() {
  if (!isRecording.value) {
    return "../../assets/player/Record.svg";
  } else {
    return "../../assets/player/Stop.svg";
  }
}

function forward() {
  return "../../assets/player/Frame 34086.svg";
}

function repeaticon() {
  return "../../assets/player/repeate-one.svg";
}

import Recorder from "js-audio-recorder";
import io from "socket.io-client";
const isRecording = ref(false);
const mediaRecorder = ref(null);
// const socket = ref(null);
let voice_stream = ref(null);
let socket = null;
let iasrtsend = null;

function toggleRecording() {
  if (isRecording.value === false) {
    isRecording.value = true; //开始录音,改变按钮状态
    startRecording();
  } else {
    isRecording.value = false; //停止录音，改变按钮状态
    stopRecording();
  }
}

let recorder = new Recorder({
  sampleBits: 8, // 采样位数，支持 8 或 16，默认是16
  sampleRate: 11025, // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，
  numChannels: 1, // 声道，支持 1 或 2， 默认是1
  // compiling: false,(0.x版本中生效,1.x增加中)  // 是否边录边转换，默认是false
  compiling: true,
});

function startRecording() {
  console.log("recordButton clicked");
  if (iasrtsend) clearInterval(iasrtsend);
  recorder.start().then(
    () => {
      // 开始录音
      useWebSocket();
    },
    (error) => {
      // 出错了
      console.log(`出错了`);
    }
  );
}

import axios from "axios";
function stopRecording() {
  console.log("stopButton clicked");
  const blob = recorder.getWAVBlob(); // 获取wav格式音频数据
  // 此处获取到blob对象后需要设置fileName满足当前项目上传需求，其它项目可直接传把blob作为file塞入formData
  const newbolb = new Blob([blob], { type: "audio/wav" });
  const fileOfBlob = new File([newbolb], new Date().getTime() + ".wav");
  // 创建一个新的 FormData 对象
  let formData = new FormData();

  // 把文件添加到 FormData 对象中
  formData.append("file", fileOfBlob);
  // 使用 axios 发送文件
  axios
    .post("http://localhost:3000/whisper", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  recorder.stop();
  if (socket) {
    socket.disconnect();
    socket = null;
  }
  clearInterval(iasrtsend);
}

function useWebSocket() {
  // console.log(recorder.getNextData())
  // ws = ws.binaryType = "arraybuffer"; //传输的是 ArrayBuffer 类型的数据
  if (socket) {
    socket.disconnect();
    socket = null;
  }
  socket = io("http://localhost:3000"); // 在这里初始化socket
  socket.on("connect", () => {
    console.log(socket.id);
    console.log("Connected to the node.js ws server");
    socket.on("test", (msg) => {
      console.log(msg);
    });
    socket.on("asrt", async () => {
      console.log("asrt");
      iasrtsend = setInterval(() => {
        // 获取要发送的数据
        const sendData = recorder.getNextData();
        console.log(sendData);
        // 发送数据到所有连接的客户端
        socket.emit("record", sendData);
      }, 1000);
    });
  });

  socket.on("disconnect", (reason) => {
    console.log(reason);
  });
  onUnmounted(() => {
    clearInterval(iasrtsend);
  });
}
</script>

<style scoped>
#record_button_left_3 {
  font-size: 150%;
  --padding-start: 10px;
  --padding-end: 10px;
}

#back_button_Left_2 {
  font-size: 170%;
  --padding-start: 10px;
  --padding-end: 10px;
}

#forward_button_left_4 {
  font-size: 170%;
  --padding-start: 10px;
  --padding-end: 10px;
}
</style>
