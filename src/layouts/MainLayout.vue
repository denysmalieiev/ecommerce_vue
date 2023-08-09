<script setup>
import { onMounted } from "vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

onMounted(()=>{
  console.log("Main layout mounted")
})
</script>

<template>
<div class="layout">
  <Header/>
  <main class="main">
    <slot/>
  </main>
  <Footer/>
</div>
</template>

<style scoped>
.layout{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: darkgray;
}
.main{
  flex-grow: 1;
}
</style>