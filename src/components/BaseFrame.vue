<script setup>
import BaseHeader from './BaseHeader.vue';
import BaseMain from './BaseMain.vue';
import BaseAsider from './BaseAsider.vue';

const props = defineProps({
  num: {
    type: Number,
    required: true
  }
})

</script>

<template>
  <el-backtop :right="100" :bottom="100" />
  <el-container class="common-layout">
    <el-header>
      <BaseHeader />
    </el-header>
    <el-container class="main-aside-layout">
        <el-main class="main-layout">
          <BaseMain :num="num" />
        </el-main>
        <el-aside class="aside-layout hidden-sm-and-down">
          <BaseAsider :num="num" />
        </el-aside>
    </el-container>
  </el-container>
</template>

<style scoped>
.common-layout {
  width: 90%;
  margin: auto;
  background-color: #EBEAEA;
}

.main-aside-layout {
  margin: 5px 15px 15px 15px;
}

.main-layout {
  margin-right: 8px;
  padding: 0;
}

.aside-layout {
  margin-left: 8px;
  padding: 0;
}

.el-container {
  height: 100%;
}

.el-header {
  padding: 0;
  text-align: center;
  height: auto;
}

.el-aside {
  width: 30%;
  text-align: center;
}

.el-main {
  width: 70%;
  text-align: center;
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