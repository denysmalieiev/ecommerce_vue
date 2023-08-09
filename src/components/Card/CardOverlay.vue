<script setup>
import { onMounted } from "vue";

onMounted(()=>{
  console.log("card overlay com mounted")
})
</script>

<template>
  <div class="card-overlay">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.card-overlay{
  max-width: 350px;
  width: 100%;
  border:1px solid blue;
  border-radius: 8px;
}
</style>