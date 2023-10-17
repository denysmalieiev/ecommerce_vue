<script setup>
defineProps(["src"]);
</script>

<template>
  <div class="mainPhoto">
    <img :src="src" alt="photo" />
  </div>
</template>

<style scoped lang="scss">
.mainPhoto {
  width: 100%;
  border-radius: 4px;

  img {
    width: 100%;
    height: auto;
    border-radius: inherit;
  }
}
</style>
