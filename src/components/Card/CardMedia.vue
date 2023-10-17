<script setup>
import DefaultPhoto from "../../assets/phone.jpeg";

defineProps(["src"]);
</script>

<template>
  <div class="card-media">
    <img alt="photo" :src="src || DefaultPhoto" />
  </div>
</template>

<style scoped lang="scss">
.card-media {
  width: 100%;
  height: auto;
  aspect-ratio: 1/1.25;
  border-radius: 8px;
  position: relative;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
}
</style>
