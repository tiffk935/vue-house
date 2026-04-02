import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    cssInjectedByJsPlugin({
      // 關鍵設定：這會讓 CSS 在打包時直接注入 HTML，而不是透過 JS 執行
      topExecutionPriority: true, 
    }),
  ],
  build: {
    cssCodeSplit: false, // 確保所有 CSS 合併成一個
    assetsInlineLimit: 10000, // 小於 10kb 的資產自動內聯
    commonjsOptions: {
      transformMixedEsModules: true
    },
    rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['vue', 'vue-router', 'gsap', 'aos'], // 把大型 library 拆出來
      }
    }
  }
  },
  server: {
    host: '0.0.0.0'
  }
})