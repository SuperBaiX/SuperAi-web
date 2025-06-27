<!--
  TeamAppCreate.vue
  新建应用弹窗组件，表单提交后可调用store action
-->
<template>
  <div class="modal-mask">
    <div class="modal-container">
      <h3>新建应用</h3>
      <input v-model="name" placeholder="应用名称" />
      <textarea v-model="desc" placeholder="应用介绍"></textarea>
      <div class="modal-actions">
        <button @click="onCreate">创建</button>
        <button @click="$emit('close')">取消</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'TeamAppCreate' })
import { ref } from 'vue'
const name = ref('')
const desc = ref('')
function onCreate() {
  // 这里可以调用store action创建应用
  alert(`创建应用：${name.value}\n${desc.value}`)
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  left: 0; top: 0; right: 0; bottom: 0;
  background: #0003;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-container {
  background: #fff;
  border-radius: 8px;
  padding: 32px 24px;
  min-width: 320px;
  box-shadow: 0 2px 16px #0002;
}
.modal-actions {
  margin-top: 16px;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}
input, textarea {
  width: 100%;
  margin: 8px 0;
  padding: 6px 10px;
  border: 1px solid #eee;
  border-radius: 4px;
}
</style> 