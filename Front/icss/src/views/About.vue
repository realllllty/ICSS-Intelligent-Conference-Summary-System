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
        <ion-title>设置</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">设置</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col> 登录 </ion-col>
          <ion-col>
            <ion-chip>
              <ion-avatar>
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </ion-avatar>
              <ion-label>Chip Avatar</ion-label>
            </ion-chip>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-list :inset="true" style="width: 100%">
            <ion-item>
              <ion-label>Pokémon Yellow</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Mega Man X</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>The Legend of Zelda</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Pac-Man</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Super Mario World</ion-label>
            </ion-item>
          </ion-list>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonItem,
  IonList,
  IonLabel,
} from "@ionic/vue";

export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonItem,
    IonLabel,
    IonList,
  },
};
</script>
