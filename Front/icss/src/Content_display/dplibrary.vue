<template>
  <ion-card v-for="(msg, index) in dpMsg" @click="changeroute(index)" v-wave>
    <ion-grid>
      <ion-row>
        <ion-col size="auto" style="width: 80%">
          <ion-card-header>
            <ion-card-title>{{ msg.title }}</ion-card-title>
            <!-- <ion-card-subtitle>
              {{ `About: ${msg.keywords[0]} ${msg.keywords[1]}` }}
              <br />
              {{ msg.time }}
            </ion-card-subtitle> -->
          </ion-card-header>

          <ion-card-content>
            <div>
              {{ `About: ${msg.keywords[0]} ${msg.keywords[1]}` }}
              <br />
              {{ msg.time }}
            </div>
            Here's a small text description for the card content. Nothing more,
            nothing less.
          </ion-card-content>
        </ion-col>
        <ion-col>
          <div>{{ msg.length }}</div>
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

<script setup lang="ts">
import { dpMsg } from "./dpfiles";
import { IonFab, IonFabButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
import { useRouter } from "vue-router";
const router = useRouter();
function changeroute(index) {
  console.log("go to the details");
  setTimeout(() => {
    router.push(`/app/detail/${index}`);
  }, 200);
}
</script>
