<!--
  LeftNav.vue
  左侧图标导航栏组件
-->
<script setup lang="ts">
// 引入Vue的ref和computed响应式API
import {ref, computed} from 'vue'
// 引入Vuex的useStore钩子
import {useStore} from 'vuex'


// 获取Vuex store实例
defineOptions({name: 'LeftNav'})
// 获取Vuex store实例
const store = useStore()
const activeKey = computed({
  get:()=>store.state.navsApp.selectedKey,
  set:(activeKey:string) =>store.commit('navsApp/setSelectedKey', activeKey)
})
// 计算属性：获取团队应用列表
const navsAppList = computed(() => store.state.navsApp.list)



const handleNavClick = (key: string) => {
  activeKey.value = key
  // 这里可以加路由跳转逻辑
  console.log(activeKey.value)
}
</script>

<template>
  <nav class="left-nav">
    <div class="logo-gradient">
      <span class="logo-text">AI</span>
    </div>
    <ul>
      <li
          v-for="item in navsAppList"
          :key="item.key"
          :title="item.label"
          :class="{ active: activeKey === item.key }"
          @click="handleNavClick(item.key)"
      >
        <div class="nav-item-inner">
          <span class="icon">{{ item.icon }}</span>
          <span class="nav-label">{{ item.label }}</span>
        </div>
      </li>
    </ul>
    <div class="left-nav-bottom">
      <div class="avatar" title="用户中心">
        <span style="font-size:18px;">👤</span>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.left-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  background: linear-gradient(180deg, #e3f0ff 0%, #b3d8ff 100%);
  height: 100vh;
  border-right: 1.5px solid #e0e6ed;
  box-shadow: 4px 0 24px #0002, 0 0 0 1px #e0e6ed;
  padding: 0;
  position: relative;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  z-index: 10;
  margin-left: 0;
}

.logo-gradient {
  margin: 28px 0 36px 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: linear-gradient(135deg, #409eff 0%, #6ae3ff 100%);
  box-shadow: 0 2px 8px #409eff33;
}

.logo-text {
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px #409eff44;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  cursor: pointer;
  border-radius: 18px;
  margin: 0 auto;
  width: 56px;
  transition: background 0.32s cubic-bezier(.4, 0, .2, 1), box-shadow 0.32s cubic-bezier(.4, 0, .2, 1), transform 0.22s cubic-bezier(.4, 0, .2, 1);
  position: relative;
  padding: 0;
  background: rgba(227, 240, 255, 0.12);
  outline: none;
  box-shadow: none;
  -webkit-tap-highlight-color: transparent;
}

li:focus {
  outline: none;
  box-shadow: none;
}

li:active {
  outline: none;
}

.nav-item-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

li:hover {
  background: linear-gradient(135deg, #eaf3ff 60%, #d6eaff 100%);
  box-shadow: 0 4px 18px #409eff22, 0 1.5px 6px #b3d8ff33;
  transform: scale(1.08);
}

li.active {
  background: linear-gradient(135deg, #409eff22 0%, #6ae3ff22 100%);
  box-shadow: 0 4px 16px #409eff33;
}

li.active::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 32px;
  border-radius: 4px;
  background: linear-gradient(180deg, #409eff 0%, #6ae3ff 100%);
}

.icon {
  font-size: 24px;
  color: #409eff;
  transition: color 0.2s;
  margin-bottom: 4px;
}

li.active .icon,
li:hover .icon {
  color: #0077ff;
}

.nav-label {
  display: block;
  font-size: 12px;
  color: #6b7b8a;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.5px;
  user-select: none;
  transition: color 0.2s;
  line-height: 1.2;
}

li.active .nav-label,
li:hover .nav-label {
  color: #0077ff;
}

.left-nav-bottom {
  margin-bottom: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e0e6ed 0%, #b3d8ff 100%);
  border: 2.5px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px #409eff22;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.15s;
}

.avatar:hover {
  box-shadow: 0 4px 16px #409eff44;
  transform: scale(1.08);
}
</style> 