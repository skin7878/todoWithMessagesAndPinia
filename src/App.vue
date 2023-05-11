<template>
  <div v-if="notificationStore.notifications.length">
    <AppNotifications />  
  </div>  
  <TodoApp /> 
</template>
<script setup lang="ts"> 
  import TodoApp from './components/TodoApp.vue'  
  import AppNotifications from './components/AppNotifications.vue'
  import { useNotificationStore } from '@/stores/notification'  

  const notificationStore = useNotificationStore()
</script>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smooting: antialiased;
    -moz-osx-font-smooting: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
