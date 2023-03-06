import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {ElMessage} from 'element-plus'
import type { InjectionKey } from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import type { SFCInstallWithContext } from 'element-plus/es/utils'

const app = createApp(App)

// 泛型
// const provide_Message = Symbol('$message') as InjectionKey<SFCInstallWithContext<Message>>

app.use(ElementPlus)
// app.provide('$message',ElMessage)
app.use(createPinia())
app.use(router)

app.mount('#app')
