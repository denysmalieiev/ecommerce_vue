<script setup>
import { onMounted } from "vue";
import CardOverlay from "./CardOverlay.vue";
import CardHeader from "./CardHeader.vue";
import CardMedia from "./CardMedia.vue";
import CardAction from "./CardAction.vue";

onMounted(()=>{
  console.log("card com mounted")
})
</script>

<template>
  <card-overlay>
    <card-header/>
    <card-media/>
    <card-action/>
  </card-overlay>
</template>

<style scoped lang="scss">
</style>