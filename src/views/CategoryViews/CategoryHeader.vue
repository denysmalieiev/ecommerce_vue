<script setup>
import { watch, ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const categoryName = ref();

const Categories = {
  "pringles-chips": "Pringles chips",
  "pringles-original-chips": "Pringles original chips",
  "pringles-potato": "Pringles potato",
  "pringles-emmental-sheese": "Pringles emmental sheese",
  "pringles-hot": "Pringles hot",
  "pringles-potato-chips": "Pringles potato chips",
};

onMounted(() => {
  categoryName.value = Categories[route.params.categoryName];
});

watch(
  () => route.params.categoryName,
  v => {
    categoryName.value = Categories[v];
  },
);
</script>

<template>
  <div class="categoryHeader">
    <h2 class="title">{{ categoryName }}</h2>
    <div>
      <h4>Filter</h4>
    </div>
  </div>
</template>

<style scoped lang="scss">
.categoryHeader {
  padding: 25px 0;
  border-bottom: 1px solid #fff;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
