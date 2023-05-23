<template>
  <ion-app>
    <ion-router-outlet></ion-router-outlet>
  </ion-app>
</template>

<script lang="js">
import { IonApp, IonRouterOutlet } from '@ionic/vue';

import { defineComponent } from 'vue';

import App_bar from './components/App_bottom_bar.vue';

function isLoggedIn() {
  return false;
}

export default defineComponent({
  name: 'App',
  components: { IonApp, IonRouterOutlet },

  mounted() {
    if (isLoggedIn()) {
      this.$router.push('/app/home');
    }else {
      this.$router.push('/');
    }
  },
});
</script>
