
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: null,
    userData: null
  }),
  getters: {
    token: state => state.accessToken,
    user: state => state.userData,
  },
  actions: {
    setToken(token: any) {
      this.accessToken = token
    },
    setUser(user: any) {
      this.userData = user
    }
  },
})