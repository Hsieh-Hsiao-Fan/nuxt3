<script lang="ts" setup>
import { useLogingStore } from "@/stores/login";

const store = useLogingStore();

console.log("store", store.userData, store.loginStatus.status);
</script>

<template>
  <NuxtLoadingIndicator color="blue" :height="10" :throttle="0" />

  <div class="layout bg-neutral-100">
    <header class="header shadow-lg shadow-stone-300">
      <div class="container mx-auto py-3 flex justify-between">
        <NuxtLink to="/"><h1 class="text-3xl font-bold">TWHG</h1></NuxtLink>
        <div class="flex items-center">
          <div class="text-xl px-2 w-18 flex items-center">
            <i class="fa-solid fa-leaf"></i><span class="pl-1">ESG</span>
          </div>
          <div class="text-xl px-5 w-18">
            <NuxtLink to="/buy">買屋</NuxtLink>
          </div>
          <div class="text-xl px-5 w-18">
            <NuxtLink to="/sell">賣屋</NuxtLink>
          </div>
          <div class="text-xl px-5 w-18">
            <NuxtLink to="/sellSubject">主題找屋</NuxtLink>
          </div>
          <div class="text-xl px-5 w-18">
            <NuxtLink v-show="!store.loginStatus.status" to="/login"
              >登入</NuxtLink
            >

            {{ store.userData.name }}
          </div>
        </div>
      </div>
    </header>
    <div class="container mx-auto">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: #f60;
}
</style>
