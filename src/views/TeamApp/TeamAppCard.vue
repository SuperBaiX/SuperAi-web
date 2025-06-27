<!--
  TeamAppCard.vue
  单个应用卡片组件，展示应用图标、名称、描述、归属人等信息
-->
<template>
  <div class="app-card">
    <div class="app-icon">
      <!-- 应用图标，可用默认图标或app.icon -->
      <img :src="app.icon || defaultIcon" alt="icon" />
    </div>
    <div class="app-info">
      <div class="app-title">{{ app.name }}</div>
      <div class="app-desc">{{ app.desc || '暂无介绍' }}</div>
      <div class="app-meta">
        <span>{{ app.owner }}</span>
        <span>{{ app.time }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'TeamAppCard' })
import { defineProps } from 'vue'
// 定义props类型
const props = defineProps<{ app: any }>()
// 默认图标
const defaultIcon = 'https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/vue.svg'
</script>

<style scoped>
.app-card {
  width: 260px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px #0001;
  padding: 20px;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.app-card:hover {
  box-shadow: 0 4px 16px #0002;
}
.app-icon img {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}
.app-title {
  font-weight: bold;
  margin: 12px 0 4px 0;
}
.app-desc {
  color: #888;
  font-size: 14px;
  margin-bottom: 8px;
}
.app-meta {
  font-size: 12px;
  color: #aaa;
  display: flex;
  gap: 8px;
}
</style> 