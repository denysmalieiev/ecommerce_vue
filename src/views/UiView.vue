<script setup>
import { ref } from "vue";

import TheContainer from "../components/TheContainer.vue";
import SimpleDrawer from "../components/SimpleDrawer.vue";
import Modal from "../components/Modal.vue";
import SimpleButton from "../components/SimpleButton.vue";
import ProfileCard from "../components/ProfileCard.vue";
import ProfileCardSkeleton from "../components/ProfileCardSkeleton.vue";

const showModal = ref(false);
const closeModal = () => (showModal.value = false);
const openModal = () => (showModal.value = true);

const handleClick = () => console.log("click");
</script>

<template>
  <TheContainer class="ui">
    <!-- <section class="section">
        <h2 class="title">Simple Popup</h2>
        <simple-button size="medium" color="primary" class="btn" @click="openModal">Open Modal</simple-button>
      <modal :show="showModal" @close="closeModal"
      title="This is a header"
      text="This is a text section"
      />
       </section>
       <section class="section">
         <h2 class="title">Buttons</h2>
         <simple-button size="small" color="primary" @click="handleClick">Ok</simple-button>
         <br>
         <br>
         <simple-button size="medium" color="primary" @click="handleClick">Ok</simple-button>
         <br>
         <br>
         <simple-button size="big" color="primary" @click="handleClick">Ok</simple-button>
       </section> -->
    <section class="section">
      <h2 class="title">Card Skeletion</h2>
      <Suspense>
        <template #default>
          <profile-card />
        </template>
        <template #fallback>
          <ProfileCardSkeleton />
        </template>
      </Suspense>
    </section>
  </TheContainer>
</template>

<style scoped lang="scss">
.ui {
  padding-top: 80px;
  padding-bottom: 80px;
}

.section {
  padding-top: 20px;
  padding-bottom: 80px;
  border-bottom: 1px solid darkcyan;
}

.title {
  margin-bottom: 20px;
}
</style>
