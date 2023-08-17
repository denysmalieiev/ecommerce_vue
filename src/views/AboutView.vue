<script setup>
import { inject } from "vue";

import Container from '../components/Container.vue';

const text=inject('text');
const counter=inject('counter')
</script>

<template>
  <div>
    <Container>
      <h2>About View</h2>
      <h2>Text: {{ text }}</h2>
      <h2>Counter : {{ counter }}</h2>
    </Container>
  </div>
</template>

<style scoped lang="scss">
h2 {
  margin-bottom: 40px;
}
</style>
