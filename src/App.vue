<script setup>
import MainLayout from './layouts/MainLayout.vue';
import { useCounterStore } from './stores/counter';

const counter = useCounterStore();

counter.count++;
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 });
// or using an action instead
counter.increment();
</script>

<template>
  <MainLayout>
    <router-view />
    <!-- <div>Current Count: {{ counter.count }}</div> -->
    <!-- <button @click="counter.increment">click</button> -->
  </MainLayout>
</template>

<style scoped></style>
