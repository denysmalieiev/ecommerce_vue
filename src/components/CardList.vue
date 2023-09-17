<script setup>
import TheCard from "./Card/TheCard.vue";

const props = defineProps({
  items: Array,
});
</script>

<template>
  <div class="list">
    <TheCard v-for="item of props.items" :key="item" :item="item" />
  </div>
</template>

<style scoped lang="scss">
.list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 15px;
  grid-column-gap: 15px;

  @media (min-width: 620px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }

  @media (min-width: 950px) {
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 25px;
    grid-column-gap: 25px;
  }
  @media (min-width: 1350px) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px;
  }
}
</style>
