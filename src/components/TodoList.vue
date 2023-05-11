<template>    
  <div class="todo-list" v-for="todo in todoStore.todoList" :key="todo.id">
    <span :class="{ completed: todo.completed }" class="todo-item">{{ todo.item }}</span>
    <div>
      <span @click.stop="todoStore.toggleTodoCompleted(todo.id)" class="item-btn">&#10004;</span>
      <span @click.stop="deleteTodo(todo.id)" class="item-btn">&#10060;</span>    
    </div> 
  </div>    
</template>
<script setup>   
  import { useTodoListStore } from '@/stores/todoList'
  import { useNotificationStore } from '@/stores/notification'  
  const notificationStore = useNotificationStore()  
  const todoStore = useTodoListStore() 
  
  const deleteTodo = (id) => {
    todoStore.deleteTodo(id)
    notificationStore.addNotification({error: 'Wow! You`ve deleted item.'})  
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

