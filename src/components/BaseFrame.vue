<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from "axios"
import BaseHeader from './BaseHeader.vue'
import BaseMain from './BaseMain.vue'
import BaseAsider from './BaseAsider.vue'

const route = useRoute()
const router = useRouter()
const data = ref(null)
const num = ref(null)

const getData = async () => {
  await axios.get(`/data/1.json`)
    .then(response => {
      const totolNum = response.data['total_num']
      num.value = route.params.num ? route.params.num : totolNum
      if (num.value > totolNum)
        router.push({ name: 'NotFound' })
    })
    .catch(error => {
      console.log(error)
    })

  await axios.get(`/data/${num.value}.json`)
    .then(response => {
      data.value = response.data
    })
    .catch(error => {
      console.log(error)
    })
}

watch(() => route.params.num, () => {
  getData()
})

onMounted(() => {
  getData()
})

</script>

<template>
  <el-backtop :right="100" :bottom="100" />
  <el-container class="common-layout">
    <el-header>
      <router-link :to="{ name: 'home' }">
        <BaseHeader />
      </router-link>
    </el-header>
    <el-container v-if="data" v-loading="!data" class="main-aside-layout">
      <el-main class="main-layout">
        <BaseMain :data="data" />
      </el-main>
      <el-aside class="aside-layout hidden-sm-and-down">
        <BaseAsider :data="data" />
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