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
const newsItems = document.querySelectorAll('#news-sec .news-item');

newsItems.forEach(item => {
  item.addEventListener('click', (e) => {
    const el = e.target.closest('.news-item');
    const link = el.getAttribute('data-link') || '';
    
    if (link) {
      const filter = posts.filter(post => post.link === link);
      if (filter.length > 0) {
        const selectedPost = filter[0];
        selectedPost.thumbnail = selectedPost.thumbnail.replace('@/assets', '../assets');
        updateModalContent(selectedPost);

        gsap.set('#new-modal', { display: 'block' });
        document.body.classList.add('modal-open');
        ps = new PerfectScrollbar(document.querySelector('#new-modal .content'));
      }
    }
  })
});

const updateModalContent = (post) => {
  document.querySelector('#new-modal h3').innerHTML = post.title;
  document.querySelector('#new-modal time').innerText = post.date;
  document.querySelector('#new-modal .author').innerText = post.author;
  document.querySelector('#new-modal figure.pc img').src = newsImages[post.thumbnail];
  document.querySelector('#new-modal figure.mob img').src = newsImages[post.thumbnail];
  document.querySelector('#new-modal figure.pc figcaption').innerText = post.thumbnail_caption;
  document.querySelector('#new-modal figure.mob figcaption').innerText = post.thumbnail_caption;
  document.querySelector('#new-modal .content').innerHTML = post.content;
}

if (document.querySelector('#news-sec .main')) {
  document.querySelector('#news-sec .main').addEventListener('click', () => {
    mainNews.thumbnail = mainNews.thumbnail.replace('@/assets', '../assets');
    updateModalContent(mainNews);
          
    gsap.set('#new-modal', { display: 'block' });
    document.body.classList.add('modal-open');
    ps = new PerfectScrollbar(document.querySelector('#new-modal .content'));
  });
}

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
  if (ps) {
    ps.update();
  }
}