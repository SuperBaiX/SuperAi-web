// src/store/modules/user.ts
// 用户模块，管理用户相关状态
// 引入Vuex的Module类型
import { Module } from 'vuex'
// 直接定义RootState类型，避免循环依赖
export interface RootState {
  // 可扩展全局state属性
}

// 用户模块state类型
export interface UserState {
  name: string
  age: number
}

// state初始值
const state: UserState = {
  name: '张三',
  age: 18
}

// 用户模块
const user: Module<UserState, RootState> = {
  namespaced: true, // 启用命名空间
  state,            // 注册state
  mutations: {
    setName(state, name: string) {
      state.name = name // 设置用户名称
    },
    setAge(state, age: number) {
      state.age = age // 设置用户年龄
    }
  },
  actions: {
    updateName({ commit }, name: string) {
      commit('setName', name) // 提交mutation设置名称
    }
  }
}

export default user // 导出用户模块 