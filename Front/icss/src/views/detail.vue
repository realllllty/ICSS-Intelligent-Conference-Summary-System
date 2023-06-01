<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title>Detail</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <contentdisplay
        class="float3"
        :header="Summary"
        :content="dpMsg.list[id]?.Gpt"
      >
      </contentdisplay>

      <contentdisplay
        class="float2"
        :header="Recognition"
        :content="dpMsg.list[id]?.Recog"
      ></contentdisplay>

      <div class="float">
        <function_bar></function_bar>
      </div>
    </ion-content>
  </div>
</template>
<script setup>
import contentdisplay from "../components/contentdisplay.vue";
const Summary = "Summary";
const Recognition = "Recognition";
import { onMounted, reactive } from "vue";
import axios from "axios";
let dpMsg = reactive({ list: [] });
onMounted(() => {
  aget();
});
function aget() {
  axios
    .get("http://localhost:3000/lib")
    .then((response) => {
      dpMsg.list = response.data.result;
    })
    .catch((error) => {
      console.log(error);
    });
}
import { useRoute } from "vue-router";
const route = useRoute();
const id = route.params.id;
</script>
<style scoped>
.float2 {
  width: 90%;
  height: 40%;
  position: fixed;
  bottom: 15%;
  right: 5%;
  border-radius: 30px;
  overflow: hidden;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px;
  gap: 29px;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(47, 26, 185, 0.15);
}
.float3 {
  width: 90%;
  height: 35%;
  position: fixed;
  bottom: 56.5%;
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
</style>
