<script setup>
import { onMounted } from "vue";
import img from "../../assets/photo.jpeg";

onMounted(()=>{
  console.log("card media com mounted")
})
</script>

<template>
  <div class="card-media">
    <img alt="photo" :src="img"/>
  </div>
</template>

<style scoped lang="scss">
.card-media{
  width: 100%;
  height: 200px;

  img{
    width: 100%;
    height: auto;
    border-radius: inherit;
  }
}
</style>