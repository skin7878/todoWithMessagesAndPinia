<template>
  <div>
    <form @submit.prevent="addAndClearTodo">
      <input type="text" v-model="todo">
      <button>Add</button>    
    </form>    
  </div>
</template>

<script setup lang="ts">  
  import { ref } from 'vue'
  import type { Ref } from 'vue'
  import { useTodoListStore } from '@/stores/todoList'  

  const store = useTodoListStore()  

  const todo: Ref<string> = ref('')
  
    
  const addAndClearTodo = (): void => {        
    if(!todo.value) return 
    store.addTodo(todo.value)
    todo.value = ''
    store.addMessage({success: 'Success! You`ve added new item.'})     
    store.deleteMessage(2000)    
  } 
</script>

<style scoped>

</style>

