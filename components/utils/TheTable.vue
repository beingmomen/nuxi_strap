<template>
  <div class="overflow-x-auto w-full bg-white pt-3 shadow-ms rounded-lg">
    <div class="flex items-center justify-between mb-3">
      <div class="w-full md:w-1/4 ps-4">
        <form class="flex items-center">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <nuxt-icon class="text-[1.3rem]" name="search"></nuxt-icon>
            </div>
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-primary-500 light:focus:border-primary-500"
              placeholder="Search"
              required=""
            />
          </div>
        </form>
      </div>
      <NuxtLink :to="`${path}/create`">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <nuxt-icon class="text-[1.3rem]" name="add"></nuxt-icon>

          Add {{ row }}
        </button>
      </NuxtLink>
    </div>
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th v-for="(header, i) in headers" :key="`header-${i}`">
            {{ header.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="row in allData" :key="`row-${row.id}`">
          <template v-for="({ key, label }, i) in headers" :key="`header-${i}`">
            <td v-if="key == 'avatar'">
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img :src="row[label.toLowerCase()]" :alt="row[label]" />
                  </div>
                </div>
              </div>
            </td>
            <td v-else-if="key == 'actions'">
              <div class="flex gap-2 items-center">
                <NuxtLink :to="`${path}/${row.slug}-${row.id}`">
                  <nuxt-icon
                    class="text-[1.3rem] text-blue-500 cursor-pointer"
                    name="edit"
                  >
                  </nuxt-icon>
                </NuxtLink>
                <nuxt-icon
                  :data-modal-target="`popup-modal-${row.id}`"
                  :data-modal-toggle="`popup-modal-${row.id}`"
                  class="text-[1.3rem] text-red-500 cursor-pointer"
                  name="trash-can"
                ></nuxt-icon>
              </div>
            </td>
            <td v-else>
              {{ row[key] }}
            </td>
          </template>
          <ModalsDelete
            :the-id="row.id"
            @deleteItem="$emit('deleteItem', row.id)"
          >
            <template #message>
              Are you sure you want to delete this item
              <span class="text-blue-700"> {{ row.name }}</span>
              ?
            </template>
          </ModalsDelete>
          <Teleport to="body"> </Teleport>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th v-for="(header, i) in headers" :key="`footer-${i}`">
            {{ header.label }}
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  headers: {
    type: Array,
    required: true,
  },
  allData: {
    type: Array,
    required: true,
  },
  row: {
    type: String,
    required: true,
  },
});
defineEmits(["deleteItem"]);

const test = async (row) => {
  console.warn("tests", id.target);
  await navigateTo("/");
};
</script>

<style lang="scss" scoped>
</style>