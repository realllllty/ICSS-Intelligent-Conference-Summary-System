<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="mic" />
          <ion-label>拾取声音</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="library" href="/library">
          <ion-icon :icon="library" />
          <ion-label>会议库</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/search">
          <ion-icon :icon="search" />
          <ion-label>Search</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="about" href="/about">
          <ion-icon :icon="cog" />
          <ion-label>关于</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="js">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from "@ionic/vue";

import { mic, cog, library, search } from "ionicons/icons";

export default {
  components: {
    IonPage,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonIcon,
  },
  data() {
    return {
      mic,
      cog,
      library,
      search,
    };
  },
};
</script>
