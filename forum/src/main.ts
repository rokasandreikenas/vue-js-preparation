import './assets/main.css'

import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).use(VueQueryPlugin).use(createVfm())

app.mount('#app')
