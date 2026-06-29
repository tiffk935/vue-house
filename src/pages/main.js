import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

let animating = false;
const tl = gsap.timeline({
  paused: true,
  onComplete: () => animating = false,
  onReverseComplete: () => animating = false
});
tl.set('#nav-mob', { display: 'block' });
tl.set('#nav-mob .bg', { opacity: 0 });
tl.to('#nav-mob .bg', { opacity: 1, duration: 0.2 });
tl.to('#nav-mob .panel', { xPercent: 100, duration: 0.4 });

const closeMobNav = () => {
  document.querySelector('#main-header .nav-toogle').classList.remove('active');
  tl.reverse();
}

document.querySelector('#main-header .nav-toogle').addEventListener('click', () => {
  if (animating) return;
  animating = true;
  if (document.querySelector('#main-header .nav-toogle').classList.contains('active')) {
    closeMobNav();
  } else {
    document.querySelector('#main-header .nav-toogle').classList.add('active');
    tl.play();
  }
});

if (document.querySelector('#kv')) {
  ScrollTrigger.create({
    trigger: '#kv',
    start: 'bottom top',
    onEnter: () => {
      document.querySelector('#main-header').classList.add('show-bg');
    },
    onLeaveBack: () => {
      document.querySelector('#main-header').classList.remove('show-bg');
    },
  });
}

['#main-header .order', 'footer .order', '#mob-bottom-nav .order'].forEach(selector => {
  if (document.querySelector(selector)) {
    document.querySelector(selector).addEventListener('click', () => {
      if (document.querySelector('body#home')) {
        gsap.to(window, { duration: 1, scrollTo: { y: '#order' } });
      } else {
        window.location.href = '/#order';
      }
    });
  }
});

document.querySelectorAll('a[href="/#news"]').forEach(selector => {
  selector.addEventListener('click', (e) => {
    if (document.querySelector('body#home')) {
      e.preventDefault();
      gsap.to(window, { duration: 1, scrollTo: { y: '#news' } });
      closeMobNav();
    }
  });
});

document.querySelector('footer .scrolltop').addEventListener('click', () => {
  gsap.to(window, { duration: 1, scrollTo: 0 });
});

ScrollTrigger.create({
  trigger: 'footer',
  start: 'top bottom',
  invalidateOnRefresh: true,
  onEnter: () => {
    gsap.to('#mob-bottom-nav', {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        gsap.set('#mob-bottom-nav', { display: 'none' });
      }
    });
  },
  onLeaveBack: () => {
    gsap.set('#mob-bottom-nav', { display: 'block', opacity: 0 });
    gsap.to('#mob-bottom-nav', { opacity: 1, duration: 0.2 });
  },
});

window.addEventListener('load', () => {
  ScrollTrigger.refresh();
});

// lazy 圖片載入後會改變頁面高度，導致 footer 位置偏移，需重新計算 ScrollTrigger 基準點
let _refreshTimer;
function debouncedRefresh() {
  clearTimeout(_refreshTimer);
  _refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
}

document.querySelectorAll('img[loading="lazy"]').forEach(img => {
  if (!img.complete) {
    img.addEventListener('load', debouncedRefresh, { once: true });
  }
});
