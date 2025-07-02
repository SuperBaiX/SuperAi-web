<template>
  <div class="side-menu chat-side-menu">
    <ul class="side-menu-list">
      <li
        v-for="chat in chatList"
        :key="chat.id"
        class="side-menu-item"
        :class="{ active: chat.id === activeChatId }"
        @click="selectChat(chat.id)"
      >
        {{ chat.title }}
      </li>
    </ul>
    <div class="side-menu-bottom">
      <n-button type="primary" block @click="onCreateChat">新建聊天</n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NButton } from 'naive-ui'

const chatList = ref([
  { id: 1, title: '与小明的对话' },
  { id: 2, title: '项目群聊' },
  { id: 3, title: 'AI助手' }
])

const activeChatId = ref(chatList.value[0].id)

function selectChat(id: number) {
  activeChatId.value = id
}

function onCreateChat() {
  // 新建聊天逻辑
  console.log('新建聊天')
}
</script> 