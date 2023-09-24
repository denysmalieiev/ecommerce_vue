<script setup>
import { useRouter } from "vue-router";

import CardOverlay from "./CardOverlay.vue";
import CardMedia from "./CardMedia.vue";
import CardInfo from "./CardInfo.vue";
import CardFooter from "./CardFooter.vue";

const router = useRouter();

const handleClick = () => {
  router.push("/details/12345678");
  window.scrollTo({ top: 0 });
};
</script>

<template>
  <card-overlay @clk="handleClick">
    <card-media />
    <card-info />
    <card-footer />
  </card-overlay>
</template>

<style scoped lang="scss"></style>
