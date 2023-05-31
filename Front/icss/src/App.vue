<template>
  <ion-app>
<router-view>
</router-view>

  </ion-app>
</template>

<script lang="js">
import {IonApp} from '@ionic/vue';

import {defineComponent} from 'vue';

function isLoggedIn() {
  // 检查是否存在一个token
  // const token = localStorage.getItem('token');
  // return token !== null && token !== undefined && token !== '';
  return true;
}


export default defineComponent({
  name: 'App',
  components: {IonApp},

  mounted() {
    if (isLoggedIn()) {
      this.$router.push('/app/home');
    }
  },
});
</script>
