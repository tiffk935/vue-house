<template>
  <section class="s6 user-n w-full relative">
    <img class="title block" src="@/section/s6/title.png" data-aos="zoom-in" data-aos-duration="0" data-aos-delay="0" />

    <div class="md:flex md:flex-row-reverse">
      <div class="video-wrapper">
        <div class="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1AZhPNleY3g?si=i22FI1FIU8TDloyI&autoplay=1&mute=1&loop=1&playlist=1AZhPNleY3g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <div>
        <img class="title1 block" src="@/section/s6/title1.png" data-aos="zoom-in" data-aos-duration="0" data-aos-delay="0" />
        <div class="txt1" data-aos="fade-up" data-aos-duration="0" data-aos-delay="0">
          220坪非凡尺度，凝聚生活、度假與社交的多重身分。<br>
          從靜謐的晨光到傍晚的霞彩，<br>
          海天一線的視野延展無盡，<br>
          遊艇穿梭其間，夕陽在窗前緩緩沈落。<br>
          在這裡，私密與尊榮並存，<br>
          每一扇窗都是一幅珍稀景致，<br>
          將海與天化作身份的語言，<br>
          獻給真正懂得收藏風景的層峰人士。
        </div>
      </div>
    </div>

    <div class="slider md:hidden">
      <swiper
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <img class="block w-full" src="@/section/s6/1-m.jpg" />
          <div class="info">實景拍攝</div>
        </swiper-slide>
        <swiper-slide>
          <img class="block w-full" src="@/section/s6/2-m.jpg" />
          <div class="info">實景拍攝</div>
        </swiper-slide>
      </swiper>
    </div>
    
    <div class="sec md:flex md:flex-row-reverse md:justify-between">
      <div class="right">
        <img class="title2 block" src="@/section/s6/title2.png" />
        <img class="img1 w-full hidden md:block" src="@/section/s6/1.jpg" data-aos="fade-left" data-aos-duration="0" data-aos-delay="0" />
      </div>
      <div class="left">
        <img class="img2 w-full hidden md:block" src="@/section/s6/2.jpg" data-aos="fade-right" data-aos-duration="0" data-aos-delay="0" />
        <div class="txt2">
          隱身港灣之畔的 1200 坪黃金會所，是層峰生活的專屬序曲。<br class="md:hidden">
          由君品酒店團隊匠心掌舵餐飲，<br>
          從精緻粵饌到私享盛筵，皆以國際標準款待。<br>
          這裡既是私密會聚的場域，也是尊榮交流的舞台，<br>
          在潮聲與燈火間，凝聚少數人的非凡圈層。
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  padding: size-m(60) size-m(22) size-m(48) size-m(22);
  font-weight: 300;
  font-size: size-m(14);
  line-height: size-m(24);
  @media screen and (min-width:768px) {
    padding: size(161) size(210) size(224) size(30);
    font-size: size(24);
    line-height: size(40);
  }

  .title {
    width: size-m(273);
    margin: 0 auto size-m(30) auto;
    @media screen and (min-width:768px) {
      width: size(476);
      margin: 0 auto size(148) auto;
    }
  }

  .video-wrapper {
    width: 100%;
    margin: 0 0 size-m(30) 0;
    @media screen and (min-width:768px) {
      width: size(900);
      margin: 0 0 0 size(60);
    }

    .video {
      width: 100%;
      height: 0;
      padding-top: 56.25%;
      position: relative;

      iframe {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  .title1 {
    width: size-m(232);
    margin: 0 0 size-m(30) auto;
    @media screen and (min-width:768px) {
      width: size(395);
      margin: 0 0 size(52) auto;
    }
  }

  .txt1 {
    margin: 0 0 size-m(60) 0;
    text-align: right;
    @media screen and (min-width:768px) {
      margin: 0;
    }
  }

  .slider {
    margin: 0 0 size-m(30) 0;

    .info {
      position: absolute;
      bottom: size-m(5);
      right: size-m(5);
      color: #fff;
      font-size: size-m(6);
      line-height: 1.2;
      @media screen and (min-width:768px) {
        bottom: size(12);
        right: size(19);
        font-size: size(10);
      }
    }
  }

  .title2 {
    width: 100%;
    margin: 0 0 size-m(30) auto;
    @media screen and (min-width:768px) {
      width: size(622);
      margin: 0 0 size(77) 0;
    }
  }

  .sec {
    @media screen and (min-width:768px) {
      width: size(1488);
      margin: size(180) 0 0 auto;
    }
  }

  .left {
    @media screen and (min-width:768px) {
      width: size(531);
    }
  }

  .right {
    @media screen and (min-width:768px) {
      width: size(897);
    }
  }

  .img2 {
    @media screen and (min-width:768px) {
      margin-bottom: size(99);
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay } from "swiper/modules";
const modules = ref([Autoplay]);
</script>