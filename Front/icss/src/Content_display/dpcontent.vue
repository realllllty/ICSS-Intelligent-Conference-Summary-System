<template>
  <ion-card v-for="(msg, index) in dpMsg">
    <ion-grid>
      <ion-row>
        <ion-col size="auto" style="width: 80%">
          <ion-card-header>
            <ion-card-title>{{ msg.title }}</ion-card-title>
            <!-- <ion-card-subtitle>
              {{ `About: ${msg.keywords[0]} ${msg.keywords[1]}` }}
              <br />
              {{ msg.time }}
            </ion-card-subtitle> -->
          </ion-card-header>

          <ion-card-content>
            <div>
              {{ `About: ${msg.keywords[0]} ${msg.keywords[1]}` }}
              <br />
              {{ msg.time }}
            </div>
            Here's a small text description for the card content. Nothing more,
            nothing less.
          </ion-card-content>
        </ion-col>
        <ion-col>
          <div>{{ msg.length }}</div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>
</template>

<script setup lang="ts">
import { dpMsg } from "./dpfiles";
import { defineComponent } from "vue";
</script>
