<template>
  <div>Guest</div>
</template>

<script setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/about",
  },
});
</script>

<style lang="scss" scoped>
</style>