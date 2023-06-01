<template>
  <ion-card
    v-for="(msg, index) in dpMsg.list"
    :key="index"
    @click="changeroute(index)"
    v-wave
  >
    <ion-grid>
      <ion-row>
        <ion-col size="auto" style="width: 80%">
          <ion-card-content>
            <div>
              {{ msg.Gpt }}
            </div>
            <div>
              {{ msg.Recog }}
            </div>
          </ion-card-content>
        </ion-col>
        <ion-col>
          <div>{{ msg.time }}</div>
        </ion-col>
      </ion-row>
    </ion-grid>
    <ion-fab>
      <ion-fab-button>
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-card>
</template>

<script setup>
import { IonFab, IonFabButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
import { useRouter } from "vue-router";
import { onMounted, reactive } from "vue";
import axios from "axios";
const router = useRouter();
function changeroute(index) {
  console.log("go to the details");
  setTimeout(() => {
    router.push(`/app/detail/${index}`);
  }, 200);
}
let dpMsg = reactive({ list: [] });
onMounted(() => {
  axios
    .get("http://localhost:3000/lib")
    .then((response) => {
      dpMsg.list = response.data.result;
      console.log(dpMsg);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
