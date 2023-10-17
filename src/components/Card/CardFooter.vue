<script setup>
import { ref } from "vue";

import CardPopup from "./CardPopup.vue";

defineProps(["price"]);

const showPopup = ref(false);

const openPopup = e => {
  e.stopPropagation();
  showPopup.value = true;
};

const closePopup = () => (showPopup.value = false);
</script>

<template>
  <div class="card-footer">
    <p class="price">Price: {{ price || 500 }} $</p>
    <button class="add-card" @click="openPopup">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="ui-icon add-cart-icon"
      >
        <path
          d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z"
          fill="white"
        ></path>
        <path
          d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z"
          fill="white"
        ></path>
      </svg>
    </button>
    <card-popup :show="showPopup" :close="closePopup" />
  </div>
</template>

<style scoped lang="scss">
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.price {
  color: #fff;
  font-size: 14px;
  line-height: 16.8px;
  letter-spacing: normal;
}

.add-card {
  background-color: transparent;
  border: 1px solid #fff;
  padding: 4px;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  width: auto;
  vertical-align: baseline;
  width: 34px;
  height: 34px;
}
.add-cart-icon {
  path {
    color: #fff;
  }
}
</style>
