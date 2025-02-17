<script setup>
import { RouterLink } from 'vue-router'
import BaseImage from './BaseImage.vue';

const props = defineProps(['data'])

const numArray = (totalNum) => {
  let numList = []
  for (let i = 1; i <= totalNum; i++) {
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
  <el-link class="title" :underline="false" :href="`https://www.bilibili.com/video/${props.data['bvid']}`"
    target="_blank">
    <BaseImage :src="getCover(props.data['num'])" fit="contain" />
  </el-link>

  <el-card class="card" body-style="padding: 0">
    <template #header>
      <div class="card-header-font">往期</div>
    </template>
    <el-scrollbar max-height="550px">
      <template v-for="i in numArray(props.data['total_num'])">
        <router-link :to="{ name: 'weekly', params: { num: i } }">
          <el-button :class="i !== props.data['num'] ? 'button-link' : 'button-link-now'">{{ '乐正绫新曲排行榜#' + i }}</el-button>
        </router-link>
      </template>
    </el-scrollbar>
  </el-card>
</template>

<style scoped>
.card {
  margin-top: 5px;
}

.card-header-font {
  font-weight: 600;
  font-size: large;
  color: black;
}

.el-button {
  width: 100%;
  padding: 30px 0px;
  font-size: medium;
  border-radius: 0px;
  border-top: none;
  border-right: none;
  border-left: none;
}

.el-button:hover {
  background-color: #f8f9fa;
  border-color: var(--el-border-color);
}

.button-link {
  color: black;
}

.button-link-now {
  color: #ff7f7f;
  font-weight: bold;
}
</style>