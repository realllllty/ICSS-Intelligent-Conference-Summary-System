<template>
  <ion-button class="heartbeat_left_1" fill="clear">
    <ion-icon slot="icon-only" :icon="heartbeat()"></ion-icon>
  </ion-button>

  <ion-button id="back_button_Left_2" fill="clear">
    <ion-icon slot="icon-only" :icon="Back()"></ion-icon>
  </ion-button>

  <ion-button id="play_button_left_3" fill="clear" @click="toggleRecording">
    <ion-icon slot="icon-only" :icon="play()"></ion-icon>
  </ion-button>

  <ion-button id="forward_button_left_4" fill="clear">
    <ion-icon slot="icon-only" :icon="forward()"></ion-icon>
  </ion-button>

  <ion-button class="repeaticon_left_5" fill="clear">
    <ion-icon slot="icon-only" :icon="repeaticon()"></ion-icon>
  </ion-button>
</template>
<script setup>
function heartbeat() {
  return "../../assets/player/music-library-2.svg";
}
function Back() {
  return "../../assets/player/Frame 34087.svg";
}

function play() {
  return "../../assets/player/Group 5.svg";
}
function forward() {
  return "../../assets/player/Frame 34086.svg";
}
function repeaticon() {
  return "../../assets/player/repeate-one.svg";
}
import { ref } from "vue";
import RecordRTC from "recordrtc";

const isRecording = ref(false);
const mediaRecorder = ref(null);
const socket = ref(null);

async function toggleRecording() {
  if (!isRecording.value) {
    await startRecording();
  } else {
    stopRecording();
  }
  isRecording.value = !isRecording.value;
}

async function startRecording() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); //获取用户的音频媒体流
  //创建一个新的RecordRTC实例，将获取到的媒体流传递给它
  mediaRecorder.value = new RecordRTC(stream, {
    type: "audio",
    mimeType: "audio/webm",
    numberOfAudioChannels: 1,
    recorderType: RecordRTC.StereoAudioRecorder,
    desiredSampRate: 16000,
    checkForInactiveTracks: true,
    timeSlice: 1000, //每一秒触发一次ondataavailable回调

    // requires timeSlice above
    // returns blob via callback function(通过回调函数返回blob)
    ondataavailable: (blob) => {
      sendAudioData(blob);
    }, //定义一个回调函数,每次生成音频数据块blob的时候触发,并且将blob数据块交给sendAudioData函数发送
  });

  // 连接 WebSocket 服务器
  socket.value = new WebSocket("ws://localhost:3000");
  mediaRecorder.value.startRecording(); //API启动录制
}

function stopRecording() {
  mediaRecorder.value.stopRecording(async () => {
    socket.value.close();
    mediaRecorder.value = null;
  });
}

function sendAudioData(blob) {
  if (socket.value.readyState === WebSocket.OPEN) {
    socket.value.send(blob);
  }
}
</script>
<style scoped>
#play_button_left_3 {
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

#music-library-2 {
  position: absolute;
  width: 50%;
  height: 50%;
  left: 25%;
  top: 25%;
}
</style>
