<script setup>
const props= defineProps({
  show:Boolean
})
</script>

<template>
<Teleport to="body">
  <div v-if="show" class="shadow"/>
  <div class="menu" :class="{active:show}">
    <div class="menu-header">
      <h2>Logo</h2>
      <button @click="$emit('close')" class="close">X</button>
    </div>
    <div class="menu-body">
      <slot/>
    </div>
    </div>
</Teleport>
</template>

<style scoped lang="scss">
.shadow{
  background-color: rgba(0,0,0,.5);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.menu{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 300px;
  height: 100%;
  background-color: #fff;
  padding: 20px;
  transform: translateX(-100%);
  transition: transform 0.3s linear;

  &.active{
    transform: translateX(0)
  }
  &-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.close{
  background-color: transparent;
  border-radius: 4px;
  padding: 5px;
  min-width: 30px;
  font-weight: 700;
  background-color: darkgray;
  border: none;
  outline: none;
  border: 1px solid darkgray;
  transition: background-color .3s linear;

  &:hover{
    background-color: transparent;
  }
}


</style>
