<script setup>
import Card from "./Card/index.vue";

const props = defineProps({
  items: Array,
});
</script>

<template>
  <div class="list">
    <Card v-for="item of props.items" :item="item" v-bind:key="item" />
  </div>
</template>

<style scoped lang="scss">
.list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 10px;

  @media (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 15px;
    grid-column-gap: 15px;
  }

  @media (min-width: 560px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 15px;
    grid-column-gap: 15px;
  }
}
</style>
