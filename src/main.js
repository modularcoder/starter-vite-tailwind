import { createApp } from 'vue'
import App from './App.vue'

import './main.css'
import store from './_store/index.js'
import router from './router.js'

const app = createApp(App)

app.use(store)
app.use(router)


app.mount('#app')
