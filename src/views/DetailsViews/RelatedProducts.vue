<script setup>
import { onMounted, ref } from "vue";

import SimpleCarousel from "../../components/Carousel/SimpleCarousel.vue";
import { DetailsApi } from "../../http/details-api";

const items = ref([]);

onMounted(async () => {
  const res = await DetailsApi.relatedProducts();
  items.value = res.data;
});
</script>

<template>
  <SimpleCarousel title="Related products" :items="items" />
</template>
