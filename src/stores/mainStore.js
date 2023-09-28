import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    counter: 0,
    name: "",
  }),
  getters: {
    doubleCounter: state => state.counter * 2,
    doubleCounterPlusOne() {
      return this.doubleCounter + 1;
    },
  },
  actions: {
    reset() {
      this.counter = 0;
    },
  },
});
