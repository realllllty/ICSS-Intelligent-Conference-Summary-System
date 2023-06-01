<style scoped>
.example-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>音频库</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">音频库</ion-title>
        </ion-toolbar>
        <ion-toolbar>
          <ion-searchbar></ion-searchbar>
        </ion-toolbar>
      </ion-header>
      <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <dp></dp>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonHeader,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import dp from "../Content_display/dplibrary.vue";
export default {
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, dp },
  setup() {
    const handleRefresh = (CustomEvent) => {
      setTimeout(() => {
        CustomEvent.target.complete();
      }, 2000);
    };

    return { handleRefresh };
  },
};
</script>
