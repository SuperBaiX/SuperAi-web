import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // 配置开发服务器
  server: {
    proxy: {
      // 代理所有以 /api 开头的请求到后端 8080 端口
      '/api': {
        target: 'http://localhost:8080', // 后端服务地址
        changeOrigin: true, // 更改请求源为目标地址
        rewrite: path => path.replace(/^\/api/, '/api'), // 保持 /api 路径
      },
    },
  },
})
