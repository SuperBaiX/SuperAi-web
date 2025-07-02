<template>
  <!-- 页面主布局，包含左侧图标栏、中间菜单栏和主内容区 -->
  <div class="team-app-layout">
    <!-- 左侧图标导航栏 -->
    <LeftNav class="left-nav" />
    
    <!-- 中间侧边栏：根据选中菜单动态渲染 -->
    <ChatSideMenu v-if="selectedNav && selectedNav.key === 'chat'" class="side-menu" />
    <WorkSideMenu v-else-if="selectedNav && selectedNav.key === 'work'" class="side-menu" />
    <PluginSideMenu v-else-if="selectedNav && selectedNav.key === 'plugin'" class="side-menu" />
    <SettingSideMenu v-else-if="selectedNav && selectedNav.key === 'setting'" class="side-menu" />
    <UserSideMenu v-else-if="selectedNav && selectedNav.key === 'user'" class="side-menu" />
    <SideMenu v-else class="side-menu" />
    
    <!-- 主内容区：根据选中菜单动态渲染 -->
    <ChatMainContent v-if="selectedNav && selectedNav.key === 'chat'" class="main-content" />
    <WorkMainContent v-else-if="selectedNav && selectedNav.key === 'work'" class="main-content" />
    <PluginMainContent v-else-if="selectedNav && selectedNav.key === 'plugin'" class="main-content" />
    <SettingMainContent v-else-if="selectedNav && selectedNav.key === 'setting'" class="main-content" />
    <UserMainContent v-else-if="selectedNav && selectedNav.key === 'user'" class="main-content" />
    <div v-else class="main-content">
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
// 引入 ChatSideMenu 组件
import ChatSideMenu from './Chat/ChatSideMenu.vue'
// 引入 ChatMainContent 组件
import ChatMainContent from './Chat/ChatMainContent.vue'
// 引入 WorkSideMenu 组件
import WorkSideMenu from './Work/WorkSideMenu.vue'
// 引入 WorkMainContent 组件
import WorkMainContent from './Work/WorkMainContent.vue'
// 引入 PluginSideMenu 组件
import PluginSideMenu from './Plugin/PluginSideMenu.vue'
// 引入 PluginMainContent 组件
import PluginMainContent from './Plugin/PluginMainContent.vue'
// 引入 SettingSideMenu 组件
import SettingSideMenu from './Setting/SettingSideMenu.vue'
// 引入 SettingMainContent 组件
import SettingMainContent from './Setting/SettingMainContent.vue'
// 引入 UserSideMenu 组件
import UserSideMenu from './User/UserSideMenu.vue'
// 引入 UserMainContent 组件
import UserMainContent from './User/UserMainContent.vue'

// 获取Vuex store实例
const store = useStore()
// 计算属性：获取团队应用列表
const appList = computed(() => store.state.teamApp.list)
// 控制新建应用弹窗显示的响应式变量
const showCreate = ref(false)

// 获取当前选中菜单key和对象
const selectedKey = computed(() => store.state.navsApp.selectedKey)
const selectedNav = computed(() => store.getters.getNavsAppByKey(selectedKey.value))

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

/* 移除 .side-menu 样式，避免覆盖 base.css 的全局样式 */

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