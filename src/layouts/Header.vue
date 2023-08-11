<script setup>
import Container from "../components/Container.vue";
</script>

<template>
  <header class="header">
   <Container class="content">
    <h2>Logo</h2>
    <ul class="menu">
      <li class="menu--item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="menu--item">
        <router-link to="/about">About</router-link>
      </li>
      <li class="menu--item">
        <router-link to="/ui">Ui</router-link>
      </li>
      <li class="menu--item">
        <router-link to="/login">Login</router-link>
      </li>
    </ul>
   </Container>
  </header>
</template>

<style scoped lang="scss">
.header{
  background-color: darkcyan;
  padding: 15px 0;
}

.content{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu{
  display: flex;
  align-items: center;
}
.menu--item{
  padding-right: 20px;
  color:#000;
  user-select: none;

  a{
    color:#000;
  }
  
  a:hover{
    color:blue;
  }
}
</style>