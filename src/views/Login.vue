<script setup>
import { onMounted, inject } from "vue";
import { useRouter, useRoute } from "vue-router";

import TheContainer from "../components/TheContainer.vue";

onMounted(() => {
  console.log("login page mounted", Date.now());
});

const router = useRouter();
const route = useRoute();

const handleBackHome = () => {
  console.log("route: ", route);
  router.push("/");
};

const text = inject("text");
</script>

<template>
  <div>
    <TheContainer>
      <h2>Login page</h2>
      <p>{{ text }}</p>
      <button @click="handleBackHome">Back</button>
    </TheContainer>
  </div>
</template>

<style scoped lang="scss"></style>
