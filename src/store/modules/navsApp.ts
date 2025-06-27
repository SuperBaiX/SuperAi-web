/**
 * 一级左侧菜单栏
 * @module store/navsApp
 */
import {Module} from 'vuex'
import type {RootState} from "./user";

/**
 * 定义一级左侧菜单栏对象类型
 */
export interface navsApp {
    id: string,
    key: string,
    label: string,
    icon: string
}

/**
 * 定义一级左侧菜单栏模块state类型
 */
export interface navsAppState {
    list: navsApp[]
    originList: navsApp[]
    selectedKey: string
}

/**
 * 原始应用数据数组
 */
const originData: navsApp[] = [
    {id: '1', key: 'chat', label: '聊天', icon: '📦'},
    {id: '2', key: 'work', label: '工作台', icon: '🗂️'},
    {id: '3', key: 'plugin', label: '知识库', icon: '🔌'},
    {id: '4', key: 'setting', label: '系统', icon: '⚙️'},
    {id: '5', key: 'user', label: '用户', icon: '👤'}
]

/**
 * state初始值，包含当前列表和原始数据
 */
const state: navsAppState = {
    list: [...originData],
    originList: [...originData],
    selectedKey: originData[1].key
}

/**
 * 定义一级左侧菜单栏模块
 *
 * @module store/navsApp // 模块的路径，表示该模块的位置
 * @namespace navsApp // 定义模块的命名空间，用于区分不同模块
 * @returns {Module<navsAppState, RootState>} // 返回一个 Vuex 模块，包含 navsAppState 类型的状态和 RootState 的根状态类型
 */
const navsApp: Module<navsAppState, RootState> = {
    namespaced: true, // 启用命名空间，确保模块内的状态、突变和动作不会与其他模块冲突

    state, // 注册定义的 state 类型，包含模块的状态数据

    mutations: {
        /**
         * 设置列表数据
         *
         * @param {navsAppState} state - 当前模块的状态
         * @param {navsApp[]} list - 要设置的新列表数据，类型为 navsApp 数组
         */
        setList(state, list: navsApp[]) {
            state.list = list; // 更新当前模块的 list 状态为传入的 list
        },
        setSelectedKey(state, key: string) {
            state.selectedKey = key;
        }
    },

    actions: {
        /**
         * 根据关键词搜索列表
         *
         * @param {Object} context - 包含 commit 和 state 的上下文对象
         * @param {string} keyword - 搜索的关键词
         */
        search({ commit, state }, keyword: string) {
            if (!keyword) {
                // 如果关键词为空，重置为原始数据
                commit('setList', state.originList); // 提交 mutation 更新列表为原始数据
            } else {
                // 过滤列表，查找包含关键词的项
                const filtered = state.originList.filter(app => app.label.includes(keyword)); // 根据关键词过滤数据
                commit('setList', filtered); // 提交 mutation 更新列表为过滤后的数据
            }
        },

        /**
         * 根据筛选条件过滤列表
         *
         * @param {Object} context - 包含 commit 和 state 的上下文对象
         * @param {string} filter - 筛选条件
         */
        filter({ commit, state }, filter: string) {
            if (!filter) {
                // 如果筛选条件为空，重置为原始数据
                commit('setList', state.originList); // 提交 mutation 更新列表为原始数据
            } else {
                // 过滤列表，查找包含筛选条件的项
                const filtered = state.originList.filter(app => app.label.includes(filter)); // 根据筛选条件过滤数据
                commit('setList', filtered); // 提交 mutation 更新列表为过滤后的数据
            }
        }
    }
};

export default navsApp; // 导出navs模块