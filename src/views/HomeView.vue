<script setup>
import {ref,onMounted} from "vue";
import Container from "../components/Container.vue";

const a=ref('abc')
const count=ref(1)

onMounted(()=>{
  console.log("Mounted")
})

const handleClick=()=>{
  count.value+=1;
}
</script>

<template>
 <div>
  <Container>
    <div>
    <p>{{ a }}</p>
  </div>
  <h2>Homepage</h2>
  <p>counter {{ count }}</p>
  <button @click="handleClick">click</button>
  </Container>
 </div>
</template>