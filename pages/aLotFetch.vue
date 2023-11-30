<script setup>
const [{ data: orgsData }, { data: reposData }] = await Promise.all([
  $fetch(`https://api.github.com/orgs/nuxt`),
  $fetch(`https://api.github.com/orgs/nuxt/repos`),
]);
</script>

<template>
  <div>
    多個fetch

    {{ orgsData }}
  </div>
</template>

<style scoped></style>
