import './bootstrap'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { NMessageProvider, NLoadingBarProvider } from 'naive-ui'

import naive from 'naive-ui/es/preset'
import i18n from "./locales/i18n"
import Vue3Geolocation from 'vue3-geolocation'

import App from './App.vue'
import router from './router'

const app = createApp(h(NLoadingBarProvider, {}, () => h(NMessageProvider, () => h(App))))

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(naive)
app.use(Vue3Geolocation)

app.mount('#app')
