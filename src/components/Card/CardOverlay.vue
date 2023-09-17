<script setup>
const emit = defineEmits(["clk"]);

const handleClick = () => {
  emit("clk");
};
</script>

<template>
  <div class="card-overlay" @click="handleClick">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card-overlay {
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
}
</style>
