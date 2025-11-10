<template>
  <section>
    <div class="title"><span>NEWS</span>最新消息</div>
    <article v-if="data">
      <h1>{{ data.title }}</h1>
      <div class="detail">
        <div class="slider">
          <swiper
            :modules="modules"
            loop
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
          >
            <swiper-slide v-for="slide in data.slider" :key="slide">
              <img :src="getImg(slide)" />
            </swiper-slide>
          </swiper>
        </div>
        
        <div class="content">
          <PerfectScrollbar ref="scrollbar">
            <div v-html="data.content"></div>
          </PerfectScrollbar>
        </div>
      </div>
      <div class="bottom">
        <div class="prev-page-link" @click="router.back()">
          <svg viewBox="0 0 49 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.1052 0.927246H1" stroke="#21100B" stroke-width="0.75" stroke-miterlimit="10"/>
            <path d="M1 0.927246L12.8859 12.8132" stroke="#21100B" stroke-width="0.75" stroke-miterlimit="10"/>
            <path d="M42.1055 0.927246C45.3387 0.927246 48.0005 3.58899 48.0005 6.82225C48.0005 10.0555 45.3387 12.7173 42.1055 12.7173" stroke="#21100B" stroke-width="0.75" stroke-miterlimit="10"/>
            <path d="M42.1037 12.7173H28.791" stroke="#21100B" stroke-width="0.75" stroke-miterlimit="10"/>
          </svg>
          <span>回上一頁</span>
        </div>
        <div class="next-post" v-if="data.nextLink && data.nextTitle">
          <div class="next-post-sub">
            <span>Next  NEWS</span>
            <RouterLink class="next-post-wrapper" :to="data.nextLink">
              <div class="next-post-label">下一則</div>
              <svg viewBox="0 0 75 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 11.897H74.02" stroke="#21100B" stroke-width="0.75" stroke-miterlimit="10"/>
                <path d="M74.0195 11.8967L63.1191 1" stroke="#21100B" stroke-width="0.75" stroke-miterlimit="10"/>
              </svg>
            </RouterLink>
          </div>
          <RouterLink class="next-post-title" :to="data.nextLink">{{ data.nextTitle }}</RouterLink>
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="scss">
@use "@/assets/style/function.scss" as func;

.ps {
  position: relative;
  overflow: hidden;
  @media screen and (min-width:768px) {
    max-height: func.size(714);
    padding-right: func.size(98);
  }

  .ps__rail-x, .ps__rail-y {
    display: none;
  }

  &.ps--active-y .ps__rail-y {
    @media screen and (min-width:768px) {
      display: block;
      position: absolute;
      left: auto !important;
      right: func.size(7.5);
      width: 1px;
      background: #000;

      .ps__thumb-y {
        position: absolute;
        left: func.size(-7.5);
        width: func.size(15);
        background: #19AA39;
      }
    }
  }
}
</style>

<style lang="scss">
@use "@/assets/style/function.scss" as func;

section {
  padding: func.size-m(60) func.size-m(30) func.size-m(79) func.size-m(30);
  @media screen and (min-width:768px) {
    padding-top: func.size(115) ;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .title {
    font-size: func.size-m(18);
    font-weight: 700;
    letter-spacing: .04em;
    margin-bottom: func.size-m(50);
    @media screen and (min-width:768px) {
      font-size: func.size(33);
      margin-bottom: func.size(62);
    }

    span {
      font-weight: 100;
      margin-right: func.size-m(6);
      @media screen and (min-width:768px) {
        margin-right: func.size(21);
      }
    }
  }

  h1 {
    font-size: func.size-m(16);
    font-weight: 700;
    line-height: func.size-m(21);
    padding: func.size-m(9) 0;
    border-top: func.size-m(1) solid #000;
    border-bottom: func.size-m(1) solid #000;
    margin-bottom: func.size-m(25);
    @media screen and (min-width:768px) {
      font-size: func.size(54);
      line-height: func.size(65);
      padding: func.size(55) 0;
      border-top: func.size(1) solid #000;
      border-bottom: func.size(1) solid #000;
      margin-bottom: func.size(162);
    }
  }

  .detail {
    @media screen and (min-width:768px) {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: func.size(135);
    }
  }

  .slider {
    width: 100%;
    margin-bottom: func.size-m(34);
    @media screen and (min-width:768px) {
      width: func.size(631);
      margin-bottom: 0;
    }

    img {
      width: 100%;
      display: block;
    }
  }

  .content {
    font-size: func.size-m(12);
    line-height: func.size-m(20);
    letter-spacing: .06em;
    margin-bottom: func.size-m(53);
    text-align: justify;
    @media screen and (min-width:768px) {
      width: func.size(750);
      font-size: func.size(25);
      line-height: func.size(44);
      margin-bottom: 0;
    }
  }

  .bottom {
    border-top: func.size-m(1) solid #000;
    padding: func.size-m(37) 0 0 0;
    @media screen and (min-width:768px) {
      border-top: none;
      padding: 0;
      display: none;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .prev-page-link {
      display: flex;
      align-items: center;
      margin-bottom: func.size-m(73);
      cursor: pointer;
      @media screen and (min-width:768px) {
        margin-bottom: 0;
      }

      svg {
        display: block;
        width: func.size-m(47);
        margin-right: func.size-m(13);
        @media screen and (min-width:768px) {
          width: func.size(102);
          margin-right: func.size(55);
        }
      }

      span {
        font-size: func.size-m(15);
        letter-spacing: .01em;
        @media screen and (min-width:768px) {
          font-size: func.size(27);
        }
      }
    }

    .next-post {
      @media screen and (min-width:768px) {
        position: relative;
        padding-bottom: func.size(100);
      }
    }

    .next-post-sub {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      margin-bottom: func.size-m(10);
      @media screen and (min-width:768px) {
        margin-bottom: func.size(28);
        justify-content: flex-start;

        .next-post-wrapper {
          display: flex;
          justify-content: flex-end;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }

      span {
        font-size: func.size-m(18);
        line-height: 1;
        font-weight: 100;
        letter-spacing: .06em;
        margin-right: func.size-m(9);
        @media screen and (min-width:768px) {
          display: block;
          font-size: func.size(35);
          margin-right: 0;
        }
      }

      .next-post-label {
        display: none;
        @media screen and (min-width:768px) {
          display: block;
          font-size: func.size(27);
          margin-right: func.size(40);
          white-space: nowrap;
        }
      }

      svg {
        display: block;
        width: func.size-m(74);
        @media screen and (min-width:768px) {
          width: func.size(202);
        }
      }
    }

    .next-post-title {
      font-size: func.size-m(16);
      font-weight: 700;
      line-height: func.size-m(21);
      @media screen and (min-width:768px) {
        font-size: func.size(27);
        line-height: func.size(32);
      }
    }
  }
}
</style>

<script setup>
import news from '@/info/news';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
const modules = ref([Autoplay]);

const router = useRouter();
const route = useRoute();

const link = '/news/' + route.params.link || '';
const post = news.filter(item => item.link === link);

const scrollbar = ref(null);
const data = ref(null);

const images = import.meta.glob('../assets/news/**/*.*', { eager: true });
const getImg = path => images[path]?.default || '';

if (post.length === 0) {
  router.push(`/404`);
} else {
  data.value = post[0];
  console.log( post[0]);
  
  onMounted(() => {
    if (scrollbar.value) {
      window.onresize = () => {
        scrollbar.value.ps.update();
      }
    }
  });
}
</script>