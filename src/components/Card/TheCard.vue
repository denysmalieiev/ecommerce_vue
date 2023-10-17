<script setup>
import { useRouter } from "vue-router";

import CardOverlay from "./CardOverlay.vue";
import CardMedia from "./CardMedia.vue";
import CardInfo from "./CardInfo.vue";
import CardFooter from "./CardFooter.vue";

const router = useRouter();

defineProps({
  item: Object,
});

const handleClick = () => {
  router.push("/details/12345678");
  window.scrollTo({ top: 0 });
};
</script>

<template>
  <card-overlay @clk="handleClick">
    <card-media :src="item.src" />
    <card-info :title="item.title" />
    <card-footer :price="item.price" />
  </card-overlay>
</template>

<style scoped lang="scss"></style>
