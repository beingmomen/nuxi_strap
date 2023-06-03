
<template>
  <div>
    <label
      for="input-group-1"
      class="block mb-2 text-lg text-start font-medium text-gray-900 dark:text-white"
      >{{ label }}</label
    >
    <div class="relative mb-6">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <nuxt-icon class="text-[1.3rem]" :name="icon"></nuxt-icon>
      </div>
      <input
        type="text"
        id="input-group-1"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
  },
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "name@mail.com",
  },
});
defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
</style>