<script setup>
import SimpleButton from "../SimpleButton.vue";

defineProps({
  show: Boolean,
});
</script>

<template v-if="false">
  <Teleport to="body">
    <div v-if="show" class="shadow" @click="$emit('close')" />
    <div class="popup" :class="{ active: show }">
      <div class="popup_header">
        <h4>Product details</h4>
        <simple-button size="small" color="secondary" @click="$emit('close')"
          >X</simple-button
        >
      </div>
      <div class="popup_body">
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

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  min-width: 320px;
  height: auto;
  background-color: #121212;
  padding: 0 20px;
  transform: translate(-50%, -50%);
  transition: transform 0.3s linear;
  z-index: 999999;
  display: none;
  border-radius: 6px;

  &.active {
    display: block;
  }

  &_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
  }
  &_body {
    flex-grow: 1;
    padding: 10px 0;
  }
}
</style>
