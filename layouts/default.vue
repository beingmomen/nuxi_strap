

<template>
  <div
    class="full-layout min-h-screen flex gap-6"
    :class="[toggleSidebar, positionSidebar]"
  >
    <div class="overlay absolute" @click="closeSidebar"></div>
    <!-- @click="closeSidebar" -->
    <UiTheFullSidebar />

    <div class="grow">
      <UiTheNavbar />
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const sidebar = useToggleSidebar();
const fixedSidebar = useFixedSidebar();

const closeSidebar = () => {
  fixedSidebar.value = true;
};

const toggleSidebar = computed(() =>
  sidebar.value ? "full-sidebar" : "small-sidebar"
);
const positionSidebar = computed(() =>
  fixedSidebar.value ? "static-sidebar" : "fixed-sidebar"
);
</script>

<style scoped></style>



