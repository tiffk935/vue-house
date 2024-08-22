<template>
  <section class="s1 user-n w-full relative">
    <img src="@/section/s6/badge.png" class="badge_" alt="" srcset="">
    <div class="bg absolute">
      <img class="block w-full h-full" src="@/section/s1/bg.webp" />
    </div>
    <div class="links absolute hidden md:flex">
      <div class="item flex items-center text-white" @click="modalOpen = true; modalType = 'gmap'">
        <img class="icon mr-1" src="//h65.tw/img/form/gmap.svg" alt="gmap" />
        <div>LOCATION</div>
      </div>
      <div class="item flex items-center text-white" @click="open()">
        <img class="icon mr-1" src="//h65.tw/img/form/fb.svg" alt="fb" />
        <div>FACEBOOK</div>
      </div>
      <div class="item flex items-center text-white" @click="modalOpen = true; modalType = 'fb'">
        <img class="icon mr-1" src="//h65.tw/img/form/messenger.svg" alt="messenger" />
        <div>MESSAGE</div>
      </div>
      <div class="item flex items-center text-white" @click="modalOpen = true; modalType = 'phone'">
        <img class="icon mr-1" src="//h65.tw/img/form/phone.svg" alt="phone" />
        <div>CONTACT US</div>
      </div>
    </div>
    <img class="jp absolute" src="@/section/s1/jp.svg" />
    <img class="logo absolute" src="@/section/s1/logo.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" />
    <div class="order-btn absolute text-white" @click="scrollTo('.order')">
      <div>立即預約</div>
      <svg class="arrow" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 1L15.2512 5.42791L10.5023 9.85116L5.75349 5.42791L1 1" stroke="white" stroke-miterlimit="10"/>
      </svg>
    </div>
    <div class="content absolute md:flex md:justify-between md:items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <div class="md:flex md:items-center">
        <div class="t1">核心商道 捷運綠徑 傳承富寓</div>
        <div class="t2">北投站350米 31-39坪｜邊間3房</div>
      </div>
      <img class="block w-full" src="@/section/s1/info.svg" />
    </div>
  </section>


  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="s1-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="s1-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="//h65.tw/img/form/phone.svg" alt="phone" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="//h65.tw/img/form/messenger.svg" alt="messenger" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="//h65.tw/img/form/gmap.svg" alt="gmap" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '賞屋專線' : modalType == 'fb' ? 'Facebook Messenger' :
          '接待會館'
      }}</div>
      <!-- content -->
      <div class="text-md mt-4">{{ modalType == 'phone' ? info.phone : modalType == 'fb' ? '線上諮詢' :
          `${info.address}`
      }}</div>
      <!-- btn -->
      <div class="btn btn-lg bg-[#931F1C] border-0 text-white mt-12 hover:bg-[#6f1412]" @click="go()" v-bind:class="{
        'hidden': modalType == 'phone' && !$isMobile(),
        'btlead': modalType == 'fb',
        'btsearch': modalType == 'gmap',
        'btcontac': modalType == 'phone'
      }">
        {{ modalType == 'phone' ? '撥打電話' : modalType == 'fb' ? '立即諮詢' :
            '開啟導航'
        }}</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

@keyframes scrollattention {
  0% {
    transform: translateY(calc(var(--scrollY) * -1));
    opacity: 0
  }

  30% {
    opacity: 1;
    transform: translateY(0)
  }

  100% {
    transform: translateY(var(--scrollY));
    opacity: 0
  }
}

.s1 {
  width: 100%;
  height: size-m(740);
  @media (min-width: 768px) {
    height: size(1080);
  }

  .badge_ {
    @apply z-10 absolute;
    left: 0;
    top: 0;
    width: size(130);
    height: size(130);

    @media (max-width: 768px) {
      width: size-m(71);
      height: size-m(71);
    }
  }

  .bg {
    top: 0;
    left: size-m(-662.95);
    width: size-m(1316.77);
    height: 100%;
    @media (min-width: 768px) {
      left: 0;
      width: 100%;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(165deg, #DCDDDD 21.9%, #C5C5C4 30.9%, #8C8886 47.77%, #302624 72.52%, #231815 75.89%);
      opacity: 0.5;
      background-blend-mode: multiply;
      mix-blend-mode: multiply;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(125deg, #00A29A 20.88%, #006934 70.41%);
      opacity: 0.5;
      background-blend-mode: hue;
      mix-blend-mode: hue;
    }
  }

  .links {
    top: size(69);
    right: size(82);

    .item {
      font-size: size(16);
      letter-spacing: .1em;
      margin-left: size(25 * 2);
      position: relative;
      cursor: pointer;

      &:hover {
        opacity: .8;
      }

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: size(-25);
        width: 1px;
        height: 100%;
        background: #fff;
        transform: translate(0, -50%);
      }

      &:last-child:after {
        display: none
      }

      img {
        margin-right: size(12);
        filter: brightness(0) invert(1);
        max-width: size(30);
        max-height: size(36);
        object-fit: contain;
      }
    }
  }

  .jp {
    top: size-m(51);
    left: size-m(51.2);
    width: size-m(13.36);
    @media (min-width: 768px) {
      top: size(70);
      left: size(127);
      width: size(19.38);
    }
  }

  .logo {
    top: size-m(90);
    left: size-m(144);
    width: size-m(87.07);
    @media (min-width: 768px) {
      top: size(209);
      left: size(890);
      width: size(139.77);
    }
  }

  .order-btn {
    top: size-m(402);
    left: size-m(152);
    cursor: pointer;
    @media (min-width: 768px) {
      top: size(743);
      left: size(892);
    }

    div {
      font-size: size-m(18);
      line-height: normal;
      margin-bottom: size-m(10);
      @media (min-width: 768px) {
        font-size: size(34);
        margin-bottom: size(11.14);
      }
    }

    .arrow {
      width: size-m(20);
      margin: 0 auto;
      animation: scrollattention 2.6s ease-in-out infinite;
      --scrollY: 1.5vw;
      @media (min-width: 768px) {
        width: size(40.85);
        --scrollY: 0.7vw;
      }
    }
  }

  .content {
    color: #fff;
    top: size-m(495);
    left: size-m(55);
    text-align: center;
    @media (min-width: 768px) {
      top: size(900);
      left: size(234);
      width: size(1500);
    }

    .t1 {
      font-size: size-m(20);
      font-weight: 500;
      line-height: normal;
      letter-spacing: size-m(1.4);
      margin-bottom: size-m(10);
      @media (min-width: 768px) {
        font-size: size(37);
        letter-spacing: size(2.59);
        margin-bottom: 0;
        margin-right: size(35);
      }
    }

    .t2 {
      font-size: size-m(16);
      line-height: normal;
      letter-spacing: size-m(2.4);
      margin-bottom: size-m(13);
      @media (min-width: 768px) {
        font-size: size(30);
        letter-spacing: size(4.5);
        margin-bottom: 0;
      }
    }

    img {
      width: size-m(268.4);
      margin: 0 auto;
      @media (min-width: 768px) {
        width: size(365.4);
      }
    }
  }
}
</style>

<script setup>
import info from "@/info"
import { inject, ref } from "vue";
const modalOpen = ref(false);
const modalType = ref('');
const smoothScroll = inject('smoothScroll');

const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}

const go = () => {
  if (modalType.value == 'phone') {
    window.location.href = `tel:${info.phone.replace("-", "")}`;
    setTimeout(() => {
      window.location.href = "phoneThanks";
    }, 1000);
  } else if (modalType.value == 'fb') {
    window.open(info.fbMessage);
  } else if (modalType.value == 'gmap') {
    window.open(info.googleLink);

  }
}

const open = () => {
  window.open(info.fbLink);
}
</script>
