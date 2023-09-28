<script setup>
import TheContainer from "../../components/TheContainer.vue";
import HomeBanner from "./HomeBanner.vue";
import InlineBanner from "./InlineBanner.vue";
import SimpleCarousel from "../../components/Carousel/SimpleCarousel.vue";
</script>

<template>
  <div class="homeView">
    <home-banner />
    <TheContainer>
      <SimpleCarousel title="Pringles chips" />
      <InlineBanner />
      <SimpleCarousel title="Pringles original chips" />
      <SimpleCarousel title="Pringles potato" />
      <InlineBanner />
      <SimpleCarousel title="Pringles chips" />
      <SimpleCarousel title="Pringles emmental chips" />
      <InlineBanner />
      <SimpleCarousel title="Pringles potato" />
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
