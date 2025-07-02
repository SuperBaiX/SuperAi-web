<!--
  SideMenu.vue
  侧边栏菜单组件，支持插槽和菜单项配置
-->
<template>
  <nav class="side-menu">
<!--    <div class="menu-logo">X</div>-->
    <ul class="side-menu-list">
      <li v-for="item in menu" :key="item.key" :class="['side-menu-item', {active: item.key === active}]" @click="onSelect(item.key)">
        <span>{{ item.label }}</span>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
defineOptions({ name: 'SideMenu' })
import { ref } from 'vue'
// 菜单项配置
const menu = [
  { key: 'all', label: '全部' },
  { key: 'simple', label: '简易应用' },
  { key: 'workflow', label: '工作流' },
  { key: 'plugin', label: '插件市场' },
  { key: 'mcp', label: 'MCP服务' }
]
const active = ref('all')
function onSelect(key: string) {
  active.value = key
}
</script>

<style scoped>
.side-menu {
  width: 220px;
  min-width: 200px;
  background: #f7faff;   /* 浅灰蓝，整体明亮 */
  color: #333;
  height: 100vh;
  padding: 32px 0 0 0;
  box-sizing: border-box;
  border-right: 1px solid #e0e6ed;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.menu-logo {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
  color: #409eff;
}
ul {
  list-style: none;
  padding: 0 0 0 8px;
  margin: 0;
  flex: 1;
}
li {
  padding: 12px 24px;
  border-radius: 8px 0 0 8px;
  margin-bottom: 4px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent; /* 默认无背景 */
}
li.active, li:hover {
  background: #eaf3ff;
  color: #409eff;
  font-weight: bold;
}
.menu-divider {
  height: 1px;
  background: #e0e6ed;
  margin: 16px 0;
}
</style> 