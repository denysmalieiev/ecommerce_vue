<script setup>
<<<<<<< HEAD
import MainLayout from "./layouts/MainLayout.vue";
import { useCounterStore } from './stores/counter'

const counter = useCounterStore()

counter.count++
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 })
// or using an action instead
counter.increment()
=======
import MainLayout from './layouts/MainLayout.vue';
>>>>>>> 93f7936bd5677c9553ed5690bff2b24f5f2df73c
</script>

<template>
  <MainLayout>
    <router-view />
    <!-- <div>Current Count: {{ counter.count }}</div> -->
    <!-- <button @click="counter.increment">click</button> -->
  </MainLayout>
</template>

<style scoped></style>
