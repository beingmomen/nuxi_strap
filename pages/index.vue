<template>
  <h1 class="text-3xl font-bold underline text-center">Hello world!</h1>
  <p>{{ counterStore.counter }}</p>
  <button class="btn" @click="counterStore.assign()">Increase</button>
</template>

<script lang="ts" setup>
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
</script>


<style scoped>
</style>