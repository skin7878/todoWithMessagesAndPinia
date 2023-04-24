<template>    
  <div class="todo-list" v-for="todo in store.todoList" :key="todo.id">
    <span :class="{ completed: todo.completed }" class="todo-item">{{ todo.item }}</span>
    <div>
      <span @click.stop="store.toggleTodoCompleted(todo.id)" class="item-btn">&#10004;</span>
      <span @click.stop="deleteTodo(todo.id)" class="item-btn">&#10060;</span>    
    </div> 
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
  .todo-list {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .completed {
    text-decoration: line-through;  
  }  

  .todo-item {
    font-size: 1.2rem;
  }
  .item-btn {
    cursor: pointer;
    margin-left: 1rem;
  }
</style>

