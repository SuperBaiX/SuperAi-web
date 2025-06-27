<!--
  SideMenu.vue
  侧边栏菜单组件，支持插槽和菜单项配置
-->
<template>
  <nav class="side-menu">
<!--    <div class="menu-logo">X</div>-->
    <ul>
      <li v-for="item in menu" :key="item.key" :class="{active: item.key === active}" @click="onSelect(item.key)">
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
  width: 200px;
  background: #22223b;
  color: #fff;
  height: 100vh;
  padding-top: 24px;
}
.menu-logo {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 12px 32px;
  cursor: pointer;
  transition: background 0.2s;
}
li.active, li:hover {
  background: #4a4e69;
}
</style> 