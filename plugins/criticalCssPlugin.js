function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>~+])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim()
}

const getIncludeRE = () => /\/\*\s*beasties:include start\s*\*\/([\s\S]*?)\/\*\s*beasties:include end\s*\*\//g

let cachedCriticalCss = null

export default {
  name: 'critical-css-inject',
  apply: 'build',

  buildStart() {
    cachedCriticalCss = null
  },

  transformIndexHtml: {
    order: 'post',
    handler(html, ctx) {
      if (!ctx.bundle) return html

      // First page: extract critical CSS from bundle and cache it
      if (cachedCriticalCss === null) {
        cachedCriticalCss = ''
        for (const [key, chunk] of Object.entries(ctx.bundle)) {
          if (!key.endsWith('.css') || chunk.type !== 'asset') continue
          const css = chunk.source.toString()
          const sections = [...css.matchAll(getIncludeRE())].map(m => m[1].trim())
          if (!sections.length) continue
          cachedCriticalCss += sections.join('')
          chunk.source = minifyCss(css.replace(getIncludeRE(), ''))
        }
      }

      if (!cachedCriticalCss) return html
      return html.replace('</head>', `  <style>${cachedCriticalCss}</style>\n</head>`)
    }
  }
}
