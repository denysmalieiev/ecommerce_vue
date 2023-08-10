<script setup>
const props=defineProps({
  show:Boolean,
})
console.log("props",props.show)
</script>

<template>
  <Teleport to="body">
    <div v-if="show" class="modal">
      <div class="content">
         <slot name="header">
          <span>This is a header block</span>
         </slot>
         <slot name="body">
          <span>This is a header block</span>
         </slot>
         <slot name="footer">
          <span>This is a footer block</span>
         </slot>
        <button @click="$emit('close')">Close</button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.content{
  width: 100%;
  max-width: 500px;
  height: 200px;
  background-color: red;
}
</style>
