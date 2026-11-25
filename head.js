
const fs = require('fs');
const minify = require('html-minifier').minify;

const date = new Date().toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
}).replace(/\//g, '-');

console.log('\x1b[33m%s\x1b[0m', '圖片壓縮完成 (vite.config.js 可調整壓縮設定)');

fs.readFile(__dirname + '/dist/index.html', 'utf8', function (err, html) {

    if (err) throw err;

    // 讀取 head.txt
    const head = fs.readFileSync(__dirname + '/head.txt', 'utf8');

    let result = minify(html, {
        removeAttributeQuotes: true,
        collapseWhitespace: true
    });

    // 將 head.txt 內容寫入 </head> 前
    result = result.replace('</head>', `${head}\n</head>`);

    // 加入打包日期
    result = `<!-- ${date} -->\n${result}`;

    fs.writeFileSync(__dirname + '/dist/index.html', result);

    console.log('\x1b[33m%s\x1b[0m', 'head.txt SEO 設定已寫入 index.html');
    console.log('\x1b[33m%s\x1b[0m', '打包日期已寫入');

    console.log('');
    console.log('\x1b[36m%s\x1b[0m', '編譯完成');
});
