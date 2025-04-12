<script setup>
import { RouterLink } from 'vue-router'
import { ArrowDown } from '@element-plus/icons-vue'
import BaseInfo from './BaseInfo.vue';

const props = defineProps(['data'])

const issueNumberArray = (totalNum) => {
  let issueNumberList = []
  for (let i = 1; i <= totalNum; i++) {
    issueNumberList.push(i)
  }
  return issueNumberList.reverse()
}

</script>

<template>
  <el-card shadow="never" body-style="padding: 0;">
    <template #header>
      <el-link class="title" :underline="false" :href="`https://www.bilibili.com/video/${props.data['bvid']}`"
        target="_blank">
        {{ `乐正绫新曲排行榜#${props.data['issue_number']}` }}
      </el-link>
      <el-dropdown class="card-dropdown hidden-md-and-up">
        <span class="el-dropdown-link card-dropdown-font">
          往期<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-scrollbar max-height="400px">
              <el-dropdown-item v-for="i in issueNumberArray(props.data['total_issue_number'])">
                <router-link :class="i !== props.data['issue_number'] ? 'card-dropdown-link' : 'card-dropdown-link-now'"
                  :to="{ name: 'weekly', params: { issueNumber: i } }">
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
        <BaseInfo :data="props.data['main_chart']" />
      </el-tab-pane>
      <el-tab-pane label="PICK UP">
        <template v-if="data['pk_flag']">
          <BaseInfo :data="props.data['pk']" />
        </template>
        <template v-else>
          <el-empty description="本期无新曲推荐" />
        </template>
      </el-tab-pane>
      <el-tab-pane label="副榜">
        <template v-if="data['sub_chart_flag']">
          <BaseInfo :data="props.data['sub_chart']" />
        </template>
        <template v-else>
          <el-empty description="本期稿件过少，无副榜" />
        </template>
      </el-tab-pane>
    </el-tabs>

  </el-card>
</template>

<style scoped>
.title {
  font-weight: 600;
  font-size: large;
  color: black;
}

.title:hover {
  color: #ff7f7f;
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

.card-dropdown-link {
  color: var(--el-text-color-regular);
  text-decoration: none;
}

.card-dropdown-link-now {
  color: #ff7f7f;
  font-weight: bold;
  text-decoration: none;
}

.tabs {
  border: none;
}

.tabs :deep(.el-tabs__header) .el-tabs__item:hover {
  color: #ff7f7f;
}

.tabs :deep(.el-tabs__header) .el-tabs__item.is-active {
  color: #ff7f7f;
}
</style>