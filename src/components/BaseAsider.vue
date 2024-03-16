<script setup>
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import axios from "axios"
import BaseImage from './BaseImage.vue';

const props = defineProps({
  num: {
    type: Number,
    required: true
  }
})

const data = ref({})
watch(() => props.num,
  (newNum) => {
    const jsonUrl = "/data/" + newNum + ".json"
    axios.get(jsonUrl)
      .then(response => {
        data.value = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
)

const jsonUrl = "/data/" + props.num + ".json"
axios.get(jsonUrl)
  .then(response => {
    data.value = response.data
  })
  .catch(error => {
    console.log(error)
  })

const numArray = function (totalNum, nowNum) {
  let numList = []
  for (let i = 1; i <= totalNum; i++) {
    if (i != nowNum)
      numList.push(i)
  }
  return numList.reverse()
}

const getCover = function (nowNum) {
  const paddedNumber = String(nowNum).padStart(3, '0');
  const rankUrl = "/cover/" + nowNum + "/cover_" + paddedNumber + ".png"
  return rankUrl
}

</script>

<template>
  <a :href="'https://www.bilibili.com/video/' + data['bvid']" target="_blank">
    <BaseImage :src="getCover(data['num'])" fit="contain" />
  </a>

  <el-card class="card" body-style="padding: 0">
    <template #header>
      <div class="text-body card-header-font">往期</div>
    </template>
    <div class="list-group list-group-flush text-center">
      <span v-for="i in numArray(data['total_num'], data['num'])">
        <router-link :to="{ name: 'weekly', params: { num: i } }" class="card-a list-group-item list-group-item-action">
          {{ '乐正绫新曲排行榜#' + i }}
        </router-link>
      </span>
    </div>
  </el-card>

</template>

<style scoped>
.card {
  margin-top: 5px;
}

.card-header-font {
  font-weight: 800;
  font-size: large;
}

.card-a {
  padding: 15px 0 15px 0;
}
</style>