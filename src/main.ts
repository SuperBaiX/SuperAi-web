// 引入全局样式文件
import './assets/main.css'

// 引入Vue的createApp方法，用于创建应用实例
import { createApp } from 'vue'
// 引入根组件App
import App from './App.vue'
// 引入路由实例（TypeScript）
import router from './router'
// 引入Vuex store
import store from './store'

// 创建Vue应用实例，并挂载路由和store
const app = createApp(App) // 创建应用实例，传入根组件App
app.use(router) // 使用路由插件
app.use(store) // 使用Vuex插件
app.mount('#app') // 挂载应用到页面的#app节点 