<template>
  <!-- Breadcrumb -->
  <nav
    class="flex mb-5 px-5 py-3 text-dark rounded-lg bg-white shadow-ms"
    aria-label="Breadcrumb"
  >
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <NuxtLink
          to="/"
          class="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-800"
        >
          <nuxt-icon class="text-[.9rem] w-4 h-4 mr-2" name="home"></nuxt-icon>
          Home
        </NuxtLink>
      </li>
      <li aria-current="page">
        <div class="flex items-center">
          <nuxt-icon class="text-[1.5rem]" name="chevron-right"></nuxt-icon>
          <span
            class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
          >
            Activities
          </span>
        </div>
      </li>
    </ol>
  </nav>

  <UtilsTheTable
    path="/activities"
    row="activity"
    :headers="headers"
    :all-data="store.allData"
    @deleteItem="deleteOne($event)"
  />
</template>

<script setup>
import { useActivities } from "@/composables/useActivities";
const { getAll, headers, deleteOne } = useActivities();
getAll();

const store = useActivitiesStore();

// const all = computed(() => {
//   return allData;
// });
</script>

<style lang="scss" scoped>
</style>