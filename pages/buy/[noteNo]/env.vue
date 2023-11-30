<script setup>
const route = useRoute();
</script>

<template>
  <div>{{ route.params.noteNo }}:env</div>
</template>

<style scoped></style>
