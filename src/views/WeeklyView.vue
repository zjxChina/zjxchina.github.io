<script setup>
import { ref } from 'vue'
import axios from "axios"
import BaseFrame from '@/components/BaseFrame.vue';

const data = ref({})
const jsonUrl = "/data/1.json"
axios.get(jsonUrl)
  .then(response => {
    data.value = response.data
  })
  .catch(error => {
    console.log(error)
  })

</script>

<template>
  <main>
    <BaseFrame :num="Math.min(Number($route.params.num), Number(data['total_num']))" />
  </main>
</template>
