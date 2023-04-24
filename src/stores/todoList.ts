import { defineStore } from "pinia";
import type { Todo } from '../types';

type Message = {
  [key: string]: string
}

interface TodoShape {
  todoList: Todo[],
  id: number,
  messages: Message[],
  interval: number | null   
}

export const useTodoListStore = defineStore('todoList', {
  state: (): TodoShape => ({
    todoList: [],
    id: 0,
    messages: [],
    interval: null      
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
    },
    addMessage(item: Message): void {
      if(this.interval) clearInterval(this.interval)
      this.messages.push(item)
    },
    deleteMessage(time: number) {
      this.interval = setInterval(() => this.messages.shift(), time)            
    }
  }  
})