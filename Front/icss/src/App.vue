<template>
  <ion-app>
    <ion-router-outlet></ion-router-outlet>
  </ion-app>
</template>

<script lang="js">
import { IonApp, IonRouterOutlet } from '@ionic/vue';

import { defineComponent } from 'vue';

import App_bar from './components/App_bottom_bar.vue';

export default defineComponent({
  name: 'App',
  components: { IonApp, IonRouterOutlet },
});
</script>
