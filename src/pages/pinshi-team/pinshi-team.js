import Swiper from 'swiper';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
const imgs = import.meta.glob('@/assets/pinshi-team/**/*.{png,jpg,jpeg,webp}', {
  query: { enhanced: true },
  import: 'default',
  eager: true
});

const sliders = document.querySelectorAll('.firm .swiper');
sliders.forEach(slider => {
  new Swiper(slider, {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: slider.querySelector('.swiper-pagination'),
      clickable: true
    },
    modules: [Autoplay, Pagination],
  });
});

const slidesNum = document.querySelectorAll('#teams .swiper-slide').length / 3;
new Swiper('#teams .swiper', {
    lazy: true,
    lazyPreloadPrevNext: 5,
    slidesPerView: "auto",
    centeredSlides: true,
    // loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      768: {
        centeredSlides: false,
      },
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

let modalSwiper = null;
const modalSliders = [
  [
    {
      img: imgs['../assets/pinshi-team/teams/1/works/1.webp'],
      msg: '台南煙波大飯店'
    },
    {
      img: imgs['../assets/pinshi-team/teams/1/works/2.webp'],
      msg: '台南煙波大飯店'
    },
    {
      img: imgs['../assets/pinshi-team/teams/1/works/3.webp'],
      msg: '高雄小城全區規劃'
    },
    {
      img: imgs['../assets/pinshi-team/teams/1/works/4.webp'],
      msg: '高雄小城'
    }
  ],
  [
    {
      img: imgs['../assets/pinshi-team/teams/2/works/1.webp'],
      msg: '國城UFO'
    },
    {
      img: imgs['../assets/pinshi-team/teams/2/works/2.webp'],
      msg: '國城賦格'
    },
    {
      img: imgs['../assets/pinshi-team/teams/2/works/3.webp'],
      msg: '國城賦格'
    },
    {
      img: imgs['../assets/pinshi-team/teams/2/works/4.webp'],
      msg: '國城賦格'
    }
  ],
  [
    {
      img: imgs['../assets/pinshi-team/teams/3/works/1.webp'],
      msg: '台南煙波PARK'
    },
    {
      img: imgs['../assets/pinshi-team/teams/3/works/2.webp'],
      msg: '台南煙波四季'
    },
    {
      img: imgs['../assets/pinshi-team/teams/3/works/3.webp'],
      msg: '宗大青田'
    }
  ],
  [
    {
      img: imgs['../assets/pinshi-team/teams/4/works/1.webp'],
      msg: '嘉義市立美術館'
    },
    {
      img: imgs['../assets/pinshi-team/teams/4/works/2.webp'],
      msg: 'GEN 雋 頂級粵菜餐廳'
    },
    {
      img: imgs['../assets/pinshi-team/teams/4/works/3.webp'],
      msg: 'SHO 承 日本料理餐廳'
    },
    {
      img: imgs['../assets/pinshi-team/teams/4/works/4.webp'],
      msg: 'Liberte 頂級法餐餐廳'
    }
  ],
  [
    {
      img: imgs['../assets/pinshi-team/teams/5/works/1.webp'],
      msg: '高雄海洋及流行音樂中心'
    },
    {
      img: imgs['../assets/pinshi-team/teams/5/works/2.webp'],
      msg: '鳳山都更好'
    }
  ],
  [
    {
      img: imgs['../assets/pinshi-team/teams/6/works/1.webp'],
      msg: '竹跡館｜2018台中花博'
    },
    {
      img: imgs['../assets/pinshi-team/teams/6/works/2.webp'],
      msg: '竹跡館｜2018台中花博'
    },
    {
      img: imgs['../assets/pinshi-team/teams/6/works/3.webp'],
      msg: '新竹美術館'
    },
    {
      img: imgs['../assets/pinshi-team/teams/6/works/4.webp'],
      msg: '新竹美術館'
    },
    {
      img: imgs['../assets/pinshi-team/teams/6/works/5.webp'],
      msg: '台南歷史文化園區   台南孔廟周邊'
    },
    {
      img: imgs['../assets/pinshi-team/teams/6/works/6.webp'],
      msg: '台南歷史文化園區   台南孔廟周邊'
    }
  ]
];

document.querySelectorAll('#teams .more').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelector('#modal').style.opacity = 0;
    document.querySelector('#modal').style.display = 'flex';

    const id = e.target.closest('.team').getAttribute('data-id');
    
    if (id) {
      const slides = modalSliders[parseInt(id) - 1];

      let html = slides.map((slide) => {
        return `<div class="swiper-slide">
                  <img loading="lazy" src="${slide.img}" alt="">
                  <div class="desc"><div>${slide.msg}</div></div>
                </div>`
      }).join('');
      html = html + html;
      document.querySelector('#modal .swiper .swiper-wrapper').innerHTML = html;

      if (modalSwiper) {
        modalSwiper.destroy();
        modalSwiper = null;
        document.querySelector('#modal .swiper .swiper-wrapper').innerHTML = '';
      }

      modalSwiper = new Swiper('#modal .swiper', {
        effect: "coverflow",
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        // loopAdditionalSlides: 2,
        coverflowEffect: {
          rotate: 0,
          stretch: window.innerWidth * -0.13,
          depth: window.innerWidth * 0.35,
          modifier: 1,
          slideShadows: false,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        on: {
          init: () => {
            document.querySelector('#modal').style.opacity = 1;
          },
          resize: (swiper) => {
            swiper.params.coverflowEffect.stretch = window.innerWidth * -0.13;
            swiper.params.coverflowEffect.depth = window.innerWidth * 0.35;
            swiper.update();
          }
        },
        modules: [Autoplay, EffectCoverflow],
      });
    }
  })
});

document.querySelector('#modal .close').addEventListener('click', () => {
  document.querySelector('#modal').style.display = 'none';

  if (modalSwiper) {
    modalSwiper.destroy();
    modalSwiper = null;
    document.querySelector('#modal .swiper .swiper-wrapper').innerHTML = '';
  }
});