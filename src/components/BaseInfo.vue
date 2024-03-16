<script setup>
import BaseImage from './BaseImage.vue';

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <ul class="list-group list-group-flush">
    <li v-for="item in data" class="list-group-n list-group-item">
      <el-row type="flex" align="middle">
        <el-col :span="3" :xs="4">
          <div class="rank rank-n hidden-xs-only">{{ item['index'] }}</div>
          <div class="rank rank-xs hidden-sm-and-up">{{ item['index'] }}</div>
        </el-col>
        <el-col :span="13" :xs="20">
          <div class="title">
            <a class="text-body text-decoration-none text-start"
              :href="'https://www.bilibili.com/video/' + item['bvid']" target="_blank">
              {{ item['title'] }}
            </a>
          </div>
          <div class="descriptions">
            <el-descriptions>
              <el-descriptions-item label="总分" >{{ item['score'] }}</el-descriptions-item>
              <el-descriptions-item label="发布时间" span="2">{{ item['pubdate_str'] }}</el-descriptions-item>
              <el-descriptions-item label="播放" width="145">{{ item['view'] }}</el-descriptions-item>
              <el-descriptions-item label="收藏" width="145">{{ item['favorite'] }}</el-descriptions-item>
              <el-descriptions-item label="评论" width="145">{{ item['reply'] }}</el-descriptions-item>
              <el-descriptions-item label="硬币">{{ item['coin'] }}</el-descriptions-item>
              <el-descriptions-item label="弹幕">{{ item['danmaku'] }}</el-descriptions-item>
              <el-descriptions-item label="点赞">{{ item['like'] }}</el-descriptions-item>
            </el-descriptions>
          </div>
        </el-col>
        <el-col :span="8" class="hidden-xs-only">
          <div class="cover-image">
            <a :href="'https://www.bilibili.com/video/' + item['bvid']" target="_blank">
              <BaseImage :src="item['pic_url']" fit="contain" />
            </a>
          </div>
        </el-col>
      </el-row>
    </li>
  </ul>
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
}

.rank-xs {
  width: 45px;
  height: 45px;
  font-size: 28px;
  font-weight: 600;
}

.rank-n {
  width: 60px;
  height: 60px;
  font-size: 35px;
  font-weight: 600;
}

.list-group-n {
  padding: 15px 0 6px 0;
}

.title {
  display: flex;
  margin-bottom: 15px;
}

.descriptions {
  margin-left: 5px;
}

.cover-image {
  width: 75%;
  margin: auto;
}
</style>