<template>
  <div>
    <!-- Breadcrumb -->
    <nav
      class="flex mb-5 px-5 py-3 text-dark rounded-lg bg-white shadow"
      aria-label="Breadcrumb"
    >
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <NuxtLink
            to="/"
            class="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-800"
          >
            <nuxt-icon
              class="text-[.9rem] w-4 h-4 mr-2"
              name="home"
            ></nuxt-icon>
            Home
          </NuxtLink>
        </li>
        <li>
          <div class="flex items-center">
            <nuxt-icon class="text-[1.5rem]" name="chevron-right"></nuxt-icon>
            <NuxtLink
              to="/activities"
              class="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-800"
            >
              Activities
            </NuxtLink>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <nuxt-icon class="text-[1.5rem]" name="chevron-right"></nuxt-icon>

            <span
              class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
            >
              Create
            </span>
          </div>
        </li>
      </ol>
    </nav>

    <div
      class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        You can create activity
      </h5>

      <div class="grid grid-cols-1 gap-4">
        <FormInput
          v-model="name"
          label="Activity name"
          placeholder="Activity name"
          icon="activity"
        />

        <FormInputFile
          v-model="image"
          label="Activity image"
          :current-image="currentImage"
        />
      </div>

      <div class="mt-6 flex justify-end">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
          @click="create"
        >
          <svg
            aria-hidden="true"
            class="inline w-4 h-4 mr-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>

          Create
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useActivities } from "@/composables/useActivities";

const { params } = useRoute();

console.warn("route", params);

const { name, image, create } = useActivities();

const currentImage = ref([]);
</script>

<style lang="scss" scoped>
</style>