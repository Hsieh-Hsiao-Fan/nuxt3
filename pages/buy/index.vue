<script setup>
definePageMeta({
  middleware: ["auth"],
});
const route = useRoute();
const router = useRouter();

const store = useHomeStore();

let objectList = reactive({ path: "" });

/** SSR */
let fetchdata = await useAsyncData("getObj", async () => {
  const data = await $fetch(
    "http://127.0.0.1:8000/api/objects?page=" + route.query.page
  );
  store.setObjectData(data.data);
  return data;
});

objectList = fetchdata.data;

const currentPage1 = ref(2);

let tt = function (params) {
  console.log(currentPage1.value);

  // debugger;

  router.push({ path: "/buy", query: { page: currentPage1.value } });
  refreshNuxtData("getObj");
};

onMounted(async () => {});
</script>
<template>
  <div class="">
    <div class="py-4">買屋列表</div>
    <div class="flex mt-4">
      <NuxtLink
        v-for="(item, i) in store.objects.arr"
        :to="`/buy/${item.obj_no}`"
        class="p-4 mx-3 shadow-lg shadow-stone-300"
      >
        <h2>{{ item.title }}</h2>
        <h4>{{ item.obj_no }}</h4>
        <div class="w-128">
          <img class="w-64" :src="`${item.img1}`" />
          <p>地址：{{ item.addr }}</p>
          <p>類型：{{ item.type }}</p>
          <p>屋齡：{{ item.house_year }}</p>
          <p>價格：{{ item.price }}</p>
        </div>
      </NuxtLink>
    </div>
    <div class="flex justify-center mt-8 py-8">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="objectList.total"
        :page-size="2"
        v-model:current-page="currentPage1"
        @click="tt"
      />
    </div>
  </div>
</template>
