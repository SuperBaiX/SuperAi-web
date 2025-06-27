<!--
  LeftNav.vue
  左侧图标导航栏组件
-->
<script setup lang="ts">
defineOptions({ name: 'LeftNav' })
const navs = [
  { key: 'app', label: '团队应用', icon: '📦' },
  { key: 'work', label: '工作台', icon: '🗂️' },
  { key: 'plugin', label: '插件', icon: '🔌' },
  { key: 'market', label: '市场', icon: '🛒' },
  { key: 'setting', label: '系统', icon: '⚙️' },
  { key: 'user', label: '用户', icon: '👤' }
]
</script>

<template>
  <nav class="left-nav">
    <div class="logo">X</div>
    <ul>
      <li v-for="item in navs" :key="item.key" :title="item.label">
        <span class="icon">{{ item.icon }}</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.left-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  background: #23233a;
  height: 100vh;
  border-right: 1px solid #22223b;
}
.logo {
  font-size: 32px;
  font-weight: bold;
  margin: 16px 0;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
  width: 100%;
}
li {
  text-align: center;
  padding: 16px 0;
  cursor: pointer;
}
li:hover {
  background: #35355a;
}
.icon {
  font-size: 22px;
}
</style> 