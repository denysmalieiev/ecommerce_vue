<script setup>
defineProps(["src"]);
</script>

<template>
  <div class="inline-banner">
    <img :src="src" alt="banner photo" />
  </div>
</template>

<style scoped lang="scss">
.inline-banner {
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;
  height: auto;
  aspect-ratio: 3/1;
  position: relative;
  border-radius: 10px;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
}
</style>
