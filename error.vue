<template>
  <NuxtLayout
    ><div class="prose">
      <h1>Dang</h1>
      <p>Something broke</p>
      <p>Sorry</p>
      <strong>{{ error.message }}</strong>
      <a class="hover:cursor-pointer" @click="handleError">Login again </a>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: "/login",
  });
};
</script>

<style lang="scss" scoped></style>