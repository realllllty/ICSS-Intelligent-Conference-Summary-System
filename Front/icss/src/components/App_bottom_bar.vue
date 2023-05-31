<template>
  <ion-page>
    <div>
      <router-view></router-view>
      <ion-tab-bar slot="bottom" class="float">
        <ion-tab-button
          @click="cthome"
          tab="home"
          class="ripple-parent rectangle"
        >
          <ion-icon :icon="micOutline()" :class="getClass('/app/home')" />
          <ion-ripple-effect></ion-ripple-effect>
        </ion-tab-button>

        <ion-tab-button
          @click="ctlib"
          tab="library"
          class="ripple-parent rectangle"
        >
          <ion-icon
            :icon="libraryOutline()"
            :class="getClass('/app/library')"
          />
          <ion-ripple-effect></ion-ripple-effect>
        </ion-tab-button>

        <ion-tab-button
          @click="ctabout"
          tab="about"
          class="ripple-parent rectangle"
        >
          <ion-icon
            :icon="informationCircleOutline()"
            :class="getClass('/app/about')"
          />
          <ion-ripple-effect></ion-ripple-effect>
        </ion-tab-button>
      </ion-tab-bar>
    </div>
  </ion-page>
</template>

<script lang="js">
import {IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs,} from "@ionic/vue";

import {cog, informationCircleOutline, library, libraryOutline, mic, micOutline, search} from "ionicons/icons";

import { useRouter } from "vue-router";
export default {
  methods: {
    getClass(path){

      if(this.$route.path === path){
        return 'active';
      }
    },
    micOutline() {
      return micOutline
    },
    libraryOutline() {
      return libraryOutline
    },
    informationCircleOutline() {
      return informationCircleOutline
    },
    cthome(){
      this.router.push("/app/home")
    },
    ctabout(){
      this.router.push("/app/about")
    },
    ctlib(){
      this.router.push("/app/library")
    }
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
      router:useRouter(),
    };
  },
};
</script>
<style scoped>
.float {
  width: 90%;
  position: fixed;
  bottom: 0;
  transform: translate(5%, -30%);
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0px -5px 10px rgba(47, 26, 185, 0.08);
}
.active {
  color: rgba(47, 26, 185, 0.6);
}
</style>
