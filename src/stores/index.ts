import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
  state: ()=> {
    return {
      current: 1,
      name:'test'
    }
  },
  // computed 修饰值
  getters: {
    
  },
  // methods 可以做同步、异步 提交state
  actions: {
    
  }
})
