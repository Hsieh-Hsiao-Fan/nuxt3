<script setup>
const { count, addCount } = useAddCount();
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <button @click="addCount">add</button>
  </div>
</template>

<style scoped></style>
