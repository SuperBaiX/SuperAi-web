// src/store/modules/index.ts
// 自动导入modules下所有模块
// 引入teamApp模块
import teamApp from './teamApp'
// 引入user模块
import user from './user'

// 导出所有模块对象，供主store注册
export default {
  teamApp,
  user
} 