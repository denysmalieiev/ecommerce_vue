<script setup>
import Container from "../../components/Container.vue";
import HomeBanner from "./HomeBanner.vue";
import CardList from "../../components/CardList.vue";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
</script>

<template>
 <div class="homeView">
  <home-banner />
    <Container>
      <h2 class="title">Products</h2>
      <card-list :items="items" />
    </Container>
 </div>
</template>

<style scoped lang="scss">
.homeView{
  padding: 20px 0;
  @media (min-width:560px) {
    padding: 25px 0;
  }
  @media (min-width:560px) {
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
