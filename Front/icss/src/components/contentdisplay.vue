<!-- <template>
  <div class="core-container">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content">
        <div
          class="scroll-item"
          v-for="(item, index) in emojis"
          :key="index"
          @click="clickHandler(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.eg-paragraph {
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.5rem;
  letter-spacing: 0.00938em;
  color: #000000;
  margin: 0;
  padding: 0;
  text-align: left;
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import BScroll from "@better-scroll/core";

const emojis = [
  "😀 😁 😂 🤣 😃",
  "😄 😅 😆 😉 😊",
  "😫 😴 😌 😛 😜",
  "👆🏻 😒 😓 😔 👇🏻",
  "😑 😶 🙄 😏 😣",
  "😞 😟 😤 😢 😭",
  "🤑 😲 🙄 🙁 😖",
  "👍 👎 👊 ✊ 🤛",
  "🙄 ✋ 🤚 🖐 🖖",
  "👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼",
  "☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽",
  "🌖 🌗 🌘 🌑 🌒",
  "💫 💥 💢 💦 💧",
  "🐠 🐟 🐬 🐳 🐋",
  "😬 😐 😕 😯 😶",
  "😇 😏 😑 😓 😵",
  "🐥 🐣 🐔 🐛 🐤",
  "💪 ✨ 🔔 ✊ ✋",
  "👇 👊 👍 👈 👆",
  "💛 👐 👎 👌 💘",
  "👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼",
  "☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽",
  "🌖 🌗 🌘 🌑 🌒",
  "💫 💥 💢 💦 💧",
  "🐠 🐟 🐬 🐳 🐋",
  "😬 😐 😕 😯 😶",
  "😇 😏 😑 😓 😵",
  "🐥 🐣 🐔 🐛 🐤",
  "💪 ✨ 🔔 ✊ ✋",
  "👇 👊 👍 👈 👆",
  "💛 👐 👎 👌 💘",
];

let bs;

onMounted(() => {
  init();
});

onUnmounted(() => {
  bs.destroy();
});

function init() {
  bs = new BScroll(document.querySelector(".scroll"), {
    probeType: 3,
    click: true,
  });

  bs.on("scrollStart", () => {
    console.log("scrollStart-");
  });

  bs.on("scroll", ({ y }) => {
    console.log("scrolling-");
  });

  bs.on("scrollEnd", (pos) => {
    console.log(pos);
  });
}

function clickHandler(item) {
  window.alert(item);
}
</script> -->
<!-- template -->
<template>
  <div class="left-content" ref="leftScroll">
    <div class="left">
      <div
        :class="
          leftActive === index ? 'left-item left-item-active' : 'left-item'
        "
        v-for="(item, index) in categoryList"
        :key="index"
        @click="leftItemClick(index)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { ref, onMounted } from "vue";
export default {
  setup: () => {
    const leftActive = ref < number > 0;
    const leftScroll = (ref < HTMLElement) | (null > null);
    // 此处应该写入一个内容列表，如['热门推荐','手机数码','...']
    const categoryList = ["热门推荐", "手机数码"];
    onMounted(() => {
      const leftBs = new BScroll(leftScroll.value, {
        scrollY: true,
        click: true,
      });
    });
    const leftItemClick = (e) => {
      leftActive.value = e;
    };
    return { leftActive, categoryList, leftItemClick };
  },
};
</script>
<style>
/* css*/
.left-content {
  /* 此处高度必须，根据业务实际情况而定 */
  height: 100vh;
}
.left {
  /* 此处高度不写，根据子元素高度自适应 */
}
.left-item {
  text-align: center;
  height: 100px;
  line-height: 100px;
  color: #333;
}
.left-item-active {
  color: #e93b3d;
}
</style>
