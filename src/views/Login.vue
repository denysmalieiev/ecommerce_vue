<script setup>
import { onMounted,inject } from 'vue';
import Container from '../components/Container.vue';

console.log('login page', Date.now());

onMounted(() => {
  console.log('login page mounted', Date.now());
});
const text=inject('text');
</script>

<template>
  <div>
    <Container>
      <h2>Login page</h2>
      <p>{{ text }}</p>
    </Container>
  </div>
</template>

<style scoped lang="scss"></style>
