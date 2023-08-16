<script setup>
import Card from './Card/index.vue';

const props = defineProps({
  items: Array,
});
</script>

<template>
  <h2>Card list</h2>
  <div class="list">
    <Card v-for="item of props.items" key="item" />
  </div>
</template>

<style scoped lang="scss">
.list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
}
</style>
