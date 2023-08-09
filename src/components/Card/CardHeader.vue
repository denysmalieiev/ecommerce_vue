<script setup>
import { onMounted } from "vue";

onMounted(()=>{
  console.log("card header com mounted")
})
</script>

<template>
  <div class="card-header">
    <h2>Card header</h2>
  </div>
</template>

<style scoped lang="scss">
.card-header{
  width: 100%;
  border-bottom:1px solid blue;
  padding: 10px;
}
</style>