<script setup>
import CardList from "../../components/CardList.vue";

const items = [1, 2, 3, 4, 5];
</script>
<template>
  <div>
    <h2 class="title">Products</h2>
      <card-list :items="items" />
  </div>
</template>