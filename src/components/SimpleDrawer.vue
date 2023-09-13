<script setup>
import SimpleButton from "./SimpleButton.vue";

const props = defineProps({
  show: Boolean,
});
</script>

<template>
  <Teleport to="body">
    <div v-if="show" class="shadow" />
    <div class="menu" :class="{ active: show }">
      <div class="menu-header">
        <h2>Logo</h2>
        <simple-button size="small" color="secondary" @click="$emit('close')">X</simple-button>
      </div>
      <div class="menu-body">
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.shadow {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 300px;
  height: 100%;
  background-color: red;
  padding: 20px;
  transform: translateX(-100%);
  transition: transform 0.3s linear;
  z-index: 99999999;

  &.active {
    transform: translateX(0);
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
