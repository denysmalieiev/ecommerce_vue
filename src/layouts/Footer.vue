<script setup>
import { onMounted } from 'vue';
import Container from '../components/Container.vue';

onMounted(() => {
  console.log('Footer mounted');
});
</script>

<template>
  <footer class="footer">
    <Container>
      <h2>Footer</h2>
    </Container>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: darkcyan;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
