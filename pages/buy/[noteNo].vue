<script setup>
definePageMeta({
  middleware: ["auth"],
});
const route = useRoute();

/** SSR */
let data = reactive({});
let fetchdata = await useAsyncData("getObj", async () => {
  const data = await $fetch(
    "http://127.0.0.1:8000/api/objects/" + route.params.noteNo
  );

  return data;
});

data = fetchdata.data;
</script>

<template>
  <div class="mt-8">物件詳情</div>
  <div>
    <div>{{ route.params.obj_no }}</div>
    <div class="flex">
      <img :src="`${data.img1}`" alt="" srcset="" class="w-128" />
      <div class="ml-4">
        <p>名稱:{{ data.title }}</p>
        <p>總價:{{ data.price }}</p>
        <p>地址:{{ data.addr }}</p>
        <p>屋齡:{{ data.house_year }}</p>
      </div>
    </div>
  </div>
  <div class="mt-8">
    <div>
      <NuxtLink :to="`/buy/${route.params.noteNo}/desc`" class="mx-2"
        >詳細介紹</NuxtLink
      >
      <NuxtLink :to="`/buy/${route.params.noteNo}/env`" class="mx-2"
        >周邊環境</NuxtLink
      >
    </div>
    <div class="bg-white p-4 h-64">
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped></style>
