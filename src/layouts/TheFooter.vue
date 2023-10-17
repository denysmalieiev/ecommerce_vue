<script setup>
import TheContainer from "../components/TheContainer.vue";
</script>

<template>
  <footer class="footer">
    <TheContainer>
      <h2 class="title">Made by <a href="https://solijonov.vercel.app/" target="_blank">Solijonov</a></h2>
    </TheContainer>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  box-shadow: inset 0px -1px 1px rgb(31, 38, 46);
  background-color: rgba(16, 20, 24, 0.7);
  padding-top: 15px;
  padding-bottom: 15px;
}
.title {
  color: #fff;
  text-align: center;
}
</style>
