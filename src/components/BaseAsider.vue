<script setup>
import { RouterLink } from 'vue-router'
import BaseImage from './BaseImage.vue';

const props = defineProps(['data'])

const numArray = (totalNum, nowNum) => {
  let numList = []
  for (let i = 1; i <= totalNum; i++) {
    if (i != nowNum)
      numList.push(i)
  }
  return numList.reverse()
}

const getCover = (nowNum) => {
  const paddedNumber = String(nowNum).padStart(3, '0');
  const rankUrl = "/cover/" + nowNum + "/cover_" + paddedNumber + ".png"
  return rankUrl
}

</script>

<template>
  <a :href="'https://www.bilibili.com/video/' + props.data['bvid']" target="_blank">
    <BaseImage :src="getCover(props.data['num'])" fit="contain" />
  </a>

  <el-card class="card" body-style="padding: 0">
    <template #header>
      <div class="text-body card-header-font">往期</div>
    </template>
    <el-scrollbar max-height="550px">
      <div class="list-group list-group-flush text-center">
        <span v-for="i in numArray(props.data['total_num'], props.data['num'])">
          <router-link :to="{ name: 'weekly', params: { num: i } }"
            class="card-a list-group-item list-group-item-action">
            {{ '乐正绫新曲排行榜#' + i }}
          </router-link>
        </span>
      </div>
    </el-scrollbar>
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