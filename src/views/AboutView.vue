<script setup>
import {ref,onMounted} from "vue";

const a=ref('abc')

onMounted(()=>{
  console.log("About View mounted")
})
</script>

<template>
  <div>
    <p>{{ a }}</p>
  </div>
  <h2>About View</h2>
</template>