<script setup>
import ThePopup from "../ThePopup/ThePopup.vue";
import img from "../../assets/card-img.jpg";

defineProps(["show", "close"]);

const title = "Pringles chips";
const rating = 4.2;
</script>

<template>
  <the-popup :show="show" @close="close">
    <div class="product_popup">
      <div class="img">
        <img :src="img" alt="Product photo" />
      </div>
      <div class="info">
        <h4 class="title">{{ title }}</h4>
        <p class="rating">Rating: {{ rating }}</p>
      </div>
    </div>
  </the-popup>
</template>

<style scoped lang="scss">
.product_popup {
  display: grid;
  grid-template-columns: 2fr 4fr;
  grid-column-gap: 25px;
}
.img {
  img {
    width: 100%;
    height: auto;
  }
}

.title {
  color: #fff;
  font-size: 12.8px;
  line-height: 15.36px;
  letter-spacing: normal;
}
.rating {
  margin-top: 20px;
  color: #fff;
  font-size: 11.2px;
  line-height: 11.2px;
}
</style>
