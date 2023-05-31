<template>
  <ion-list>
    <ion-item>
      <ion-textarea :readonly="true" :label="header">{{
        content
      }}</ion-textarea>
    </ion-item>
  </ion-list>
</template>

<script setup>
import { IonItem, IonList, IonTextarea } from "@ionic/vue";
const props = defineProps(["header", "content"]);
</script>
<style scoped>
.label-text-wrapper {
  height: 5px !important;
}
</style>
