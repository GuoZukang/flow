import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')

    return {
      token,
    }
  },
  {
    persist: {
      paths: ['token'],
      storage: {
        getItem(key: any) {
          return uni.getStorageSync(key)
        },
        setItem(key: any, value: any) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
