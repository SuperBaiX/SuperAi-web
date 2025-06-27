// src/api/index.ts
// 统一管理所有后端接口请求（TypeScript版）

// 定义接口返回类型（可根据实际后端返回结构调整）
export interface HelloResponse {
  message: string
}

// 示例：使用fetch封装一个GET请求，返回类型为HelloResponse
export async function getHello(): Promise<HelloResponse> {
  // 调用后端 /api/hello 接口
  const response = await fetch('/api/hello') // 发送GET请求到后端接口
  // 解析JSON数据
  return response.json() // 返回解析后的JSON数据
} 