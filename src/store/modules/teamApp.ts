// src/store/modules/teamApp.ts
// 团队应用模块，管理应用列表、筛选、搜索等
// 引入Vuex的Module类型
import { Module } from 'vuex'
// 引入根state类型
import type { RootState } from './user'

// 定义团队应用对象类型
export interface TeamApp {
  id: string
  name: string
  desc?: string
  icon?: string
  owner?: string
  time?: string
}

// 定义团队应用模块state类型
export interface TeamAppState {
  list: TeamApp[]
  originList: TeamApp[] // 新增：原始数据
}

// 原始应用数据数组
const originData: TeamApp[] = [
  { id: '1', name: 'pdf测试', desc: '暂无介绍', owner: '', time: '06-25' },
  { id: '2', name: 'super', desc: '暂无介绍', owner: '', time: '06-25' }
]

// state初始值，包含当前列表和原始数据
const state: TeamAppState = {
  list: [...originData],
  originList: [...originData]
}

// 定义团队应用模块
const teamApp: Module<TeamAppState, RootState> = {
  namespaced: true, // 启用命名空间
  state,            // 注册state
  mutations: {
    setList(state, list: TeamApp[]) {
      state.list = list // 设置当前应用列表
    }
  },
  actions: {
    search({ commit, state }, keyword: string) {
      if (!keyword) {
        commit('setList', state.originList) // 关键字为空，重置为原始数据
      } else {
        const filtered = state.originList.filter(app => app.name.includes(keyword)) // 过滤数据
        commit('setList', filtered) // 更新列表
      }
    },
    filter({ commit, state }, filter: string) {
      if (!filter) {
        commit('setList', state.originList) // 筛选条件为空，重置为原始数据
      } else {
        const filtered = state.originList.filter(app => app.name.includes(filter)) // 过滤数据
        commit('setList', filtered) // 更新列表
      }
    }
  }
}

export default teamApp // 导出团队应用模块 