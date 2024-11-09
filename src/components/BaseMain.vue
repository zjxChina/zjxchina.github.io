<script setup>
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDown } from '@element-plus/icons-vue'
import axios from "axios"
import BaseInfo from './BaseInfo.vue';

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

</script>

<template>
  <el-card class="card" body-style="padding: 0">
    <template #header>
      <div class="card-header-font">
        <a class="text-body text-decoration-none" :href="'https://www.bilibili.com/video/' + data['bvid']"
          target="_blank">
          {{ '乐正绫新曲排行榜#' + props.num }}
        </a>
      </div>

      <el-dropdown class="card-dropdown hidden-md-and-up">
        <span class="el-dropdown-link card-dropdown-font">
          往期<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-scrollbar max-height="400px">
              <el-dropdown-item v-for="i in numArray(data['total_num'], data['num'])">
                <router-link :to="{ name: 'weekly', params: { num: i } }" class="text-body text-decoration-none">
                  {{ '乐正绫新曲排行榜#' + i }}
                </router-link>
              </el-dropdown-item>
            </el-scrollbar>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

    </template>

    <el-tabs type="border-card" :stretch="true" class="tabs">
      <el-tab-pane label="主榜">
        <BaseInfo :data="data['zb']" />
      </el-tab-pane>
      <el-tab-pane label="PICK UP">
        <template v-if="data['pk_flag']">
          <BaseInfo :data="data['pk']" />
        </template>
        <template v-else>
          <el-empty description="本期无新曲推荐" />
        </template>
      </el-tab-pane>
      <el-tab-pane label="副榜">
        <template v-if="data['fb_flag']">
          <BaseInfo :data="data['fb']" />
        </template>
        <template v-else>
          <el-empty description="本期稿件过少，无副榜" />
        </template>
      </el-tab-pane>
    </el-tabs>

  </el-card>
</template>

<style>
.card-header-font {
  font-weight: 800;
  font-size: large;
}

.card-dropdown {
  display: flex;
  margin-top: 10px;
  justify-content: center;
}

.card-dropdown-font {
  font-size: 14px;
}

.el-dropdown-link:focus {
  outline: none;
}

.tabs>.el-tabs__content {
  padding: 0;
}

.tabs>.el-tabs__header .el-tabs__item:hover {
  color: #ff7f7f !important;
}

.tabs>.el-tabs__header .el-tabs__item.is-active {
  color: #ff7f7f;
}
</style>