<script setup>
import { useRouter } from 'vue-router';

import CardOverlay from './CardOverlay.vue';
import CardHeader from './CardHeader.vue';
import CardMedia from './CardMedia.vue';
import CardAction from './CardAction.vue';

const router=useRouter();

const handleClick=()=>{
  router.push('/details/ajdfk')
}
</script>

<template>
  <card-overlay @clk="handleClick">
    <card-header />
    <card-media />
    <card-action />
  </card-overlay>
</template>

<style scoped lang="scss"></style>
