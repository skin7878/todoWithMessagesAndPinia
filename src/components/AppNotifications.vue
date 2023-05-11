<template>
  <div v-if="notificationStore.notifications.length" class="notifications-wrapper">
    <div 
      v-for="(notification, i) in notificationStore.notifications" :key="i" 
      class="notification"
      :class="[notification.success ? 'success-color' : 'error-color']"
    >      
      <span>{{ notification.success ? notification.success : notification.error }}</span>                
    </div> 
  </div>  
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue'
  import { useNotificationStore } from '@/stores/notification'  
  const notificationStore = useNotificationStore()

  onMounted(() => {
    notificationStore.deleteNotification(2000)           
  })
  
  onUnmounted(() => {
    notificationStore.clearInterval()
  })
</script>

<style scoped>

.notifications-wrapper {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 2000;  
  width: min(90%, 22rem);      
}
.notification {  
  color: white;  
  padding: .9rem 1rem;
  margin-bottom: .5rem;  
  border-radius: 5px;  
}
.success-color {
  background-color: rgba(73, 223, 107, 0.98);  
}

.error-color {
  background-color: rgba(247, 91, 106, 0.98);  
}
</style>