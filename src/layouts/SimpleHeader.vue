<script setup>
import Container from "../components/TheContainer.vue";
import MobileMenu from "./MobileMenu.vue";
import menuItems from "./MenuItems.js";
import TheLogo from "../components/TheLogo.vue";
</script>

<template>
  <header class="header">
    <Container class="content">
      <h2 class="logo">
        <TheLogo />
      </h2>
      <ul class="menu">
        <li v-for="item in menuItems" :key="item.path" class="menu__item">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
      <MobileMenu />
    </Container>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 15px 0;
  box-shadow: inset 0px -1px 1px rgb(31, 38, 46);
  background-color: rgba(16, 20, 24, 0.7);
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.menu__item {
  padding-right: 8px;
  user-select: none;

  a {
    color: #fff;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: normal;
    background-color: rgba(16, 20, 24, 0.7);
    border: none;
    transition: color 300ms;
    padding: 8px;
    text-decoration: none;
  }

  .exact-active-link,
  a:hover {
    color: #acbac8;
  }
}
</style>
