<script setup>
import BaseHeader from './BaseHeader.vue';
</script>

<template>
  <el-backtop :right="100" :bottom="100" />
  <el-container class="common-layout">
    <el-header>
      <router-link :to="{ name: 'home' }">
        <BaseHeader />
      </router-link>
    </el-header>
    <el-container>
      <el-main>
        <el-empty description="404 NOT FOUND" :image-size="145">
          <el-text size="large">
            您访问的页面不存在，请返回<router-link to="/">首页</router-link>
          </el-text>
        </el-empty>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.common-layout {
  width: 90%;
  margin: auto;
  background-color: #EBEAEA;
}

.el-container {
  height: 100%;
}

.el-header {
  padding: 0;
  text-align: center;
  height: auto;
}

.el-backtop {
  color: #ff7f7f;
}

@media (max-width: 992px) {
  .main-layout {
    margin-right: 0px;
  }
}

@media (max-width: 768px) {
  .common-layout {
    width: 100%;
  }
}
</style>