<template>  
  <form class="todo-form" @submit.prevent="addAndClearTodo">
    <input class="todo-name" type="text" v-model="todo">
    <button class="btn">Add</button>    
  </form>   
</template>

<script setup lang="ts">  
  import { ref } from 'vue'
  import type { Ref } from 'vue'
  import { useTodoListStore } from '@/stores/todoList'
  import { useNotificationStore } from '@/stores/notification'  
  const notificationStore = useNotificationStore()  
  const todoStore = useTodoListStore()  

  const todo: Ref<string> = ref('')
  
    
  const addAndClearTodo = (): void => {        
    if(!todo.value) return 
    todoStore.addTodo(todo.value)
    todo.value = ''
    notificationStore.addNotification({success: 'Success! You`ve added new item.'})      
  } 
</script>

<style scoped>
  .todo-form {
    display: flex;
  }
  .todo-name {
    width: 100%;
    padding: .5rem 1rem;
  }
  .btn {
    padding: .5rem 1rem;
    color: white;
    border: none;
    background-color: cadetblue;
    cursor: pointer;
    font-size: 1.4rem;
  }

</style>

