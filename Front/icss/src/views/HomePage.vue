<style scoped>
.float {
    width: 90%;
    height: 10%;
    position: fixed;
    bottom: 3.5%;
    right: 5%;
    border-radius: 30px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background-color: darkslategray;
    box-shadow: 0 -5px 10px rgba(47, 26, 185, 0.08);
    margin-top: 5px;
}

.float2 {
    width: 90%;
    height: 40%;
    position: fixed;
    bottom: 15%;
    right: 5%;
    border-radius: 30px;
    overflow: hidden;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 13px;
    background-color: white;
    box-shadow: 0px -5px 10px rgba(47, 26, 185, 0.08);
}

.float3 {
    width: 90%;
    height: 35%;
    position: fixed;
    bottom: 56.5%;
    right: 5%;
    border-radius: 30px;
    overflow: scroll;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 13px;
    gap: 29px;
    background-color: white;
    box-shadow: 0px -5px 10px rgba(47, 26, 185, 0.08);
//padding: 0px;
}

.pllib {
    width: 24px;
    height: 24px;
    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 10;
}

.backicon {
    width: 44px;
    height: 44px;
}

.playicon {
    width: 35px;
    height: 35px;
}

.repeaticon {
    width: 24px;
    height: 24px;
}

@-webkit-keyframes heartbeat {
    from {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    10% {
        -webkit-transform: scale(0.91);
        transform: scale(0.91);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    17% {
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    33% {
        -webkit-transform: scale(0.87);
        transform: scale(0.87);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    45% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
}

@keyframes heartbeat {
    from {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    10% {
        -webkit-transform: scale(0.91);
        transform: scale(0.91);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    17% {
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
    33% {
        -webkit-transform: scale(0.87);
        transform: scale(0.87);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    45% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
    }
}

.heartbeat {
    animation: heartbeat 1.5s ease-in-out infinite both;
}

ion-progress-bar {
    --progress-background: #228B22;
    --background: #a9cea9;
}

</style>


<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <!-- <ion-button>
                  <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
                </ion-button> -->
                <ion-title align="center">
                    GatherGenius 集思
                </ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <div class="float3">
                <!--                <div class="statusbar"></div>-->
                <ion-progress-bar type="indeterminate"></ion-progress-bar>
                <content style="z-index: 100"></content>
            </div>

            <div class="float2">
                <!--                <div class="statusbar"></div>-->
                <ion-progress-bar type="indeterminate"></ion-progress-bar>
            </div>

            <div class="float">
                <img
                        src="../../assets/player/music-library-2.svg"
                        class="pllib heartbeat"
                />
                <img src="../../assets/player/Frame 34087.svg" class="backicon"/>
                <img src="../../assets/player/Group 5.svg" class="playicon"/>
                <img src="../../assets/player/Frame 34086.svg" class="backicon"/>
                <img src="../../assets/player/repeate-one.svg" class="repeaticon"/>
            </div>

        </ion-content>

    </ion-page>
</template>

<script lang="ts">
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonProgressBar
} from "@ionic/vue";
import {personCircle} from "ionicons/icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import content from "../components/contentdisplay.vue";

export default {
    components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, content},
};
</script>
