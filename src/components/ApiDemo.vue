<template>
  <!-- 页面布局，包含一个按钮和显示接口返回数据的区域 -->
  <div>
    <!-- 按钮，点击后调用fetchData方法 -->
    <button @click="fetchData">调用后端接口</button>
    <!-- 显示接口返回的数据 -->
    <div v-if="responseData">
      <h3>接口返回数据：</h3>
      <pre>{{ responseData }}</pre>
    </div>
    <!-- 显示错误信息 -->
    <div v-if="errorMsg" style="color: red;">
      <h3>错误：</h3>
      <pre>{{ errorMsg }}</pre>
    </div>
  </div>
</template>

<script setup>
// 引入Vue的响应式API
import { ref } from 'vue'

// 定义响应式变量用于存储接口返回的数据
const responseData = ref(null) // 存储成功返回的数据
const errorMsg = ref('') // 存储错误信息

// 定义调用后端接口的方法
const fetchData = async () => {
  // 清空之前的错误信息
  errorMsg.value = ''
  try {
    // 发送GET请求到后端接口（假设后端接口为http://localhost:8080/api/hello）
    const res = await fetch('http://localhost:8080/api/hello')
    // 判断响应状态是否为200-299
    if (!res.ok) {
      // 如果不是，抛出错误
      throw new Error('请求失败，状态码：' + res.status)
    }
    // 解析返回的JSON数据
    const data = await res.json()
    // 将数据赋值给响应式变量
    responseData.value = data
  } catch (err) {
    // 捕获并显示错误信息
    errorMsg.value = err.message
  }
}
</script>

<style scoped>
/* 按钮样式 */
button {
  padding: 8px 16px;
  font-size: 16px;
  margin-bottom: 12px;
  cursor: pointer;
}
</style> 