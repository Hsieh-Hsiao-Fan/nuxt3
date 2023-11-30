<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div>
    <NuxtLink to="/sellSubject">主題找屋介紹</NuxtLink>
    <NuxtLink to="/sellSubject/map">地圖找屋</NuxtLink>
    <NuxtLink to="/sellSubject/traffic">交通找屋</NuxtLink>
  </div>
  <main>
    <NuxtPage />
  </main>
</template>

<style scoped></style>
