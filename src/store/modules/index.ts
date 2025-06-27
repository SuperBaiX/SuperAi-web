// src/store/modules/index.ts
// 自动导入modules下所有模块
// 引入teamApp模块
import navsApp from './navsApp'
import teamApp from './teamApp'
import user from './user'

// 导出所有模块对象，供主store注册
export default {
  navsApp,
  teamApp,
  user
} 