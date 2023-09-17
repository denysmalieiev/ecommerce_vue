<script setup>
import TheContainer from "../../components/TheContainer.vue";
import HomeBanner from "./HomeBanner.vue";
import CarouselOffer from "./CarouselOffer.vue";
import InlineBanner from "./InlineBanner.vue";
</script>

<template>
  <div class="homeView">
    <home-banner />
    <TheContainer>
      <CarouselOffer title="Texnika yarmarkasi" />
      <InlineBanner />
      <CarouselOffer title="Butun oila uchun poyabzal" />
      <CarouselOffer title="Butun oila uchun kiyimlar" />
      <InlineBanner />
      <CarouselOffer title="Maktab uchun" />
      <CarouselOffer title="Maktab formasi" />
      <InlineBanner />
      <CarouselOffer title="Foydali kitoblar" />
    </TheContainer>
  </div>
</template>

<style scoped lang="scss">
.homeView {
  padding: 20px 0;
  @media (min-width: 560px) {
    padding: 25px 0;
  }
  @media (min-width: 560px) {
    padding: 30px 0;
  }
}
.title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #fff;
  margin-top: 25px;
  @media (min-width: 560px) {
    font-size: 28px;
  }
}

.items {
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
