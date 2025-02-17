<script setup>
import { Link } from '@element-plus/icons-vue'
import BaseImage from './BaseImage.vue';

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <el-card v-for="(item, index) in data" :key="index"
    :class="index !== data.length - 1 ? 'info-card info-card-normal' : 'info-card info-card-last'" shadow="never">
    <el-row align="middle">
      <el-col :span="3" align="middle">
        <div class="rank">{{ item['index'] }}</div>
      </el-col>
      <el-col :span="13" :xs="21">
        <el-descriptions class="descriptions" :column="3">
          <el-descriptions-item span="3">
            <el-link class="title" :underline="false" :href="`https://www.bilibili.com/video/${item['bvid']}`"
              target="_blank">
              {{ item['title'] }}
            </el-link>
          </el-descriptions-item>
          <el-descriptions-item label="总分">{{ item['score'] }}</el-descriptions-item>
          <el-descriptions-item label="UP主" span="2">
            <el-link :icon="Link" :underline="false" :href="`https://space.bilibili.com/${item['mid']}`" target="_blank"
              style="margin-top: 0px;">
              {{ item['author'] }}
            </el-link>
          </el-descriptions-item>
          <el-descriptions-item label="播放" width="145">{{ item['view'] }}</el-descriptions-item>
          <el-descriptions-item label="收藏" width="145">{{ item['favorite'] }}</el-descriptions-item>
          <el-descriptions-item label="评论" width="145">{{ item['reply'] }}</el-descriptions-item>
          <el-descriptions-item label="硬币">{{ item['coin'] }}</el-descriptions-item>
          <el-descriptions-item label="弹幕">{{ item['danmaku'] }}</el-descriptions-item>
          <el-descriptions-item label="点赞">{{ item['like'] }}</el-descriptions-item>
          <el-descriptions-item label="发布时间" span="3">{{ item['pubdate'] }}</el-descriptions-item>
        </el-descriptions>
      </el-col>
      <el-col :span="8" class="hidden-xs-only" align="middle">
        <el-card class="image-card">
          <el-link :underline="false" :href="`https://www.bilibili.com/video/${item['bvid']}`" target="_blank">
            <BaseImage :src="item['pic_url']" fit="contain" />
          </el-link>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>

<style scoped>
.rank {
  margin: auto;
  border-radius: 50%;
  background: #ff7f7f;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  font-size: 35px;
  font-weight: 600;
}

.descriptions {
  margin-left: 5px;
}

.title {
  font-size: medium;
  color: black;
}

.title:hover {
  color: #ff7f7f;
}

.el-link:hover {
  color: #ff7f7f;
}

.info-card {
  border-radius: 0px;
}

.info-card-normal {
  border-top: none;
  border-right: none;
  border-left: none;
}

.info-card-last {
  border: none;
}

.info-card :deep(.el-card__body) {
  padding-left: 0px;
  padding-right: 0px;
}

.image-card {
  width: 192px;
  height: 108px;
}

.image-card :deep(.el-card__body) {
  padding: 0;
}

@media (max-width: 768px) {
  .rank {
    width: 50px;
    height: 50px;
    font-size: 30px;
  }
}

@media (max-width: 576px) {
  .rank {
    width: 35px;
    height: 35px;
    font-size: 20px;
  }
}
</style>