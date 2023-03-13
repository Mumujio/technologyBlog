import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import 'element-plus/dist/index.css'



// 全局配置
import {get_login} from  '@/util/app_config'

import App from './App.vue'

import router from './router'
import './assets/main.css'
import '@/util/rem'
VMdEditor.use(githubTheme);


const app = createApp(App)
// 全局方法
app.config.globalProperties.$login = get_login
    

app.use(VMdEditor);



app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')

export default app
