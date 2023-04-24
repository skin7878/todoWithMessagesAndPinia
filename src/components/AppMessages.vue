<template>
  <div v-if="store.messages.length" class="messages-wrapper">
    <div 
      v-for="(message, i) in store.messages" :key="i" 
      class="message-top"
      :class="[message.success ? 'success-color' : 'error-color']"
    >      
      <span>{{ message.success ? message.success : message.error }}</span>                
    </div> 
  </div>  
</template>

<script setup lang="ts">
  import { useTodoListStore } from '@/stores/todoList'  
  const store = useTodoListStore()  
</script>

<style scoped>

.messages-wrapper {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 2000;  
  width: min(90%, 22rem);      
}
.message-top {  
  color: white;  
  padding: .9rem 1rem;
  margin-bottom: .5rem;  
  border-radius: 5px;
  /* transition: all .5s;     */
}
.success-color {
  background-color: rgba(73, 223, 107, 0.98);  
}

.error-color {
  background-color: rgba(247, 91, 106, 0.98);  
}
</style>