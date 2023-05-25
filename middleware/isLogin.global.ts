import { useAuthStore } from "@/stores/auth"

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { token, setUser } = useAuthStore()

  const body = { token }


  const { data, error } = await useFetch("/api/auth/loggedIn", {
    method: "POST",
    body: body,
  });

  const user = data.value?.user


  await setUser(user)

  if (to.meta.layout === 'auth') {
    if (user) {
      return navigateTo('/')
    }
  } else {
    if (!user) {
      return navigateTo('/login')
    }
  }


  console.warn('error jwt', error.value);

})
