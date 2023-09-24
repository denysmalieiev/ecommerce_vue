<script setup>
import TheContainer from "../../components/TheContainer.vue";
import ProductInfo from "./ProductInfo.vue";
import MainPhoto from "./MainPhoto.vue";
import SimpleCarousel from "../../components/Carousel/SimpleCarousel.vue";
</script>

<template>
  <TheContainer>
    <div class="details_top">
      <MainPhoto class="mainPhoto" />
      <ProductInfo class="productInfo" />
    </div>
    <SimpleCarousel title="Related products" />
    <SimpleCarousel title="Products viewed" />
  </TheContainer>
</template>

<style scoped lang="scss">
.details_top {
  display: grid;
  grid-template-areas: "p p" "i i";
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 0;
  grid-row-gap: 20px;
  padding-top: 20px;
  flex-direction: column;

  @media (min-width: 500px) {
    grid-template-areas: "p i";
    grid-template-columns: 4fr 7fr;
    grid-column-gap: 40px;
    grid-row-gap: 0;
  }

  @media (min-width: 900px) {
    padding-top: 50px;
    grid-template-areas: "p i";
    grid-template-columns: 3fr 6fr;
    grid-column-gap: 60px;
  }
}

.mainPhoto,
.productInfo {
  width: 100%;
}
.mainPhoto {
  grid-area: p;
}
.productInfo {
  grid-area: i;
}
</style>
