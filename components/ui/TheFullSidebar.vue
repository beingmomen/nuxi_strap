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
    <ul class="menu menu-list py-4 pe-2 text-base-content">
      <li class="menu-link">
        <NuxtLink to="/">
          <nuxt-icon class="text-[1.5rem]" name="home"></nuxt-icon>
          <span class="menu-text">Home</span>
        </NuxtLink>
      </li>
      <li class="menu-link">
        <NuxtLink to="/activities">
          <nuxt-icon class="text-[1.5rem]" name="grid"></nuxt-icon>
          <span class="menu-text">Activities</span>
        </NuxtLink>
      </li>
      <li class="menu-link">
        <NuxtLink to="/coaches">
          <nuxt-icon class="text-[1.5rem]" name="coach"></nuxt-icon>
          <span class="menu-text">Coaches</span>
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script setup>
const sidebar = useToggleSidebar();
</script>

<style lang="scss" scoped>
.sidebar {
  transition: all 0.2s ease-in-out;
  // transform: translate(-250px);
}
</style>
