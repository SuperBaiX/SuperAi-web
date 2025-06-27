// src/store/getters.ts
// 全局getters模块化导出
// 引入Vuex的GetterTree类型
import { GetterTree } from 'vuex'
// 引入根state类型
import type { RootState } from './modules/user'
import type { navsAppState } from './modules/navsApp'

// 定义全局getters对象，类型为GetterTree
const getters: GetterTree<RootState, RootState> = {
  // 获取用户名称
  userName: (state) => {
    // @ts-ignore
    return state.user?.name || ''
  },

  // 根据key获取左侧菜单对象
  getNavsAppByKey: (state) => (key: string) => {
    // @ts-ignore
    return state.navsApp?.list?.find(item => item.key === key)
  },
}

export default getters // 导出全局getters