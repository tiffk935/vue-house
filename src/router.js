import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './pages/Home.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/gem', name: 'gem', component: () => import ("./pages/Gem.vue") },
  { path: '/vision', name: 'vision', component: () => import ("./pages/Vision.vue") },
  { path: '/team', name: 'team', component: () => import ("./pages/Team.vue") },
  { path: '/formThanks', name: 'formThanks', component: () => import ("./pages/FormThanks.vue") },
  { path: '/:pathMatch(.*)*', name: '404', component: import ("./pages/NotFound.vue") },
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