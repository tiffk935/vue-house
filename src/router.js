import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './pages/Home.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/gem', name: 'gem', component: () => import ("./pages/Gem.vue") },
  { path: '/vision', name: 'vision', component: () => import ("./pages/Vision.vue") },
  { path: '/team', name: 'team', component: () => import ("./pages/Team.vue") },
  { path: '/work', name: 'work', component: () => import ("./pages/Work.vue") },
  { path: '/gallary', name: 'gallary', component: () => import ("./pages/Gallary.vue") },
  { path: '/pinshi-team', name: 'pinshiTeam', component: () => import ("./pages/PinshiTeam.vue") },
  { path: '/pinshi-architecture', name: 'pinshiArchitecture', component: () => import ("./pages/PinshiArchitecture.vue") },
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