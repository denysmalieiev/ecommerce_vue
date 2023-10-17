<script setup>
const items = [
  { id: 1, title: "Pringles chips", link: "/category/pringles-chips" },
  {
    id: 2,
    title: "Pringles original chips",
    link: "/category/pringles-original-chips",
  },
  { id: 3, title: "Pringles potato", link: "/category/pringles-potato" },
  {
    id: 4,
    title: "Pringles emmental sheese",
    link: "/category/pringles-emmental-sheese",
  },
  { id: 5, title: "Pringles hot", link: "/category/pringles-hot" },
  {
    id: 6,
    title: "Pringles potato chips",
    link: "/category/pringles-potato-chips",
  },
];

const handleClick = () => {
  window.scrollTo({ top: 0 });
};
</script>

<template>
  <div class="categoryAside">
    <div class="categoryAsideContent">
      <h2 class="title">Categories</h2>
      <ul class="categoryList">
        <li
          v-for="item in items"
          :key="item.id"
          class="listItem"
          @click="handleClick"
        >
          <router-link :to="item.link">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.categoryAside {
  display: none;
  @media (min-width: 650px) {
    display: block;
  }
}
.categoryAsideContent {
  position: sticky;
  top: 10px;
}
.categoryList {
  padding: 15px 0;
}

.listItem {
  margin-bottom: 2px;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  height: auto;
  padding-right: 20px;

  a {
    font-size: 14px;
    line-height: 20px;
    padding: 6px 8px;
    display: block;
    color: #fff;
  }
  .exact-active-link,
  &:hover {
    background-color: rgba(110, 89, 89, 0.2);
  }
}
</style>
