<script setup>
import { onMounted, provide, ref } from "vue";

import SimpleHeader from "./SimpleHeader.vue";
import TheFooter from "./TheFooter.vue";

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
    <SimpleHeader />
    <main class="main">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #141a1f;
}

.main {
  flex-grow: 1;
}
</style>
