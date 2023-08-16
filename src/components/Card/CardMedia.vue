<script setup>
import img from '../../assets/photo.jpeg';
</script>

<template>
  <div class="card-media">
    <img alt="photo" :src="img" />
  </div>
</template>

<style scoped lang="scss">
.card-media {
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: auto;
    border-radius: inherit;
  }
}
</style>
