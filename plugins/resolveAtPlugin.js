import { resolve } from 'path'
import path from 'path'
import fs from 'fs'

const MIME_TYPES = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
}

export default function resolveAtPlugin(projectRoot) {
  const srcDir = resolve(projectRoot, 'src')
  let isBuild = false

  return [
    {
      name: 'resolve-at-in-html',

      configResolved(config) {
        isBuild = config.command === 'build'
      },

      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (!req.url?.startsWith('/@/')) return next()
          const filePath = resolve(srcDir, req.url.slice(3).split('?')[0])
          if (!fs.existsSync(filePath)) return next()
          const ext = path.extname(filePath).toLowerCase()
          res.setHeader('Content-Type', MIME_TYPES[ext] || 'application/octet-stream')
          fs.createReadStream(filePath).pipe(res)
        })
      },

      transformIndexHtml: {
        order: 'pre',
        handler(html, ctx) {
          if (!isBuild) {
            // dev：轉成 /@/ 前綴，由 middleware 處理
            return html
              .replace(/(<[^>]+\ssrc=")@\//g, '$1/@/')
              .replace(/(<[^>]+\ssrc=")\/src\//g, '$1/@/')
              .replace(/(<[^>]+\shref=")@\//g, '$1/@/')
              .replace(/(<[^>]+\shref=")\/src\//g, '$1/@/')
              .replace(/(\ssrcset=")([^"]*)/g, (_, attr, value) =>
                attr + value.replace(/@\//g, '/@/').replace(/\/src\//g, '/@/')
              )
              .replace(/(\sdata-src=")([^"]*)/g, (_, attr, value) =>
                attr + value.replace(/@\//g, '/@/').replace(/\/src\//g, '/@/')
              )
          }
          // build：src/href/srcset 轉成相對路徑，讓 Vite 處理 hash
          const pageDir = path.dirname(ctx.filename)
          const relPath = path.relative(pageDir, srcDir).replace(/\\/g, '/')
          return html
            .replace(/(<[^>]+\ssrc=")@\//g, `$1${relPath}/`)
            .replace(/(<[^>]+\ssrc=")\/src\//g, `$1${relPath}/`)
            .replace(/(<[^>]+\shref=")@\//g, `$1${relPath}/`)
            .replace(/(<[^>]+\shref=")\/src\//g, `$1${relPath}/`)
            .replace(/(\ssrcset=")([^"]*)/g, (_, attr, value) =>
              attr + value.replace(/@\//g, `${relPath}/`).replace(/\/src\//g, `${relPath}/`)
            )
        }
      }
    },

    // {
    //   // data-src pre：加暫時 src 讓 Vite 處理 hash，並加 marker data-__lazy
    //   name: 'resolve-at-data-src-pre',
    //   transformIndexHtml: {
    //     order: 'pre',
    //     handler(html, ctx) {
    //       if (!isBuild) return html
    //       const pageDir = path.dirname(ctx.filename)
    //       const relPath = path.relative(pageDir, srcDir).replace(/\\/g, '/')
    //       return html.replace(/\sdata-src="(@\/[^"]*)"/g, (_, value) => {
    //         const srcVal = value.replace(/^@\//, `${relPath}/`)
    //         return ` src="${srcVal}" data-__lazy data-src="${value}"`
    //       })
    //     }
    //   }
    // },

    // {
    //   // data-src post：把 Vite hash 後的 src 搬回 data-src，移除暫時的 src 和 marker
    //   name: 'resolve-at-data-src-post',
    //   transformIndexHtml: {
    //     order: 'post',
    //     handler(html) {
    //       if (!isBuild) return html
    //       return html.replace(/<img\b[^>]*data-__lazy[^>]*>/gi, (tag) => {
    //         const srcMatch = tag.match(/\ssrc="([^"]*)"/)
    //         if (!srcMatch) return tag
    //         const hashedSrc = srcMatch[1]
    //         return tag
    //           .replace(/\ssrc="[^"]*"/, '')
    //           .replace(/\sdata-__lazy/, '')
    //           .replace(/\sdata-src="[^"]*"/, ` data-src="${hashedSrc}"`)
    //       })
    //     }
    //   }
    // }
  ]
}
