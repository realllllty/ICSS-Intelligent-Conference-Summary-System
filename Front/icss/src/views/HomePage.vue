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

#music-library-2 {
    position: absolute;
    width: 50%;
    height: 50%;
    left: 25%;
    top: 25%;
}


</style>


<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title align="center">
                    GatherGenius 集思
                </ion-title>
                <ion-progress-bar type="indeterminate"></ion-progress-bar>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <div class="float3">
                <content style="z-index: 1"></content>
            </div>

            <div class="float2">
                <img
                        id="music-library-2"
                        class="pllib heartbeat"
                        src="../../assets/player/music-library-2.svg"
                />
            </div>

            <div class="float">
                <ion-button class="heartbeat_left_1">
                    <ion-icon slot="icon-only" :icon="heartbeat()"></ion-icon>
                </ion-button>

                <ion-button class="back_button_Left_2">
                    <ion-icon slot="icon-only" :icon="Back()"></ion-icon>
                </ion-button>

                <ion-button class="play_button_left_3">
                    <ion-icon slot="icon-only" :icon="play()"></ion-icon>
                </ion-button>

                <ion-button class="forward_button_left_4">
                    <ion-icon slot="icon-only" :icon="forward()"></ion-icon>
                </ion-button>

                <ion-button class="repeaticon_left_5">
                    <ion-icon slot="icon-only" :icon="repeaticon()"></ion-icon>
                </ion-button>

            </div>

        </ion-content>

    </ion-page>
</template>

<script lang="ts">
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import content from "../components/contentdisplay.vue";

export default {
    methods: {
        Back() {
            return "../../assets/player/Frame 34087.svg";
        },
        heartbeat() {
            return "../../assets/player/music-library-2.svg";
        },
        play() {
            return "../../assets/player/Group 5.svg";
        },
        forward() {
            return "../../assets/player/Frame 34086.svg";
        },
        repeaticon() {
            return "../../assets/player/repeate-one.svg";
        },
    },
    components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, content},
};
</script>
