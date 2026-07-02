import { resolve } from 'path'
import fs from 'fs'

export default function notFoundPlugin(projectRoot) {
  return {
    name: '404-page',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const pathname = req.url.split('?')[0]
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
