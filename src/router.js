import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './pages/Home.vue'

const routes = [
  //{ path: '/', name: 'home', component: HomeView },
  { path: '/', name: 'gem', component: () => import ("./pages/Gem.vue") },
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
    if ( to.hash && document.querySelector(to.hash) ) {
      return {
        el: to.hash,
        top: document.querySelector('header').clientHeight
      }
    }
    
    return { top: 0 }
  },
});

let metaData = [];
let firstVisit = true;

fetch('/meta.json')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    metaData = json;
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });

router.beforeEach((to) => {
  let path = to.path;
  if (firstVisit) {
    firstVisit = false;
  } else {
    if (path !== '/' && path[path.length-1] !== '/') {
      path = path + '/';
    }

    if (path.indexOf('/news/') >= 0 || path.indexOf('/projects/') >= 0) {
      path = '/news/';
    }

    const filter = metaData.filter(item => item.path === path);
    const defaultMeta = metaData.filter(item => item.path === '*');
    let meta = defaultMeta[0];
    
    if (filter.length > 0) {
      meta = filter[0];
    }

    document.title = meta.title;

    const els = [
      {key: 'head meta[name="description"]', value: meta.descriptionn},
      {key: 'head meta[name="keywords"]', value: meta.keywords},
      {key: 'head meta[property="og:title"]', value: meta.title},
      {key: 'head meta[property="og:description"]', value: meta.description},
      {key: 'head meta[property="og:site_name"]', value: meta.title},
      {key: 'head meta[name="twitter:description"]', value: meta.description},
      {key: 'head meta[name="twitter:title"]', value: meta.title},
      {key: 'head meta[itemprop="name"]', value: meta.title},
      {key: 'head meta[itemprop="description"]', value: meta.description},
    ];

    els.forEach(item => {
      const el = document.querySelector(item.key);
      if (el) {
        el.setAttribute('content', item.value);
      }
    });
  }
})

export default router;