import { newsList, mainNews } from '@/data/news';
import gsap from 'gsap';
import PerfectScrollbar from 'perfect-scrollbar';

const posts = [...newsList, mainNews];
export const newsImages = import.meta.glob('@/assets/news/**/*.{png,jpg,jpeg,webp}', {
  query: { enhanced: true },
  import: 'default',
  eager: true
});

let ps;

// ✅ 統一在這裡處理圖片路徑，不動原始資料
const updateModalContent = (post) => {
  document.querySelector('#new-modal h3').innerHTML = post.title
  document.querySelector('#new-modal time').innerText = post.date
  document.querySelector('#new-modal .author').innerText = post.author

  const imgSrc = newsImages[post.thumbnail.replace('@/assets', '../assets')]
  document.querySelector('#new-modal figure.pc img').src = imgSrc
  document.querySelector('#new-modal figure.mob img').src = imgSrc
  document.querySelector('#new-modal figure.pc figcaption').innerText = post.thumbnail_caption
  document.querySelector('#new-modal figure.mob figcaption').innerText = post.thumbnail_caption
  document.querySelector('#new-modal .content').innerHTML = post.content
}

const openModal = (post) => {
  if (!post.content) return
  updateModalContent(post)
  gsap.set('#new-modal', { display: 'block' })
  document.body.classList.add('modal-open')
  ps = new PerfectScrollbar(document.querySelector('#new-modal .content'))
}

// 初始化：content 為空就標記 no-modal class
if (!mainNews.content) {
  document.querySelector('#news-sec .main')?.classList.add('no-modal');
}

// news-item 點擊
const newsItems = document.querySelectorAll('#news-sec .news-item');
newsItems.forEach(item => {
  item.addEventListener('click', (e) => {
    const el = e.target.closest('.news-item');
    const link = el.getAttribute('data-link') || '';
    if (!link) return

    const found = posts.find(post => post.link === link);
    if (found) openModal(found)
  })
});

// main 點擊
document.querySelector('#news-sec .main')?.addEventListener('click', () => {
  openModal(mainNews)
});

// 關閉
document.querySelector('#new-modal .close').addEventListener('click', () => {
  gsap.set('#new-modal', { display: 'none' });
  document.body.classList.remove('modal-open');
  document.querySelector('#new-modal figure.pc img').src = '';
  document.querySelector('#new-modal figure.mob img').src = '';
  if (ps) {
    ps.destroy();
    ps = null;
  }
});

window.onresize = () => {
  if (ps) ps.update();
}

// ✅ URL 參數自動開啟 modal
function openPostFromUrl() {
  const hash = window.location.hash
  const qIndex = hash.indexOf('?')
  if (qIndex === -1) return

  const params = new URLSearchParams(hash.slice(qIndex + 1))
  const postId = params.get('post')
  if (!postId) return

  const found = posts.find(p => p.link === `/news/${postId}`)
  if (!found) return

  document.querySelector('#news')?.scrollIntoView({ behavior: 'smooth' })
  openModal(found)
  history.replaceState(null, '', window.location.pathname + '#news')
}

openPostFromUrl()