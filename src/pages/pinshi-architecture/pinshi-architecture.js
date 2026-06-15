import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const sliders = document.querySelectorAll('.swiper');
sliders.forEach(slider => {
  const slidesNum = slider.querySelectorAll('.swiper-slide').length / 3;
  new Swiper(slider, {
    slidesPerView: 'auto',
    lazyPreloadPrevNext: 2,
    initialSlide: 2,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    on: {
      slideChangeTransitionEnd: function (swiper) {
        if (swiper.realIndex === 0) {
          swiper.slideTo(0 + slidesNum, 0);
        } else if (swiper.realIndex === slidesNum * 2) {
          swiper.slideTo(0 + slidesNum, 0);
        }
        swiper.autoplay.start();
      },
    },
    modules: [Autoplay],
  });
});