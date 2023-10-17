<script setup>
import { onMounted, ref } from "vue";

import TheContainer from "../../components/TheContainer.vue";
import HomeBanner from "./HomeBanner.vue";
import InlineBanner from "./InlineBanner.vue";
import SimpleCarousel from "../../components/Carousel/SimpleCarousel.vue";
import { HomeApi } from "../../http/home-api";

const sections = ref([]);

onMounted(async () => {
  const res = await HomeApi.homeSections();
  sections.value = res.data;
});
</script>

<template>
  <div class="homeView">
    <home-banner />
    <TheContainer v-for="{ id, type, title, items, src } in sections" :key="id">
      <template v-if="type === 'banner'">
        <InlineBanner :src="src" />
      </template>
      <template v-if="type === 'carousel'">
        <SimpleCarousel :title="title" :items="items" />
      </template>
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
