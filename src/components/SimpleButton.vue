<script setup>
defineProps({
  color: String,
  size: String,
});
</script>

<template>
  <button class="btn" :class="{ [color]: color, [size]: size }">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  border-radius: 4px;
  min-width: 30px;
  font-weight: 700;
  border: none;
  outline: none;
  transition: background-color 0.3s linear;

  &:hover {
    background-color: transparent;
    color: #fff;
  }
  &.primary {
    background-color: #fff;
    border: 1px solid #fff;
  }
  &.primary:hover {
    background-color: transparent;
    color: #fff;
  }
  &.secondary {
    background-color: darkgray;
    border: 1px solid darkgray;
  }
  &.secondary:hover {
    background-color: transparent;
    color: darkgray;
  }
}
.small {
  padding: 4px 8px;
}
.medium {
  padding: 8px 12px;
}
.big {
  padding: 12px 25px;
}
</style>
