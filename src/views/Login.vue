<script setup>
import { onMounted } from "vue";
import Container from "../components/Container.vue";

console.log("login page",Date.now())

onMounted(()=>{
  console.log("login page mounted",Date.now())
})
</script>

<template>
  <div>
    <Container>
      <h2>Login page</h2>
    </Container>
  </div>
</template>

<style scoped lang="scss">
</style>