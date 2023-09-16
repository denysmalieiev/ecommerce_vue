<script setup>
import { useRoute } from "vue-router";

import Container from "../../components/Container.vue";
import CardList from "../../components/CardList.vue";

const route = useRoute();
console.log("route: ", route.params.categoryName);

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/**
 * fun
 * @param {number} a
 * @param {number} b
 * @return {number} a+b;
 */

const fun = (a, b) => {
  return a + b;
};
</script>

<template>
  <Container>
    <h2 class="title">Category {{ route.params.categoryName }}</h2>
    <CardList class="list" :items="items" />
  </Container>
</template>

<style scoped lang="scss">
.title {
  font-size: 26px;
  font-weight: 700;
  padding: 20px 0;
}

.list {
  padding-top: 50px;
  padding-bottom: 80px;
}
</style>
