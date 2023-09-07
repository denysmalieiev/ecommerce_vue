<script setup>
import Container from "../../components/Container.vue";
import HomeBanner from "./HomeBanner.vue";
import CardList from "../../components/CardList.vue";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
</script>

<template>
  <home-banner />
  <div class="items">
    <Container>
      <h2 class="title">Products</h2>
      <card-list :items="items" />
    </Container>
  </div>
</template>

<style scoped lang="scss">
.title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #fff;
}
.items {
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
