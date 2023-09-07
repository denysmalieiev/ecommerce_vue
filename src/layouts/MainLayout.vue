<script setup>
import { onMounted, provide, ref } from "vue";

import Header from "./Header.vue";
import Footer from "./Footer.vue";

onMounted(() => {
  console.log("Main layout mounted");
});

const counter = ref(0);

provide("text", "hello from main layout");
provide("counter", counter);

setTimeout(() => {
  counter.value++;
}, 1000);
</script>

<template>
  <div class="layout">
    <Header />
    <main class="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: darkgray;
}
.main {
  flex-grow: 1;
}
</style>
