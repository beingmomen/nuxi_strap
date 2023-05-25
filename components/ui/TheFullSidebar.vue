<template>
  <aside
    class="sidebar bg-white shadow-ms ps-3 max-[1024px]:-translate-x-[16rem] max-[1024px]:fixed"
    :class="sidebar ? 'lg:w-64' : 'lg:w-20'"
  >
    <div class="flex items-center">
      <nuxt-icon class="text-[4rem]" name="maron"></nuxt-icon>
      <NuxtLink class="cursor-pointer logo-text whitespace-nowrap" to="/">
        <h1 class="font-bold text-3xl">Nuxi Strap</h1>
      </NuxtLink>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const sidebar = useToggleSidebar();
</script>

<style lang="scss" scoped>
.sidebar {
  transition: all 0.2s ease-in-out;
  // transform: translate(-250px);
}
</style>
