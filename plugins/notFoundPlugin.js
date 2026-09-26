import { resolve } from 'path'
import fs from 'fs'

// 設定需要 redirect 的路徑
const redirects = {
  // '/news': '/#news',
  // '/order': '/#order',
  // '/order': '/#order',  // 之後有其他頁面也可以加在這裡
}
// 動態 /news/:id → /#news?post=:id
function getRedirect(pathname) {
  if (redirects[pathname]) return redirects[pathname]
  
  const newsMatch = pathname.match(/^\/news\/(\d+)$/)
  if (newsMatch) return `/#news?post=${newsMatch[1]}`
  
  return null
}

export default function notFoundPlugin(projectRoot) {
  return {
    name: '404-page',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const pathname = req.url.split('?')[0]

        // ✅ 新增：redirect 判斷（放在最前面）
        const target = getRedirect(pathname)
if (target) {
  res.statusCode = 301
  res.setHeader('Location', target)
  res.end()
  return
}

        if (pathname.includes('.')) return next()
        const filePath = resolve(projectRoot, 'src/pages', pathname.slice(1), 'index.html')
        if (fs.existsSync(filePath)) return next()
        const raw = fs.readFileSync(resolve(projectRoot, 'src/pages/404/index.html'), 'utf-8')
        const html = await server.transformIndexHtml(req.url, raw)
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html')
        res.end(html)
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const pathname = req.url.split('?')[0]

    // ✅ 改這裡：用 getRedirect 取代原本的靜態判斷
    const target = getRedirect(pathname)
    if (target) {
      res.statusCode = 301
      res.setHeader('Location', target)
      res.end()
      return
    }

        if (pathname.includes('.')) return next()
        const filePath = resolve(projectRoot, 'dist', pathname.slice(1), 'index.html')
        if (fs.existsSync(filePath)) return next()
        const html = fs.readFileSync(resolve(projectRoot, 'dist/404/index.html'), 'utf-8')
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html')
        res.end(html)
      })
    }
  }
}