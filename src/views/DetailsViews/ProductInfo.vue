<script setup>
const title = "Kartoshka Pringles chipslari";
const rating = 5;
const countRating = 27;
const price = "70 000";
</script>

<template>
  <div class="info">
    <p class="rating">
      {{ rating }} ({{ countRating }} ta baho) 1500 ta buyurtma
    </p>
    <h1 class="title">{{ title }}</h1>
    <p class="price">
      Narx: <br />
      <span>{{ price }} so'm</span>
    </p>
  </div>
</template>

<style scoped lang="scss">
.info {
  width: 100%;
  letter-spacing: normal;
  .rating {
    font-size: 13px;
    color: #fafafa;
    line-height: 20px;
    margin-bottom: 10px;
    @media (min-width: 500px) {
      line-height: 24px;
      margin-bottom: 12px;
    }
  }
  .title {
    font-size: 18px;
    line-height: 24px;
    color: #fff;
    margin-bottom: 15px;
    @media (min-width: 500px) {
      font-size: 22px;
      line-height: 24px;
      margin-bottom: 12px;
    }
  }
  .price {
    font-size: 14px;
    line-height: 20px;
    color: #fafafa;
    span {
      font-size: 20px;
      color: #fff;
      line-height: 28px;
    }
    @media (min-width: 500px) {
      line-height: 24px;
    }
  }
}
</style>
