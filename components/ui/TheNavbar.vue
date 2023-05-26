<template>
  <nav class="navbar bg-base-100 shadow-ms rounded-bl-lg mb-4">
    <div class="flex-none">
      <button class="btn btn-square btn-ghost" @click="toggleSidebar">
        <nuxt-icon class="text-[1.25rem]" name="align"></nuxt-icon>
      </button>
    </div>
    <div class="flex-1">
      <!-- <a class="btn btn-ghost normal-case text-xl">daisyUI</a> -->
      <button class="btn mx-5" @click="signOut">Logout</button>
      <!-- <p>{{ token }}</p> -->
    </div>
    <div class="flex-none"></div>
  </nav>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";
const sidebar = useToggleSidebar();
const fixedSidebar = useFixedSidebar();
const { width, height } = useWindowSize();
import { useAuthStore } from "@/stores/auth";
const { signOut } = useAuthStore();

// const token = useCookie("jwt");
// const token = useCookie("jwt");

const toggleSidebar = () => {
  if (width.value > 1024) {
    sidebar.value = !sidebar.value;
  } else {
    fixedSidebar.value = !fixedSidebar.value;
  }
};

// const signOut = () => {
//   console.warn("token", token.value);
//   token.value = null;
// };

watchEffect(() => {
  if (width.value > 1024) {
    fixedSidebar.value = true;
  }
});
</script>

<style lang="scss" scoped>
</style>