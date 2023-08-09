<script setup>
import {ref,onMounted} from "vue";
import Container from "../components/Container.vue";
import Card from "../components/Card/index.vue";

console.log("Card",Card)
const a=ref('abc')
const count=ref(1)
const items=[1,2,3,4]
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
  <Card v-for="item of items"/>
  </Container>
 </div>
</template>