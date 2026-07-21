import gsap from 'gsap';

window.addEventListener('load', () => {
  import('@/pages/news.js');
  import('@/pages/order.js');

  gsap.to('#loading', {
    opacity: 0,
    direction: 0.3,
    delay: 1,
    onComplete: () => {
      gsap.set('#loading', {
        display: 'none'
      });
    }
  })
});
