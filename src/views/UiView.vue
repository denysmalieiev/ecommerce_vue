<script setup>
import { ref } from "vue";

import Container from '../components/Container.vue';
import SimpleDrawer from '../components/SimpleDrawer.vue';

const show=ref(false);

const open=()=>show.value=true;
const close=()=>show.value=false;
</script>

<template>
    <Container class="ui">
       <section>
          <simple-drawer :show="show" @close="close" >
           <div>
              About
            </div>
          </simple-drawer>
          <button @click="open" class="btn">Open drawer</button>
       </section>
    </Container>
</template>

<style scoped lang="scss">
.ui{
  padding-top: 80px;
  padding-bottom: 80px;
}
section{
  padding-bottom: 80px;
}

.btn{
  padding: 8px 15px;
  font-size: 18px;
  font-weight: 400;
}
</style>