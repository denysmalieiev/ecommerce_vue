<script setup>
import {ref,onMounted} from "vue";

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
    <p>{{ a }}</p>
  </div>
  <h2>Homepage</h2>
  <p>counter {{ count }}</p>
  <button @click="handleClick">click</button>
</template>