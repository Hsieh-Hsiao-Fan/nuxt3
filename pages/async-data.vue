<script setup>
const { data, pending, error, refresh } = await useAsyncData("test", () => {
  return $fetch("https://api.nuxtjs.dev/mountains");
});

console.log(data);
</script>

<template>
  <div>
    <button @click="refresh">refresh</button>
    <div>asyncData{{ data }}</div>
  </div>
</template>

<style scoped></style>
