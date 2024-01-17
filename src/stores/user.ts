import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const active1 = ref(0)
    return {
      token,
      active1,
    }
  },
  {
    persist: {
      paths: ['token', 'active', 'active1'],
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
