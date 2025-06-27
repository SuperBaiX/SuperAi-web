// src/router/index.ts
// 路由配置文件（TypeScript版）

// 引入Vue Router相关方法
import { createRouter, createWebHistory } from 'vue-router'
// 引入主页面组件
import TeamAppList from '@/views/TeamApp/TeamAppList.vue'

// 定义路由表，包含首页路由
const routes = [
  { path: '/', name: 'TeamApp', component: TeamAppList }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // 使用HTML5历史模式
  routes // 路由表
})

export default router // 导出路由实例 