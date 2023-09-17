<script setup>
import CardList from "../../components/CardList.vue";

const items = [1, 2, 3, 4, 5];
defineProps({
  title: String,
});
</script>
<template>
  <div>
    <h2 class="title">{{ title }}</h2>
    <card-list :items="items" />
  </div>
</template>

<style scoped lang="scss">
.title {
  font-size: 22px;
  color: #fff;
  font-weight: 700;
  margin: 25px 0;
}
</style>
