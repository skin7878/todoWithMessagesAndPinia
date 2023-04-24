<template>
  <div class="todo-app">
    <h1>To Do List</h1>    
    <TodoForm />    
    <TodoList />
  </div>
</template>

<script setup>
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'
</script>

<style scoped>
  .todo-app {
    width: min(100%, 30rem);
    margin-inline: auto;
  }
</style>

