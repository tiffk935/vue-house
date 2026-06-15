import { defineConfig } from 'vite'
import { resolve } from 'path'
import { ViteEjsPlugin } from "vite-plugin-ejs";
import fs from 'fs'
import simpleHtmlPlugin from 'vite-plugin-simple-html';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
// import { imagetools } from 'vite-imagetools'
import viteCompression from 'vite-plugin-compression';

import { newsList, mainNews } from './src/data/news.js'
import info from './src/data/info.js'
import notFoundPlugin from './plugins/notFoundPlugin.js'
import criticalCssPlugin from './plugins/criticalCssPlugin.js'
import resolveAtPlugin from './plugins/resolveAtPlugin.js'

const projectRoot = import.meta.dirname
const pagesDir = resolve(projectRoot, 'src/pages')

const input = {}

input['home'] = resolve(pagesDir, 'index.html')

fs.readdirSync(pagesDir).forEach((dir) => {
  if (dir === 'index.html') return
  const htmlPath = resolve(pagesDir, dir, 'index.html')
  if (fs.existsSync(htmlPath)) {
    input[dir] = htmlPath
  }
})

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(projectRoot, 'src'),
      vue: 'vue/dist/vue.esm-bundler.js'
    },
  },
  server: {
    host: '0.0.0.0',
  },
  root: resolve(projectRoot, 'src/pages'),
  publicDir: resolve(projectRoot, 'public'),
  appType: 'mpa',

  plugins: [
    ViteEjsPlugin(
      { siteName: 'My News Website', newsList, mainNews, info },
      { ejs: { views: [projectRoot] } }
    ),
    resolveAtPlugin(projectRoot),
    // notFoundPlugin(projectRoot),
    criticalCssPlugin,
    {
      name: 'scripts-to-body',
      apply: 'build',
      transformIndexHtml: {
        order: 'post',
        handler(html) {
          const scripts = []
          const result = html.replace(
            /(<head>)([\s\S]*?)(<\/head>)/i,
            (_, open, content, close) => {
              const newContent = content.replace(
                /<script\b[^>]*\bsrc\b[^>]*><\/script>/gi,
                (match) => { scripts.push(match); return '' }
              )
              return open + newContent + close
            }
          )
          if (!scripts.length) return html
          return result.replace('</body>', scripts.join('') + '</body>')
        }
      }
    },
    // {
    //   name: 'css-preload',
    //   apply: 'build',
    //   transformIndexHtml: {
    //     order: 'post',
    //     handler(html) {
    //       return html.replace(
    //         /<link\b([^>]*)\brel=(["'])stylesheet\2([^>]*)>/gi,
    //         (match, before, quote, after) => {
    //           const hrefMatch = match.match(/\bhref=(["'])([^"']+)\1/);
    //           if (!hrefMatch) return match;
    //           const href = hrefMatch[2];
    //           const tag = `<link rel="stylesheet" href="${href}">`;
    //           return `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript>${tag}</noscript>`;
    //         }
    //       );
    //     }
    //   }
    // },
    simpleHtmlPlugin({
      minify: true,
    }),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
    }),
    // imagetools(),
    viteCompression()
  ],

  build: {
    outDir: resolve(projectRoot, 'dist'),
    emptyOutDir: true,
    minify: true,
    cssMinify: false,
    rollupOptions: {
      input,
    }
  }
})
