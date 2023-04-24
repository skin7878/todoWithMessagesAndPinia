<template>    
  <div v-for="todo in store.todoList" :key="todo.id">
    <span :class="{ completed: todo.completed }">{{ todo.item }}</span> 
    <span @click.stop="store.toggleTodoCompleted(todo.id)" class="cursor">&#10004;</span>
    <span @click.stop="deleteTodo(todo.id)" class="cursor">&#10060;</span>    
  </div>    
</template>
<script setup>   
  import { useTodoListStore } from '@/stores/todoList'  
  const store = useTodoListStore() 
  
  const deleteTodo = (id) => {
    store.deleteTodo(id)
    store.addMessage({error: 'Wow! You`ve deleted item.'})     
    store.deleteMessage(2000)
  }
</script>


<style scoped>
  .completed {
    text-decoration: line-through;  
  }
  .cursor {
    cursor: pointer;
  }
</style>

