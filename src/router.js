import { createRouter, createWebHashHistory} from 'vue-router'

import HomePage from './HomePage/HomePage.vue'
import AboutPage from './AboutPage/AboutPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
  ]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })
  

export default router