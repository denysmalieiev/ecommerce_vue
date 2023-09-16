<script setup>
import SimpleButton from "./SimpleButton.vue";
import TheLogo from "./TheLogo.vue";

defineProps({
  show: Boolean,
});
</script>

<template>
  <Teleport to="body">
    <div v-if="show" class="shadow" @click="$emit('close')" />
    <div class="d__menu" :class="{ active: show }">
      <div class="d__menu--header">
        <TheLogo @close="$emit('close')" />
        <simple-button size="small" color="secondary" @click="$emit('close')"
          >X</simple-button
        >
      </div>
      <div class="d__menu--body">
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
  z-index: 999998;
}

.d__menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 300px;
  height: 100%;
  background-color: #121212;
  padding: 0 20px;
  transform: translateX(-100%);
  transition: transform 0.3s linear;
  z-index: 999999;

  &.active {
    transform: translateX(0);
  }

  &--header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
  &--body {
    flex-grow: 1;
    padding: 10px 0;
  }
}
</style>
