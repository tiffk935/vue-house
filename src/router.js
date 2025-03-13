import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './pages/Home.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/vision', name: 'vision', component: () => import ("./pages/Vision.vue") }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if ( to.hash ) {
      return {
        el: to.hash,
      }
    }
    
    return { top: 0 }
  },
});

export default router;