<script setup>
import { onMounted } from "vue";

onMounted(() => {
  console.log("container com mounted");
});
</script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1230px;
  margin: 0 auto;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
