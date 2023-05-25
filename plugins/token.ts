import { useAuthStore } from "@/stores/auth"

export default defineNuxtPlugin(({ $pinia }) => {
  const { setToken } = useAuthStore()
  if (process.server) {
    const token = useCookie("jwt");
    setToken(token.value)
  }

});