<template>
  <div class="skeleton" />
</template>

<style scoped lang="scss">
.skeleton {
  width: 100%;
  height: 100%;
  animation: pulse-bg 1s infinite;
}

@keyframes pulse-bg {
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #eaeaea;
  }
  100% {
    background-color: #fff;
  }
}
</style>
