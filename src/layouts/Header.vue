<script setup>
import Container from "../components/Container.vue";
import MobileMenu from "./MobileMenu.vue";
import menuItems from './MenuItems.js'
</script>

<template>
  <header class="header">
    <Container class="content">
      <h2 class="logo">
        <router-link to="/">Logo</router-link>
      </h2>
      <ul class="menu">
        <li v-for="item in menuItems" :key="item.path" class="menu--item">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
      <MobileMenu />
    </Container>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: darkcyan;
  padding: 15px 0;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  color: #fff;
}

.menu {
  display: none;

  @media (min-width: 560px) {
    display: flex;
  }

  flex-grow: 1;
  justify-content: center;
  align-items: center;
}

.menu--item {
  padding-right: 8px;
  color: #000;
  user-select: none;

  a {
    color: #000;
  }

  a:hover {
    color: blue;
  }
}
</style>
