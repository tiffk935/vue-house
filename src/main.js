import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { createGtm } from '@gtm-support/vue-gtm'
import { createVfm } from 'vue-final-modal'
import VueAwesomePaginate from "vue-awesome-paginate"
import info from './info'

// 1. 先建立 App 實例
const app = createApp(App);

// 2. 建立 GTM 配置物件 (存成變數)
const gtmConfig = createGtm({
  id: info.gtmCode,
  defer: true, 
  compatibility: false,
  enabled: false, // 初始設為 false，避開首屏效能檢查
  loadScript: true,
  vueRouter: router,
  debug: false,   // 正式環境建議設為 false
});

// 3. 註冊所有插件
app.use(Toast, {
  transition: "Vue-Toastification__fade",
  maxToasts: 5,
  newestOnTop: true,
});
app.use(router);
app.use(gtmConfig); // 註冊 GTM 插件
app.use(createVfm());
app.use(VueAwesomePaginate);

// 4. 掛載 App
app.mount('#app');

// 5. 延遲啟動 GTM (建議 3~5 秒)
setTimeout(() => {
  // 注意：這裡要呼叫的是 gtmConfig 物件本身的 debug 與 enable
  if (gtmConfig) {
    gtmConfig.enable(true);
    console.log('GTM 腳本已在 3 秒後延遲載入');
  }
}, 3000);