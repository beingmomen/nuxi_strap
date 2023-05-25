<template>
  <ul
    class="menu h-screen bg-base-100 rounded-box fixed md:static p-2 w-80 text-base-content"
  >
    <li class="logo mb-2 mx-[5.500px]">
      <NuxtLink to="/" class="text-xl font-bold hover:bg-inherit p-0">
        <div class="w-12">
          <img src="/imgs/logo.png" />
        </div>
        <span> Nuxi Strap </span>
      </NuxtLink>
    </li>
  </ul>

  <ul>
    <li>
      <NuxtLink to="/admins">
        <icon icon="fa-solid fa-user" />
        <p class="mx-2">admins</p>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  routes: Array,
});
</script>

<style lang="scss" scoped></style>
