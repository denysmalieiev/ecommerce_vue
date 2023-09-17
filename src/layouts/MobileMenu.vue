<script setup>
import { ref } from "vue";

import SimpleDrawer from "../components/SimpleDrawer.vue";
import menuItems from "./MenuItems.js";

const showDrawer = ref(false);
const openDrawer = () => (showDrawer.value = true);
const closeDrawer = () => (showDrawer.value = false);
</script>

<template>
  <div class="btn" @click="openDrawer">
    <svg
      style="color: white"
      height="32px"
      version="1.1"
      viewBox="0 0 32 32"
      width="32px"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z"
        fill="white"
      ></path>
    </svg>
  </div>
  <simple-drawer :show="showDrawer" @close="closeDrawer">
    <ul class="drawer-menu">
      <li
        v-for="item in menuItems"
        :key="item.path"
        class="menu__item"
        @click="closeDrawer"
      >
        <router-link :to="item.path">
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </simple-drawer>
</template>

<style scoped lang="scss">
.btn {
  display: block;
  color: #fff;
  cursor: pointer;

  @media (min-width: 560px) {
    display: none;
  }
}

.drawer-menu {
  display: block;
  @media (min-width: 560px) {
    display: none;
  }

  flex-grow: 1;
  justify-content: center;
  align-items: center;
}

.menu__item {
  user-select: none;
  width: 100%;
  margin-bottom: 12px;

  a {
    color: #fff;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: normal;
    border: none;
    padding: 8px;
    text-decoration: none;
    display: block;
    padding: 10px 12px;
    cursor: pointer;
    transition: background-color 300ms ease;
    border-radius: 8px;
  }
  a:hover {
    background-color: rgba(110, 89, 89, 0.2);
  }
  .exact-active-link {
    background-color: rgba(110, 89, 89, 0.2);
  }
}
</style>
