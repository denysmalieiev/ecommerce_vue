<script setup>
import SimpleHeader from "./SimpleHeader.vue";
import TheFooter from "./TheFooter.vue";
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
