<template>
  <!-- 页面主布局，包含左侧图标栏、中间菜单栏和主内容区 -->
  <div class="team-app-layout">
    <!-- 左侧图标导航栏 -->
    <LeftNav class="left-nav" />
    <!-- 中间侧边菜单栏 -->
    <SideMenu class="side-menu" />
    <!-- 主内容区 -->
    <div class="main-content">
      <!-- 应用卡片列表区域 -->
      <div class="card-list">
        <!-- 遍历应用列表，渲染每个应用卡片 -->
        <TeamAppCard
          v-for="app in appList"
          :key="app.id"
          :app="app"
          @click="onAppClick(app)"
        />
      </div>
      <!-- 新建应用弹窗，showCreate为true时显示 -->
      <TeamAppCreate v-if="showCreate" @close="showCreate = false" />
    </div>
  </div>
</template>

<script lang="ts" setup>
// 引入Vue的ref和computed响应式API
import { ref, computed } from 'vue'
// 引入Vuex的useStore钩子
import { useStore } from 'vuex'
// 引入左侧图标栏组件
import LeftNav from '@/components/Layout/LeftNav.vue'
// 引入中间菜单栏组件
import SideMenu from '@/components/Layout/SideMenu.vue'
// 引入应用卡片组件
import TeamAppCard from './TeamAppCard.vue'
// 引入新建应用弹窗组件
import TeamAppCreate from './TeamAppCreate.vue'

// 获取Vuex store实例
const store = useStore()
// 计算属性：获取团队应用列表
const appList = computed(() => store.state.teamApp.list)
// 控制新建应用弹窗显示的响应式变量
const showCreate = ref(false)

//navsApp值
const selectedKey = computed(() => store.state.navsApp.selectedKey)

// 搜索事件处理函数（已无实际用处，保留结构）
function onSearch(keyword: string) {
  store.dispatch('teamApp/search', keyword) // 分发Vuex action进行搜索
}
// 筛选事件处理函数（已无实际用处，保留结构）
function onFilter(filter: any) {
  store.dispatch('teamApp/filter', filter) // 分发Vuex action进行筛选
}
// 新建按钮事件处理函数，显示新建弹窗
function onCreate() {
  showCreate.value = true // 设置showCreate为true，显示弹窗
}
// 应用卡片点击事件处理函数
function onAppClick(app: any) {
  console.log("app:::",app)
  // 这里可以实现跳转详情页或弹窗等逻辑
}
</script>

<style scoped>
.team-app-layout {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.left-nav {
  width: 80px;
  min-width: 80px;
  background: #f7f8fa;
  color: #fff;
  height: 100vh;
  box-sizing: border-box;
  padding: 12px 0 0 0;
}

.side-menu {
  width: 200px;
  min-width: 200px;
  background: #fff;
  color: #000000;
  height: 100vh;
  padding-top: 24px;
  box-sizing: border-box;
}

.main-content {
  flex: 1;
  min-width: 0;
  padding: 24px;
  background: #f7f8fa;
  box-sizing: border-box;
  height: 100vh;
  overflow: auto;
}

.card-list {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 24px;
}
</style> 