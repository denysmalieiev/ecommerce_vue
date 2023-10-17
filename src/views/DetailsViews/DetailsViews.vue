<script setup>
import { onMounted, ref } from "vue";

import TheContainer from "../../components/TheContainer.vue";
import MainPhoto from "./MainPhoto.vue";
import ProductInfo from "./ProductInfo.vue";
import RelatedProducts from "./RelatedProducts.vue";
import { DetailsApi } from "../../http/details-api";

const data = ref({});

onMounted(async () => {
  const res = await DetailsApi.productInfo();
  data.value = res.data;
});
</script>

<template>
  <TheContainer>
    <div class="details_top">
      <MainPhoto class="mainPhoto" :src="data.src" />
      <ProductInfo
        class="productInfo"
        :title="data.title"
        :rating="data.rating"
        :price="data.price"
      />
    </div>
    <RelatedProducts />
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
