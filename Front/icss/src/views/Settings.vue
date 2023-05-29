<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">My GatherGenius</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-avatar class="avatar">
        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </ion-avatar>

      <div class="username">
        PLACEHOLDER
      </div>

      <ion-item>
        <ion-label position="floating"><b>OpenAI Token</b></ion-label>
        <ion-input v-model="openaiToken" :clear-input="true"></ion-input>
      </ion-item>
      <ion-item :button="true" class="ABOUT">
        <ion-label><b>About</b></ion-label>
      </ion-item>
      <ion-item :button="true" class="key?">
        <ion-label>🔑</ion-label>
      </ion-item>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonAvatar, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import {defineComponent} from 'vue';

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonAvatar,
    IonLabel,
    IonInput
  },
  data() {
    return {
      openaiToken: ''
    }
  }
});


</script>

<style scoped>
ion-page {
  background-color: #fafafa; /* 更浅的背景色，给页面一个轻快的感觉 */
}

.avatar {
  margin-top: 130px;
  margin-left: 50%;
  margin-bottom: 70px;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  border-radius: 50%; /* 这将使头像呈圆形 */
  box-shadow: 0 0 10px rgba(0,0,0,0.1); /* 给头像添加阴影效果，使其更显眼 */
}

.username {
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
  margin-bottom: 90px;
  color: #333; /* 更改用户名的颜色，使其与背景形成对比 */
}

ion-title {
  color: #444; /* 更深的标题颜色 */
}

.ABOUT {

}
</style>


