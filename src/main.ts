import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

const myAPP = createApp(App)
myAPP.use(router)
myAPP.use(store)
myAPP.use(ElementPlus)
myAPP.mount('#app')
