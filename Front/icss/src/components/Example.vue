<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="float">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="mic" />
        </ion-tab-button>

        <ion-tab-button tab="library" href="/library">
          <ion-icon :icon="library" />
        </ion-tab-button>

        <ion-tab-button tab="about" href="/about">
          <ion-icon :icon="cog" />
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
<style scoped>
.float {
  width: 90%;
  position: relative;
  transform: translate(5%, -30%);
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0px -5px 10px rgba(47, 26, 185, 0.08);
}
</style>
