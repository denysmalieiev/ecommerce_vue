<script setup>
import photoUrl from "../../assets/card-img.jpg";
</script>

<template>
  <div class="mainPhoto">
    <img :src="photoUrl" alt="photo" />
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
