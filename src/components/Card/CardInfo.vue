<script setup>
const title = "Kartoshka Pringles chipslari";
const rating = 5;
const countRating = 27;
</script>

<template>
  <div class="card-info">
    <h4 class="card-title">{{ title }}</h4>
    <p class="card-rating">{{ rating }} ({{ countRating }} ta baho)</p>
  </div>
</template>

<style scoped lang="scss">
.card-info {
  width: 100%;
  padding: 10px;
}

.card-title {
  color: #fff;
  font-size: 12.8px;
  line-height: 15.36px;
  letter-spacing: normal;
}
.card-rating {
  margin-top: 20px;
  color: #fff;
  font-size: 11.2px;
  line-height: 11.2px;
}
</style>
