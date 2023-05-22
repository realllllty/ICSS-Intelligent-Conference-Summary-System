<template>
  <div ref="scrollWrapper" class="scroll-wrapper">
    <div class="scroll-content" ref="scrollContent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
  name: "BetterScroll",
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.initScroll();
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.betterScroll, this.options);
    },
    refresh() {
      this.scroll.refresh();
    },
  },
  destroyed() {
    this.scroll.destroy();
  },
};
</script>

<style scoped>
.better-scroll {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
</style>
