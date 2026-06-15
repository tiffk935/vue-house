const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = './src/assets/pinshi-team/teams/1/works';

if (!inputDir) {
  console.log('請提供圖片目錄');
  console.log('範例：node convert-to-webp.js ./images');
  process.exit(1);
}

// 支援的圖片格式
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'];

/**
 * 遞迴取得所有檔案
 */
async function getAllFiles(dir) {
  const entries = await fs.promises.readdir(dir, {
    withFileTypes: true,
  });

  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return getAllFiles(fullPath);
      }

      return fullPath;
    })
  );

  return files.flat();
}

/**
 * 轉換圖片
 */
async function convertToWebp(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  // 非支援格式直接跳過
  if (!imageExtensions.includes(ext)) {
    return;
  }

  // 與原圖同目錄
  const outputPath = filePath.replace(ext, '.webp');

  try {
    await sharp(filePath)
      .webp({
        quality: 80,
      })
      .toFile(outputPath);

    // const sizes = [800, 1200, 1600];
    // const sizes = [1360];
    const sizes = [];

    for (const w of sizes) {
      const outputPath = filePath.replace(ext, `-${w}.webp`);
      
      await sharp(filePath)
        .resize(w)
        .webp({ quality: 80 })
        .toFile(outputPath)
    }

    console.log(`✔ 已轉換: ${outputPath}`);
  } catch (error) {
    console.error(`✘ 轉換失敗: ${filePath}`);
    console.error(error.message);
  }
}

/**
 * 主程式
 */
async function main() {
  const files = await getAllFiles(inputDir);

  for (const file of files) {
    await convertToWebp(file);
  }

  console.log('全部完成');
}

main();