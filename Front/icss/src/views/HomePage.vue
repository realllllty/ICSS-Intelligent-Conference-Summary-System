<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title align="center"> GatherGenius 集思</ion-title>
        <ion-progress-bar type="indeterminate"></ion-progress-bar>
      </ion-toolbar>
    </ion-header>

    <ion-content scroll-y="false">
      <ion-segment value="default" style="margin-top: 5%; width: 90%; left: 5%">
        <ion-segment-button value="default">
          <ion-label>OpenAI Whisper API</ion-label>
        </ion-segment-button>
        <ion-segment-button value="segment">
          <ion-label>ASRT Voice System</ion-label>
        </ion-segment-button>
      </ion-segment>
      <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <img src="../../assets/Login/bootup_logo.png" alt="logo" style="max-width: 100%; max-height: 80%; margin-bottom: 57.5%; filter: opacity(30%); brightness(250%); contrast(50%);">
      </div>
      <div class="float">
        <function_bar></function_bar>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import function_bar from "../components/Record.vue";
import axios from "axios";

export default {
  methods: {},
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    function_bar,
  },
  data() {
    return {
      voiceRecognitionText: '',
      gptSummary: '',
    }
  },
  async created() {
    // 获取语音识别文字
    const response1 = await axios.get('http://localhost:3000/voiceRecognition');
    this.voiceRecognitionText = response1.data.text;

    // 获取GPT的总结
    const response2 = await axios.get('http://localhost:3000/gptSummary');
    this.gptSummary = response2.data.text;
  }
};
</script>

<style scoped>
.float {
  width: 90%;
  height: 10%;
  position: fixed;
  bottom: 10%;
  right: 5%;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkslategray;
  box-shadow: 0 -5px 10px rgba(47, 26, 185, 0.08);
  margin-top: 5px;
}

.float2 {
  width: 90%;
  height: 35%;
  position: fixed;
  bottom: 22%;
  right: 5%;
  border-radius: 30px;
  overflow: hidden;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(47, 26, 185, 0.15);
}

.float3 {
  width: 90%;
  height: 33%;
  position: fixed;
  bottom: 59%;
  right: 5%;
  border-radius: 30px;
  overflow: scroll;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px;
  gap: 29px;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(47, 26, 185, 0.15);
  padding: 0px;
}

@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

.heartbeat {
  animation: heartbeat 1.5s ease-in-out infinite both;
}

ion-progress-bar {
  --progress-background: #228b22;
  --background: #a9cea9;
}

#music-library-2 {
  position: absolute;
  width: 50%;
  height: 50%;
  left: 25%;
  top: 25%;
}
</style>
