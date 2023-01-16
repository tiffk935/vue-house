<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[100]">
    <img class="w-32" src="@/assets/loading_w.gif" alt="德林哲里" srcset="">
  </div>
  <!--loading end-->
  <Nav v-if="config.showNav" />
  <div class="home bg-white overflow-hidden font-['Noto_Sans_TC']">
    <h1 style="display:none;">德林哲里</h1>
    <S1 :smallScrollBar="smallScrollBarRef" />
    <S2 />
    <S3 :setFsLightbox="setFsLightbox" />
    <S4 />
    <S5 />
    <S6 />
    <S7 />
    <S8 />
    <S9 />
    <Order :setModal="setModal" />
  </div>

  <!-- <FsLightbox
    :toggler="sliderToggler"
    :slide="slide"
    :sources="sources2"
  />  -->

  <!-- Mobile contact info -->
  <div v-if="$isMobile()" class="mo-contact-info flex justify-between w-full contact-item-box items-center">
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'phone'">
      <img src="@/section/form/phone.svg" alt="德林哲里" srcset="" />
      <div>撥打電話</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'">
      <img src="@/section/form/messenger.svg" alt="德林哲里" srcset="" />
      <div>FB 諮詢</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="@/section/form/pen.svg" alt="德林哲里" srcset="" />
      <div>預約賞屋</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'gmap'">
      <img src="@/section/form/gmap.svg" alt="德林哲里" srcset="" />
      <div>地圖導航</div>
    </div>
  </div>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="@/section/form/phone.svg" alt="德林哲里" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="@/section/form/messenger.svg" alt="德林哲里" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="@/section/form/gmap.svg" alt="德林哲里" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '賞屋專線' : modalType == 'fb' ? 'Facebook Messenger' :
          '接待會館'
      }}</div>
      <!-- content -->
      <div class="text-md mt-4">{{ modalType == 'phone' ? info.phone : modalType == 'fb' ? '線上諮詢' :
          `接待中心：${info.address}`
      }}</div>
      <!-- btn -->
      <div class="btn btn-lg bg-color1  border-0 text-white mt-12 hover:bg-color2" @click="go()" v-bind:class="{
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

  <div v-if="sliderToggler" class="tk-lightbox">
    <div class="inner">
      <div class="txt">
        <div>
          <span>{{sources[slide-1].year}}</span>{{sources[slide-1].txt}}
        </div>
        <div class="close" @click="sliderToggler = false"></div>
      </div>
      <div class="img-wrapper">
        <div>
          <img :src="sources[slide-1].img" :alt="sources[slide-1].year + sources[slide-1].txt">
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.home {
  width: 100%;
  height: 100vh;
  overflow: auto;
}
.tk-lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 75, 71, 0.8);
  color: #fff;
  font-family: 'Noto Serif TC';
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  .txt {
    width: 100%;
    height: size-m(34);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: size-m(15);
    line-height: size-m(30);
    font-weight: 500;
    @media screen and (min-width:768px) {
      height: size(50);
      font-size: size(20);
      line-height: size(29);
    }

    span {
      font-size: size-m(18);
      line-height: size-m(30);
      margin-right: size-m(10);
      @media screen and (min-width:768px) {
        font-size: size(28);
        line-height: size(40);
        margin-right: size(10);
      }
    }
  }

  .close {
    width: size-m(30);
    height: size-m(30);
    background-image: url(@/section/s3/close.svg);
    background-repeat: no-repeat;
    background-size: size-m(25) auto;
    background-position: center center;
    cursor: pointer;
    @media screen and (min-width:768px) {
      width: size(30);
      height: size(30);
      background-size: size(24) auto;
    }
  }

  .img-wrapper {
    width: 0; // by script

    & > div {
      width: 100%;
      height: 0;
      padding-top: 111.04651%;
      position: relative;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
import S3 from "@/section/s3.vue"
import S4 from "@/section/s4.vue"
import S5 from "@/section/s5.vue"
import S6 from "@/section/s6.vue"
import S7 from "@/section/s7.vue"
import S8 from "@/section/s8.vue"
import S9 from "@/section/s9.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { nextTick, onMounted, ref } from "vue"

// import AOS from 'aos';
import Scrollbar from 'smooth-scrollbar';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FsLightbox from "fslightbox-vue/v3";
import slide1_full from '@/section/s3/1.jpg';
import slide2_full from '@/section/s3/2.jpg';
import slide3_full from '@/section/s3/3.jpg';
import slide4_full from '@/section/s3/4.jpg';
import slide5_full from '@/section/s3/5.jpg';
import slide6_full from '@/section/s3/6.jpg';

gsap.registerPlugin(ScrollTrigger);

const isLoading = ref(true)
const gtmNoScript = ref('')
const config = ref({
  showNav: false
})
const slide = ref(1)
const sliderToggler = ref(false)
const sources = ref([
  {
    img: slide1_full,
    year: '2015',
    txt: '汐止區  哲人德林',
  },
  {
    img: slide2_full,
    year: '2015',
    txt: '汐止區  哲人德林',
  }, 
  {
    img: slide3_full,
    year: '2015',
    txt: '汐止區  哲人德林',
  }, 
  {
    img: slide4_full,
    year: '2015',
    txt: '汐止區  哲人德林',
  }, 
  {
    img: slide5_full,
    year: '2015',
    txt: '汐止區  哲人德林',
  }, 
  {
    img: slide6_full,
    year: '2015',
    txt: '汐止區  哲人德林',
  }, 
])

const modalOpen = ref(false)
const modalType = ref('')
const smallScrollBarRef = ref()
let smallScrollBar = null;

onMounted(() => {
  window.onload = function () {
    isLoading.value = false
    // AOS.init();
    // Scrollbar.init(document.querySelector('.home'));

    smallScrollBar = Scrollbar.init(document.querySelector('.home'), {
      damping: 0.05,
      // alwaysShowTracks: true,
    });

    ScrollTrigger.scrollerProxy(".home", {
      scrollTop(value) {
        if (arguments.length) {
          smallScrollBar.scrollTop = value;
        }
        return smallScrollBar.scrollTop;
      }
    });

    smallScrollBar.addListener(ScrollTrigger.update);
    smallScrollBarRef.value = smallScrollBar;

    gsap.set('.home .fade', {opacity: 0});
    setTimeout(() => {
      gsap.utils.toArray(".home .fade").forEach(item => {
        gsap.to(item, {
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            scroller: ".home",
            trigger: item,
            start: "center bottom",
            toggleActions: "play none none reverse",
          },
        });
      });

      let s8TL = gsap.timeline({
        scrollTrigger: {
          scroller: ".home",
          trigger: document.querySelectorAll('.s8 .fade_s8')[0],
          start: "top 90%",
          toggleActions: "play none none reverse",
        }
      });

      s8TL
        .from(document.querySelectorAll('.s8 .fade_s8')[0], { opacity: 0, duration: 0.6 }, 0)
        .from(document.querySelectorAll('.s8 .fade_s8')[1], { opacity: 0, duration: 0.6 }, 0.2)
        .from(document.querySelectorAll('.s8 .fade_s8')[2], { opacity: 0, duration: 0.6 }, 0.4)
        .from(document.querySelectorAll('.s8 .fade_s8')[3], { opacity: 0, duration: 0.6 }, 0.6)
      
      gsap.utils.toArray(".home .parallax").forEach(item => {
        gsap.set(item, {backgroundPosition: '50% 0%'});
        gsap.from(item, {
          backgroundPosition: '50% 100%',
          ease: 'none',
          scrollTrigger: {
            scroller: ".home",
            trigger: item,
            start: "top 90%",
            end: "50% top",
            // markers: true,
            scrub: 1
          },
        });
      });
    }, 600);

    window.onresize = () => {
      if(sliderToggler.value === true){
        setModalImg();
      }
    }
  };

})

function setFsLightbox(obj){
  slide.value = obj.slide;
  sliderToggler.value = obj.sliderToggler;
  nextTick(() => {
    setModalImg();
  })
}

function setModalImg(){
  const viewH = document.querySelector('.tk-lightbox').clientHeight;
  const viewW = document.querySelector('.tk-lightbox').clientWidth;
  const marginTop = 120 / 1080 * viewH;
  let h = viewH - marginTop * 2 - document.querySelector('.tk-lightbox .txt').clientHeight;
  let w = h * 688 / 768; //688*764
  
  if(w + 40 > viewW) {
    document.querySelector('.tk-lightbox .img-wrapper').style.width = (viewW - 40) + 'px';
  }else{
    document.querySelector('.tk-lightbox .img-wrapper').style.width = w + 'px';
  }
}

function setModal(obj){
  modalOpen.value = obj.modalOpen;
  modalType.value = obj.modalType;
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

const scrollTo = (el) => {
  smallScrollBar.scrollTo(0, document.querySelector(el).getBoundingClientRect().top, 1000);
}
</script>
