# superai-web

## 目录结构说明

```
public/                # 静态资源目录，index.html等
src/
  api/                 # 所有后端接口请求的封装
    index.js           # 示例接口封装
  assets/              # 静态资源（图片、样式等）
  components/          # 公共组件
  router/              # 路由配置
    index.ts           # 路由表
  views/               # 页面视图
    HomeView.vue       # 首页视图
    TeamApp/
      TeamAppList.vue      # 团队应用列表主页面
      TeamAppCard.vue      # 单个应用卡片组件
      TeamAppFilter.vue    # 筛选/搜索组件
      TeamAppCreate.vue    # 新建应用弹窗/页面
  App.vue              # 根组件
  main.js              # 入口文件，挂载Vue和路由
  store/
    modules/
      teamApp.ts           # 团队应用相关状态
```

## 说明
- `public/`：放置静态资源文件，最终会被复制到打包目录。
- `