// 引入Vuex的createStore方法
import { createStore } from 'vuex'
// 引入所有模块化store
import modules from './modules'
// 引入全局getters
import getters from './getters'
// 引入根state类型
import type { RootState } from './modules/user'

// 创建Vuex store实例，泛型指定根state类型
const store = createStore<RootState>({
  modules, // 注册所有模块
  getters  // 注册全局getters
})

export default store // 导出store实例 