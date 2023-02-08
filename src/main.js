import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faXmark, faBars)

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')



