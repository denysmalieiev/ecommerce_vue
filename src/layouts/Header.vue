<script setup>
import Container from "../components/Container.vue";

const secondaryNavItems=[
  {
    path:"/about",
    name:"About",
  },
  {
    path:"/category/all",
    name:"All"
  },
  {
    path:"/category/man",
    name:"Man"
  },
  {
    path:"/category/woman",
    name:"Woman"
  },
  {
    path:"/ui",
    name:"Ui",
  },
  {
    path:"/login",
    name:"Login",
  },
];
</script>

<template>
  <header class="header">
    <Container class="content">
    <div class="primaryNav">
      <h2 class="logo">
      <router-link to="/">Logo</router-link>  
      </h2>
      <input/>
    </div>
      <ul class="menu secondaryNav">
        <li v-for="item in secondaryNavItems" :key="item.path" class="menu--item">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </Container>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: darkcyan;
  padding: 15px 0;
}

.logo a{
  color:#fff;
}

.primaryNav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.secondaryNav{
  display: flex;
  justify-content: center;
  padding: 10px 0;
}
.menu {
  display: flex;
  align-items: center;
}
.menu--item {
  padding-right: 20px;
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
