// src/store/getters.ts
// 全局getters模块化导出
// 引入Vuex的GetterTree类型
import { GetterTree } from 'vuex'
// 引入根state类型
import type { RootState } from './modules/user'

// 定义全局getters对象，类型为GetterTree
const getters: GetterTree<RootState, RootState> = {
  // 示例：获取用户名称（假设user模块已注册）
  // @ts-ignore
  userName: (state) => {
    // 需确保user模块已注册到store
    // @ts-ignore
    return state.user?.name || '' // 返回user模块的name属性
  }
}

export default getters // 导出全局getters 