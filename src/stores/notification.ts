import { defineStore } from "pinia"

type Notification = {
  [key: string]: string
}

interface NotificationShape {  
  notifications: Notification[],
  interval: number | null
}

export const useNotificationStore = defineStore('notification', {
  state: (): NotificationShape => ({    
    notifications: [],
    interval: null         
  }),
  actions: {    
    addNotification(item: Notification): void {      
      this.notifications.unshift(item)      
    },
    deleteNotification(time: number): void {
      this.interval = setInterval(() => this.notifications.pop(), time)                
    },
    clearInterval(): void {
      if(this.interval) clearInterval(this.interval)
    }
  }  
})