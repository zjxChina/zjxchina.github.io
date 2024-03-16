<script setup>
import BaseFrame from '@/components/BaseFrame.vue';
</script>

<template>
  <main>
    <BaseFrame :num="Number($route.params.num)" />
  </main>
</template>
