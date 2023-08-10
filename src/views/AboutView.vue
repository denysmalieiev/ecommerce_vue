<script setup>
import { ref } from "vue";
import Container from "../components/Container.vue";
import Modal from "../components/Modal.vue";

const showModal=ref(false)
const close=()=>showModal.value=false;
const open=()=>showModal.value=true;
</script>

<template>
  <div>
    <Container>
      <h2>About View</h2>
      <button class="button" @click="open">Open Modal</button>
      <modal :show="showModal" @close="close">
       <h3> This is a modal</h3>
       <template #header>
        <h2>This is a header</h2>
       </template>
       <template #body>
        <h2>This is a body</h2>
       </template>
      </modal>
    </Container>
  </div>
</template>

<style scoped lang="scss">
h2{
  margin-bottom: 40px;
}
.button{
  padding:20px;
  font-size: 18px;
}
</style>