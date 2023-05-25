
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    counter: state => state.count,
  },
  actions: {
    assign() {
      this.count = this.count + 1
    }
  },
})