<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>设置</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">设置</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <!-- <ion-row>
          
        </ion-row> -->
        <ion-row>
          <ion-list :inset="true" style="width: 100%">
            <ion-item style="display: flex; place-content: space-between">
              <ion-col style="padding: 0"> 登录 </ion-col>
              <ion-col>
                <ion-avatar style="margin-left: auto">
                  <img
                    alt="Silhouette of a person's head"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  />
                </ion-avatar>
              </ion-col>
            </ion-item>
            <ion-item>
              <ion-label>Pokémon Yellow</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Mega Man X</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>The Legend of Zelda</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Pac-Man</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>关于项目</ion-label>
            </ion-item>
          </ion-list>
        </ion-row>
      </ion-grid>
      <div id="open-action-sheet" style="position: relative; bottom: 10px">
        <svg
          t="1684144718132"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2518"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="20"
          height="20"
        >
          <path
            d="M232.675556 1023.81037c-61.231407 0-118.632296-23.665778-161.621333-66.635852l-4.228741-4.209778c-89.088-89.125926-89.088-234.116741 0-323.242667l181.096296-181.077333c3.470222 25.372444 9.557333 50.422519 18.090667 74.600296l-152.822519 152.841481c-63.525926 63.544889-63.525926 166.930963 0 230.494815l4.266667 4.266667c30.72 30.72 71.642074 47.634963 115.218963 47.634963s84.517926-16.933926 115.256889-47.672889l228.882963-228.882963c63.525926-63.544889 63.525926-166.949926 0-230.494815l-4.266667-4.247704c-2.066963-2.066963-4.190815-4.077037-6.409481-6.049185l46.40237-46.40237c2.180741 2.010074 4.304593 4.039111 6.371556 6.106074l4.266667 4.247704c89.088 89.088 89.069037 234.078815-0.018963 323.204741L394.296889 957.174519C351.326815 1000.144593 293.925926 1023.81037 232.675556 1023.81037zM411.45837 629.266963c-2.180741-2.029037-4.304593-4.058074-6.352593-6.106074l-4.247704-4.247704c-43.083852-43.102815-66.825481-100.484741-66.825481-161.60237 0-61.11763 23.74163-118.499556 66.825481-161.60237l228.864-228.882963C672.673185 23.855407 730.074074 0.18963 791.324444 0.18963c61.25037 0 118.651259 23.665778 161.621333 66.635852l4.171852 4.209778C1000.25837 114.138074 1024 171.557926 1024 232.675556c0 61.11763-23.722667 118.518519-66.825481 161.621333l-181.077333 181.096296c-3.489185-25.41037-9.557333-50.479407-18.090667-74.619259l152.822519-152.841481c63.544889-63.544889 63.544889-166.949926 0-230.494815l-4.28563-4.266667c-30.72-30.72-71.642074-47.634963-115.218963-47.634963-43.557926 0-84.498963 16.933926-115.237926 47.691852l-228.882963 228.864c-30.738963 30.738963-47.672889 71.68-47.672889 115.256889 0 43.576889 16.933926 84.517926 47.672889 115.237926l4.228741 4.247704c2.029037 2.048 4.171852 4.077037 6.428444 6.068148L411.45837 629.266963z"
            fill="#272636"
            p-id="2519"
          ></path>
        </svg>
      </div>
      <ion-action-sheet
        trigger="open-action-sheet"
        header="Actions"
        :buttons="actionSheetButtons"
      ></ion-action-sheet>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonItem,
  IonList,
  IonLabel,
  IonActionSheet,
} from "@ionic/vue";
const actionSheetButtons = [
  {
    text: "Delete",
    role: "destructive",
    data: {
      action: "delete",
    },
  },
  {
    text: "Share",
    data: {
      action: "share",
    },
  },
  {
    text: "Cancel",
    role: "cancel",
    data: {
      action: "cancel",
    },
  },
];
</script>
<style scoped>
.example-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.item-inner {
  padding: 0;
}
</style>
