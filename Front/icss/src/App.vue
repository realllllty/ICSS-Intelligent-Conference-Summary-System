<template>
  <ion-app>
    <ion-router-outlet></ion-router-outlet>
  </ion-app>
</template>

<script lang="js">
import {IonApp, IonRouterOutlet} from '@ionic/vue';

import {defineComponent} from 'vue';

function isLoggedIn() {
  // 检查是否存在一个token
  const token = localStorage.getItem('token');
  return token !== null && token !== undefined && token !== '';
}


export default defineComponent({
  name: 'App',
  components: {IonApp, IonRouterOutlet},

  mounted() {
    if (isLoggedIn()) {
      this.$router.push('/app/home');
    }
  },
});
</script>
