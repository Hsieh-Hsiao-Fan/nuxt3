<script setup>
const route = useRoute();
</script>

<template>
  <div>{{ route.params.noteNo }}:desc</div>
</template>

<style scoped></style>
