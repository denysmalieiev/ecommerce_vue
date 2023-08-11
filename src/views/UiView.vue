<script setup>
import { ref } from "vue";

import Container from '../components/Container.vue';
import SimpleDrawer from '../components/SimpleDrawer.vue';
import Modal from "../components/Modal.vue";


const showDrawer=ref(false);

const openDrawer=()=>showDrawer.value=true;
const closeDrawer=()=>showDrawer.value=false;

const showModal=ref(false)
const closeModal=()=>showModal.value=false;
const openModal=()=>showModal.value=true;
</script>

<template>
    <Container class="ui">
       <section class="section">
        <h2>Simple Drawer</h2>
          <simple-drawer :show="showDrawer" @close="closeDrawer" >
           <h2>
              About
            </h2>
          </simple-drawer>
          <button @click="openDrawer" class="btn">Open drawer</button>
       </section>
       <section class="section">
        <h2>Simple Popup</h2>
        <button class="btn" @click="openModal">Open Modal</button>
      <modal :show="showModal" @close="closeModal">
       <h3> This is a modal</h3>
       <template #header>
        <h2>This is a header</h2>
       </template>
       <template #body>
        <h2>This is a body</h2>
       </template>
      </modal>
       </section>
    </Container>
</template>

<style scoped lang="scss">
.ui{
  padding-top: 80px;
  padding-bottom: 80px;
}

.section{
  padding-top: 20px;
  padding-bottom: 80px;
  border-bottom: 1px solid darkcyan;
}

h2{
  margin-bottom: 20px;
}
.btn{
  padding: 8px 15px;
  font-size: 18px;
  font-weight: 400;
}
</style>