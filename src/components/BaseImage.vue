<script setup>
import { Picture as IconPicture } from '@element-plus/icons-vue'
defineProps({
  src: {
    type: String,
    required: true
  },
  fit: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="block">
    <el-image :src="src" :fit="fit">
      <template #placeholder>
        <div class="image-slot">
          <el-icon><icon-picture /></el-icon>
        </div>
      </template>
      <template #error>
        <div class="image-slot">
          <el-icon><icon-picture /></el-icon>
        </div>
      </template>
    </el-image>
  </div>
</template>

<style scoped>
.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  color: var(--el-text-color-secondary);
  font-size: 50px;
}
</style>