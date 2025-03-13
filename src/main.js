import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { createGtm } from '@gtm-support/vue-gtm'
import { createVfm } from 'vue-final-modal'
import info from './info'

createApp(App)
  .use(Toast, {
    transition: "Vue-Toastification__fade",
    maxToasts: 5,
    newestOnTop: true,
  })
  .use(router)
  .use(
    createGtm({
      id: info.gtmCode, 
      defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
      compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
      enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
      debug: true, // Whether or not display console logs debugs (optional)
      loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
      vueRouter: router, // Pass the router instance to automatically sync with router (optional)
      trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
    })
  )
  .use(createVfm())
  .mount('#app')
