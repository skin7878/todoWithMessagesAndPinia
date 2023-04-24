<template>  
  <AppMessages />  
  <TodoApp /> 
</template>
<script setup lang="ts"> 
  import TodoApp from './components/TodoApp.vue'  
  import AppMessages from './components/AppMessages.vue'
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
