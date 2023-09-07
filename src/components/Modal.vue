<script setup>
import SimpleButton from "./SimpleButton.vue";

defineProps({
  show: Boolean,
  title: String,
  text: String,
});
</script>

<template>
  <Teleport to="body">
    <div v-if="show" class="modal">
      <div class="content">
        <div class="header">
          <h4>{{ title }}</h4>
        </div>
        <div class="body">
          <p>{{ text }}</p>
        </div>
        <div class="footer">
          <simple-button
            size="medium"
            color="secondary"
            class="btn"
            @click="$emit('close')"
            >Close</simple-button
          >
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  width: 100%;
  max-width: 350px;
  border-radius: 5px;
  background-color: #fff;
}
.footer,
.header {
  padding: 12px;
}
.header {
  border-bottom: 1px solid darkgray;
}
.body {
  padding: 15px 12px;
}
.footer {
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid darkgray;
}
</style>
