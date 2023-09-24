<script setup>
import TheContainer from "../../components/TheContainer.vue";
import HomeBanner from "./HomeBanner.vue";
// import CarouselOffer from "./CarouselOffer.vue";
import InlineBanner from "./InlineBanner.vue";
import SimpleCarousel from "../../components/Carousel/SimpleCarousel.vue";
</script>

<template>
  <div class="homeView">
    <home-banner />
    <TheContainer>
      <SimpleCarousel title="Texnika yarmarkasi" />
      <InlineBanner />
      <SimpleCarousel title="Butun oila uchun poyabzal" />
      <SimpleCarousel title="Butun oila uchun kiyimlar" />
      <InlineBanner />
      <SimpleCarousel title="Maktab uchun" />
      <SimpleCarousel title="Maktab formasi" />
      <InlineBanner />
      <SimpleCarousel title="Foydali kitoblar" />
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
</style>
