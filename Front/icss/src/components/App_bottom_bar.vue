<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="float">
        <ion-tab-button href="/home" tab="home">
          <ion-icon :icon="micOutline()"/>
        </ion-tab-button>

        <ion-tab-button href="/library" tab="library">
          <ion-icon :icon="libraryOutline()"/>
        </ion-tab-button>

        <ion-tab-button href="/about" tab="about">
          <ion-icon :icon="informationCircleOutline()"/>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="js">
import {IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs,} from "@ionic/vue";

import {cog, informationCircleOutline, library, libraryOutline, mic, micOutline, search} from "ionicons/icons";

export default {
  methods: {
    micOutline() {
      return micOutline
    },
    libraryOutline() {
      return libraryOutline
    },
    informationCircleOutline() {
      return informationCircleOutline
    },
  },
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
