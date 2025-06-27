# TeamApp模块化页面说明

## 目录结构

```
src/
  views/
    TeamApp/
      TeamAppList.vue      # 团队应用主页面，整体布局、卡片列表、弹窗等
      TeamAppCard.vue      # 单个应用卡片
      TeamAppFilter.vue    # 筛选/搜索组件
      TeamAppCreate.vue    # 新建应用弹窗
  components/
    Layout/
      SideMenu.vue         # 侧边栏菜单
      TopBar.vue           # 顶部栏（含搜索、新建按钮）
  store/
    modules/
      teamApp.ts           # 团队应用相关状态、actions、mutations
```

## 组件说明

- **TeamAppList.vue**：页面主入口，负责整体布局，组织侧边栏、顶部栏、筛选、卡片列表和新建弹窗。
- **TeamAppCard.vue**：渲染单个应用卡片，接收app对象作为props。
- **TeamAppFilter.vue**：筛选/搜索组件，输入关键字后emit filter事件。
- **TeamAppCreate.vue**：新建应用弹窗，表单提交后可调用store action。
- **SideMenu.vue**：左侧菜单，支持菜单项配置和高亮。
- **TopBar.vue**：顶部栏，含搜索框和新建按钮，emit事件给父组件。
- **teamApp.ts**：Vuex模块，管理团队应用列表、搜索、筛选等状态。

## 用法说明

1. 在路由中配置 `TeamAppList.vue` 作为主页面：

```ts
import { createRouter, createWebHistory } from 'vue-router'
import TeamAppList from '@/views/TeamApp/TeamAppList.vue'

const routes = [
  { path: '/', name: 'TeamApp', component: TeamAppList }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

2. 页面和组件均为高度模块化，便于维护和扩展。
3. 团队应用数据、搜索、筛选等通过Vuex统一管理，方便后续对接后端接口。
4. 每个组件自带基础样式，可根据实际UI需求调整。

---

如需扩展更多模块（如详情页、编辑页等），可在`views/TeamApp/`目录下继续添加，并在store中扩展对应状态和actions。 

