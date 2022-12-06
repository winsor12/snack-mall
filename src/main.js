// import { Plus } from '@element-plus/icons'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import ElementPlusicons from '@element-plus/icons'
import ajax from 'axios'
import CueAdios from "vue-axios"

createApp(App).use(store).use(ElementPlus).use(CueAdios, ajax).use(router).mount('#app')
