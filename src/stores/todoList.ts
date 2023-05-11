import { defineStore } from 'pinia'
import type { Todo } from '../types'

interface TodoShape {
  todoList: Todo[],
  id: number  
}

export const useTodoListStore = defineStore('todoList', {
  state: (): TodoShape => ({
    todoList: [],
    id: 0             
  }),
  actions: {
    addTodo(item: string): void {
      this.todoList.push({ item, id: this.id++, completed: false })
    },
    deleteTodo(id: number): void {
      this.todoList = this.todoList.filter(item => item.id !== id)
    },
    toggleTodoCompleted(id: number): void {
      const todo = this.todoList.find(item => item.id === id)
      if(todo) todo.completed = !todo.completed      
    }    
  }  
})