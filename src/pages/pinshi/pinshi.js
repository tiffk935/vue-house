import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import gsap from 'gsap';

const sliders = document.querySelectorAll('.swiper');
sliders.forEach(slider => {
  new Swiper(slider, {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
  });
});

let allowScroll = false;
const map = document.querySelector('#map .map-wrapper img');
const handleLoad = () => {
  document.querySelector('#map .map-wrapper').scrollLeft = (document.querySelector('#map .map-wrapper img').clientWidth - document.querySelector('#map').clientWidth) * 0.5;
  allowScroll = true;

  setTimeout(() => {
    document.querySelector('#map .map-wrapper').addEventListener('scroll', () => {
      if (allowScroll) {
        gsap.to('#map .mask', {
          opacity: 0,
          onComplete: () => {
            gsap.set('#map .mask', { display: 'none' })
            allowScroll = false;
          }
        })
      }
    });
  }, 50);
}

if (map.complete) {
  handleLoad();
} else {
  map.addEventListener('load', handleLoad);
}

document.querySelector('#profit .table .btn').addEventListener('click', () => {
  document.querySelector('#table-modal').style.display = 'block';
});

document.querySelector('#table-modal .close').addEventListener('click', () => {
  document.querySelector('#table-modal').style.display = 'none';
});