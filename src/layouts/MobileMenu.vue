<script setup>
import { ref } from 'vue';

import SimpleDrawer from '../components/SimpleDrawer.vue';
import menuItems from './MenuItems.js'

const showDrawer = ref(false);
const openDrawer = () => (showDrawer.value = true);
const closeDrawer = () => (showDrawer.value = false);
</script>

<template>
    <div class="btn" @click="openDrawer">
        X
    </div>
    <simple-drawer :show="showDrawer" @close="closeDrawer">
        <ul class="menu">
            <li v-for="item in menuItems" :key="item.path" class="menu__item" @click="closeDrawer">
                <router-link class="menu__item--link" :to="item.path">{{ item.name }}</router-link>
            </li>
        </ul>
    </simple-drawer>
</template>

<style scoped lang="scss">
.btn {
    display: block;

    @media (min-width: 560px) {
        display: none;
    }
}

.menu {
    padding-top: 50px;
    padding-bottom: 50px;

    &__item {
        padding: 10px;
    }

    &__item--link {
        font-size: 16px;
        font-weight: 500;
        color: #000;
    }
}
</style>