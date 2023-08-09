<script setup>
import {ref,onMounted} from "vue";
import Container from "../components/Container.vue";
const a=ref('abc')

onMounted(()=>{
  console.log("About View mounted")
})
</script>

<template>
  <div>
    <Container>
      <p>{{ a }}</p>
      <h2>About View</h2>
    </Container>
  </div>
</template>