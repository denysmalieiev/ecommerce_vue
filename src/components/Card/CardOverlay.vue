<script setup>
const emit = defineEmits(['clk'])

const handleClick=()=>{
  emit('clk')
}
</script>

<template>
  <div class="card-overlay" @click="handleClick">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card-overlay {
  max-width: 350px;
  width: 100%;
  border: 1px solid blue;
  border-radius: 8px;
  cursor: pointer;
  transition: all 300ms;

  &:hover{
    transform: scale(1.02);
  }
}
</style>
