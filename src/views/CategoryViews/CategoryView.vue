<script setup>
import { useRoute } from 'vue-router';

import Container from "../../components/Container.vue";

const route=useRoute();
console.log("route: ",route.params.categoryName)
</script>

<template>
  <Container>
    <h2>Category {{ route.params.categoryName }}</h2>
  </Container>
</template>