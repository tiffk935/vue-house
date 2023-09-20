<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[100]">
    <img class="w-32" src="@/assets/loading_w.gif" alt="展宜常閑" srcset="">
  </div>
  <!--loading end-->
  <Nav v-if="config.showNav" :smallScrollBar="smallScrollBarRef" />
  <img class="main-bg md:hidden" src="@/section/s1/bg-m.webp" />
  <img class="main-bg hidden md:block" src="@/section/s1/bg.webp" />
  <div class="home overflow-hidden font-['Noto_Sans_TC']">
    <h1 style="display:none;">展宜常閑</h1>
    <S1 :smallScrollBar="smallScrollBarRef" />
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <S6 />
    <S7 />
    <S10 :showLightbox="showLightbox" />
    <S11 />
    <S8 />
    <S13 />
    <S14 />
    <S9 />
    <S12 />
    
    <Order :setModal="setModal" />
  </div>

  <vue-easy-lightbox
    :visible="visibleRef"
    :imgs="imgsRef"
    :index="indexRef"
    :moveDisabled="true"
    :rotateDisabled="true"
    :zoomDisabled="true"
    :pinchDisabled="true"
    :loop="true"
    @hide="visibleRef=false"
  ></vue-easy-lightbox>

  <!-- Mobile contact info -->
  <div v-if="$isMobile()" class="mo-contact-info flex justify-between w-full contact-item-box items-center">
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'phone'">
      <img src="@/section/form/phone.svg" alt="展宜常閑" srcset="" />
      <div>撥打電話</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'">
      <img src="@/section/form/messenger.svg" alt="展宜常閑" srcset="" />
      <div>FB 諮詢</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="@/section/form/pen.svg" alt="展宜常閑" srcset="" />
      <div>預約賞屋</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'gmap'">
      <img src="@/section/form/gmap.svg" alt="展宜常閑" srcset="" />
      <div>地圖導航</div>
    </div>
  </div>

  <Policy />

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="@/section/form/phone.svg" alt="展宜常閑" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="@/section/form/messenger.svg" alt="展宜常閑" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="@/section/form/gmap.svg" alt="展宜常閑" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '賞屋專線' : modalType == 'fb' ? 'Facebook Messenger' :
          '接待會館'
      }}</div>
      <!-- content -->
      <div class="text-md mt-4" v-html="modalType == 'phone' ? info.phone : modalType == 'fb' ? '線上諮詢' :info.address">
      </div>
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

  

</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.text-md{
  text-align: center;
}

.main-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home {
  width: 100%;
  height: 100vh;
  overflow: auto;
  
  .s3, .s4, .s5, .s6, .s7, .s8, .s9, .s10, .s11, .s12, .s13, .s14 {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.05);
    }
  }
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
      font-size: size(16);
      line-height: size(29);
    }

    span {
      font-size: size-m(18);
      line-height: size-m(30);
      margin-right: size-m(10);
      @media screen and (min-width:768px) {
        font-size: size(18);
        line-height: size(40);
        margin-right: size(10);
      }
    }
  }
  .text-center{
    text-align: center;
  }

  .close {
    width: size-m(30);
    height: size-m(30);
    //background-image: url(@/section/s8/close.svg);
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
.scrollbar-track-y {
  @media screen and (max-width:767px) {
    display: none !important;
  }
}

.vel-modal {
  background: rgba(0,0,0,.7);

  .vel-btns-wrapper .btn__close {
    opacity: 1;
  }

  .vel-toolbar {
    display: none;
  }

  .vel-img-title {
    color: #fff;
    font-size: 14px;
    opacity: 1;
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
import S10 from "@/section/s10.vue"
import S11 from "@/section/s11.vue"
import S12 from "@/section/s12.vue"
import S13 from "@/section/s13.vue"
import S14 from "@/section/s14.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import Policy from "@/section/form/policy.vue"
import { onMounted, ref  } from "vue"
import Scrollbar from 'smooth-scrollbar';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VueEasyLightbox from 'vue-easy-lightbox';
import slide1_full from '@/section/s10/1.webp';
import slide2_full from '@/section/s10/2.webp';
import slide3_full from '@/section/s10/3.webp';
import slide4_full from '@/section/s10/4.webp';
import slide5_full from '@/section/s10/5.webp';
import slide6_full from '@/section/s10/6.webp';
import slide7_full from '@/section/s10/7.webp';
import slide8_full from '@/section/s10/8.webp';
import slide1_full_m from '@/section/s10/1_m.webp';
import slide2_full_m from '@/section/s10/2_m.webp';
import slide3_full_m from '@/section/s10/3_m.webp';
import slide4_full_m from '@/section/s10/4_m.webp';
import slide5_full_m from '@/section/s10/5_m.webp';
import slide6_full_m from '@/section/s10/6_m.webp';
import slide7_full_m from '@/section/s10/7_m.webp';
import slide8_full_m from '@/section/s10/8_m.webp';
gsap.registerPlugin(ScrollTrigger);

const isLoading = ref(true)
const gtmNoScript = ref('')
const config = ref({
  showNav: true
})

const modalOpen = ref(false)
const modalType = ref('')
const smallScrollBarRef = ref()
let smallScrollBar = null;

onMounted(() => {
  window.onload = function () {
    isLoading.value = false

    smallScrollBar = Scrollbar.init(document.querySelector('.home'), {
      damping: 0.05,
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

    setTimeout(() => {

      ScrollTrigger.create({
        scroller: ".home",
        trigger: ".s2",
        start: "center center",
        onEnter: () => {
          if(document.querySelector('.order .gmap iframe')) {
            document.querySelector('.order .gmap iframe').src = info.googleSrc;
          }
        },
      });

      gsap.utils.toArray(".home .upup").forEach(item => {
        if(item.querySelector('.tt')) {
          gsap.to(item.querySelector('.tt'), {
            y: '0%',
            duration: 1,
            scrollTrigger: {
              scroller: ".home",
              trigger: item,
              start: "center 90%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });

      let s9upup = gsap.timeline({
        scrollTrigger: {
          scroller: ".home",
          trigger: '.s9 .logos',
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });

      gsap.utils.toArray(".s9 .logo .tt").forEach(item => {
        s9upup.to(item, {
          y: '0%',
          duration: 0.8,
        }, '<+=0.3');
      });

      let s11upup = gsap.timeline({
        scrollTrigger: {
          scroller: ".home",
          trigger: '.s11 .logos',
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });

      gsap.utils.toArray(".s11 .logo .tt").forEach(item => {
        s11upup.to(item, {
          y: '0%',
          duration: 0.8,
        }, '<+=0.3');
      });
      
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

      const panels = ['.s3', '.s4', '.s5', '.s6', '.s7', '.s8']; 
      const navLinks = document.querySelectorAll('.topnav .top-btns .item');
      const navLinksM = document.querySelectorAll('.menu .menu-item');
      panels.forEach((panel, i) => {
        if(document.querySelector(panel)){
          ScrollTrigger.create({
            scroller: ".home",
            trigger: panel,
            // start: "top bottom",
            // end: "bottom bottom",
            start: "top bottom",
            // markers: true,
            onEnter: () => {
              navLinks.forEach((e) => {
                  e.classList.remove("active");
              });
              navLinks[i].classList.add("active");

              navLinksM.forEach((e) => {
                  e.classList.remove("active");
              });
              navLinksM[i].classList.add("active");
              // console.log(panel, 'onEnter')
            },
            onEnterBack: () => {
              navLinks.forEach((e) => {
                  e.classList.remove("active");
              });
              navLinks[i].classList.add("active");
              
              navLinksM.forEach((e) => {
                  e.classList.remove("active");
              });
              navLinksM[i].classList.add("active");
              // console.log(panel, 'onEnterBack')
            },
            onLeave: () => {
              if(panel == '.s8') {
                console.log('s8 leave')
                navLinks[5].classList.remove("active");
                navLinksM[5].classList.remove("active");
              }
              // console.log(panel, 'onLeave')
            },
            onLeaveBack: () => {
              if(panel == '.s3') {
                navLinks[0].classList.remove("active");
                navLinksM[0].classList.remove("active");
              }
              // console.log(panel, 'onLeaveBack')
            }
          });
        }
      });

    }, 600);
  };
})

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

const scrollTo = (el) => {
  smallScrollBar.scrollTo(0, document.querySelector(el).getBoundingClientRect().top, 1000);
}

const visibleRef = ref(false)
const indexRef = ref(0)
const isMobile = window.matchMedia('(max-width: 768px)').matches;
const imgsRef = ref(isMobile
  ? [
    { title: '展宜 詠喆', src: slide1_full_m},
    { title: '展宜 拾秋', src: slide2_full_m},
    { title: '展宜 摘月', src: slide3_full_m},
    { title: '展宜 阿都蘭', src: slide4_full_m},
    { title: '展宜 時間之外', src: slide5_full_m},
    { title: '展宜 拿雲', src: slide6_full_m},
    { title: '展宜 有一個園', src: slide7_full_m},
    { title: '展宜 仁愛', src: slide8_full_m},
  ]
  : [
    { title: '展宜 詠喆', src: slide1_full},
    { title: '展宜 拾秋', src: slide2_full},
    { title: '展宜 摘月', src: slide3_full},
    { title: '展宜 阿都蘭', src: slide4_full},
    { title: '展宜 時間之外', src: slide5_full},
    { title: '展宜 拿雲', src: slide6_full},
    { title: '展宜 有一個園', src: slide7_full},
    { title: '展宜 仁愛', src: slide8_full},
  ]);
const showLightbox = (idx) => {
  indexRef.value = idx;
  visibleRef.value = true;
}
</script>
