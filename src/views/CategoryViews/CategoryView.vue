<script setup>
import CategoryContent from "./CategoryContent.vue";
import TheContainer from "../../components/TheContainer.vue";
import CategoryAside from "./CategoryAside.vue";
import CategoryHeader from "./CategoryHeader.vue";
</script>

<template>
  <TheContainer>
    <category-header />
    <div class="contentWrapper">
      <category-aside class="aside" />
      <category-content class="content" />
    </div>
  </TheContainer>
</template>

<style scoped lang="scss">
.title {
  font-size: 26px;
  font-weight: 700;
  padding: 20px 0;
}

.contentWrapper {
  display: grid;
  grid-template-areas: "c c";
  grid-template-columns: 2fr 8fr;
  grid-column-gap: 30px;
  @media (min-width: 650px) {
    grid-template-areas: "a c";
  }
}
.aside {
  grid-area: a;
}
.content {
  grid-area: c;
}
</style>
