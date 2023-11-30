<script setup>
definePageMeta({
  middleware: ["auth"],
});
const store = useHomeStore();

const { $hello } = useNuxtApp();

const date = ref(new Date());
</script>

<template>
  <div>
    <HomeKview />
    <UIBoxSearchBar />
    <v-date-picker v-model="date" />

    <h1 v-timeformat="'2021-09-16T01:52:45.780Z'"></h1>
    <p>{{ store.count }}</p>
    <p>{{ $hello("Fan") }}</p>
    <button @click="store.add()">add</button>
  </div>
</template>

<style scoped></style>
