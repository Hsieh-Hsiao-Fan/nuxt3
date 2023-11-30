<script setup>
const text = ref("");

function search() {
  alert(text.value);
}
</script>

<template>
  <div class="flex justify-center items-center mt-6">
    <input
      class="rounded-lg w-64 p-3 border-2 border-solid border-gray-300"
      type="text"
      name=""
      id=""
      placeholder="search"
      v-model="text"
    />
    <button @click="search">
      <i class="ml-4 text-3xl text-gray-400 fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
</template>

<style scoped></style>
