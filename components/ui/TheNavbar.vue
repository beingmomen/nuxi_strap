<template>
  <nav class="navbar bg-base-100 shadow-ms rounded-bl-lg rounded-br-lg mb-4">
    <div class="flex-1">
      <button class="btn btn-square btn-ghost" @click="toggleSidebar">
        <nuxt-icon class="text-[1.25rem]" name="align"></nuxt-icon>
      </button>
    </div>
    <div class="flex-none gap-2">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img :src="userImage" alt="user" />
          </div>
        </label>

        <ul
          tabindex="0"
          class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li @click="signOut"><a>Logout</a></li>
        </ul>
      </div>
    </div>
    <div class="flex-none"></div>
  </nav>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";
const sidebar = useToggleSidebar();
const fixedSidebar = useFixedSidebar();
const { width, height } = useWindowSize();
const { signOut, user } = useAuthStore();

// const token = useCookie("jwt");
// const token = useCookie("jwt");

const toggleSidebar = () => {
  if (width.value > 1024) {
    sidebar.value = !sidebar.value;
  } else {
    fixedSidebar.value = !fixedSidebar.value;
  }
};

const userImage = computed(() => `/${user.image}.png`);

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