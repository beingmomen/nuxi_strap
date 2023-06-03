<template>
  <div>
    <UiAuthContainer image="login-light.png" page="Sign in">
      <template #inputs>
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              v-model="email"
              id="email"
              type="email"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <input
              v-model="password"
              id="password"
              type="password"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            :disabled="loading"
            type="button"
            class="justify-center center w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            :class="{ 'cursor-not-allowed': loading }"
            @click="signIn"
          >
            <nuxt-icon
              v-if="loading"
              class="text-[1.3rem]"
              name="spinner"
            ></nuxt-icon>
            Sign In
          </button>
        </div>
        <div class="flex justify-between items-center gap-4">
          <hr class="flex-1" />
          OR
          <hr class="flex-1" />
        </div>
        <div>
          <button
            type="button"
            class="justify-center center w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
          >
            <NuxtLink class="flex-1 py-2.5" to="/auth/register">
              Sign Up
            </NuxtLink>
          </button>
        </div>
      </template>
    </UiAuthContainer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
  // middleware: "is-login",
});
const { setToken } = useAuthStore();

const email = ref("");
const password = ref("");

const loading = ref(false);

const signIn = async () => {
  loading.value = true;
  const user = {
    email,
    password,
  };

  const { data, error } = await useFetch("/api/auth/login", {
    method: "POST",
    body: user,
  });

  if (error.value) {
    loading.value = false;

    return useToast(error.value.data?.statusMessage, "error");
  }

  if (data.value.status == "success") {
    await setToken(data.value.token);
    loading.value = false;
    await navigateTo("/");
  }
};
</script>

<style lang="scss" scoped>
</style>