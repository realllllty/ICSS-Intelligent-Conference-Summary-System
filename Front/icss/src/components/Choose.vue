<script setup>
import {IonPage} from '@ionic/vue';
</script>

<template>
  <ion-page>
    <ion-content>
      <ion-card class="Login_Page_Card">
        <img alt="logo" class="Login_Page_Card_Logo" src="../../assets/Login/bootup_logo.png"/>
        <ion-card-header>
          <ion-card-title class="Login_Page_Card_Title">Welcome to GatherGenius!</ion-card-title>
        </ion-card-header>
      </ion-card>
      <ion-card class="Login_Page_Card">
        <ion-card-header>
          <ion-card-title class="Login_Page_Card_Title">You want to :</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-button class="login-button" expand="block" href="/login">Login</ion-button>
          <ion-button class="register-button" expand="block" href="/register">Register</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<style scoped>
/* CSS样式与Login.vue的样式一致 */
.Login_Page_Card {
  width: 90%;
  height: 45%;
  margin-left: 5%;
  position: relative;
}

.Login_Page_Card_Title {
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
}

.Login_Page_Card_Logo {
  width: 70%;
  height: 70%;
  margin-left: 15%;
}

.login-button {
  margin-top: 40px;
}

.register-button {
  margin-top: 40px;
}
</style>