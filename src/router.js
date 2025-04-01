import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './pages/Home.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/gem', name: 'gem', component: () => import ("./pages/Gem.vue") },
  { path: '/vision', name: 'vision', component: () => import ("./pages/Vision.vue") },
  { path: '/team', name: 'team', component: () => import ("./pages/Team.vue") },
  { path: '/work', name: 'work', component: () => import ("./pages/Work.vue") },
  { path: '/gallary', name: 'gallary', component: () => import ("./pages/Gallary.vue") },
  { path: '/pinshi', name: 'pinshi', component: () => import ("./pages/Pinshi.vue") },
  { path: '/pinshi-team', name: 'pinshiTeam', component: () => import ("./pages/PinshiTeam.vue") },
  { path: '/pinshi-architecture', name: 'pinshiArchitecture', component: () => import ("./pages/PinshiArchitecture.vue") },
  { path: '/news', component: () => import ("./pages/News.vue") },
  { path: '/projects', component: () => import ("./pages/News.vue") },
  { path: '/news/page/:page(\\d+)', component: () => import ("./pages/News.vue") },
  { path: '/projects/page/:page(\\d+)', component: () => import ("./pages/News.vue") },
  { path: '/news/:link', name: 'single', component: () => import ("./pages/Single.vue") },
  { path: '/order', name: 'order', component: () => import ("./pages/Order.vue") },
  { path: '/formThanks', name: 'formThanks', component: () => import ("./pages/FormThanks.vue") },
  { path: '/:pathMatch(.*)*', name: '404', component: () => import ("./pages/NotFound.vue") },
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