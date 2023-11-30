<script setup>
definePageMeta({
  middleware: ["auth"],
});

const { data } = await useFetch("https://api.nuxtjs.dev/mountains", {
  onRequest({ request, options }) {
    // 設置 request headers
    options.headers = options.headers || {};
    options.headers.authorization = `Bearer token`;

    console.log(options.headers);
  },
  onResponse({ request, response, options }) {
    // console.log(response._data.data);
    // 處理請求回應的資料
    return response._data;
  },
});

// console.log(data);

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    },
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
      async: true,
    },
  ],
});
</script>

<template>
  <AboutHeader />
  <div v-for="(d, i) in data">{{ d.title }}</div>
  <div>Page: about Container</div>
  <UIBox />
</template>

<style scoped></style>
