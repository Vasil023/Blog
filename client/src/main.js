import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Vue3Toastify from "vue3-toastify";

import "./assets/main.scss"
import 'primeicons/primeicons.css'
import "vue3-toastify/dist/index.css";

const app = createApp(App)

app.use(Vue3Toastify);

app.use(createPinia())

app.use(router)

app.mount('#app')
