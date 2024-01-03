import { createSSRApp } from 'vue'
import App from './App.vue'
import vant from 'vant'
import 'vant/lib/index.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)
  app.use(vant)
  app.use(pinia)
  return {
    app,
  }
}
