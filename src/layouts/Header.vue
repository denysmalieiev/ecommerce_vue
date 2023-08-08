<template>
  <header class="header">
    <h2>Logo</h2>
    <ul class="menu">
      <li class="menu--item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="menu--item">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped lang="scss">
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: darkgray;
  padding: 15px 25px;
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