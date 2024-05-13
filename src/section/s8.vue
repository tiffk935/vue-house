<template>
  <section class="s8 user-n w-full relative">
    <div class="gold1 absolute"></div>
    <div class="bg absolute"></div>
    <div class="title relative font-['Noto_Serif_TC']" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">Perfectionism</div>
      <div class="t2">唯有力求完美 <br class="md:hidden">方能精鑄傳世富御</div>
      <img class="style" src="@/section/s8/style.svg" />
    </div>
    <div class="item relative">
      <div class="img img1 relative" @click="openModal(1)">
        <img class="block w-full h-full" src="@/section/s8/img1.webp" />
        <div class="img-txt absolute md:hidden">建築結構示意圖</div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="t1 text-[#776F27]">
          <span>以耐震係數</span>
          <span class="number">0.280G</span>
        </div>
        <div class="t2 text-[#4C6145] font-['Noto_Serif_TC']">守護世代安穩幸福</div>
        <div class="t3 text-[#1F1F1F]">將最深的期許，精鑄於建築量體。「恆合中山」如一以貫的堅持，採尖端耐震工學將耐震係數提高至 0.280G，是您與家人最安心的堡壘。</div>
      </div>
    </div>
    <div class="item relative">
      <div class="img img2 relative">
        <img class="block w-full h-full" src="@/section/s8/img2.webp"/>
        <div class="img-txt absolute">情境示意圖</div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="t1 text-[#776F27]">
          <span class="number">32.4%</span>
          <span>稀有公設比</span>
        </div>
        <div class="t2 text-[#4C6145] font-['Noto_Serif_TC']">難得寬裕坪數空間</div>
        <div class="t3 text-[#1F1F1F]">恆合中山傾心為生活在忙碌城市中的您，以稀有難得的約32.4%低公設比，構築出優質寬敞的生活空間，讓從容自在充滿每一個空間角落。</div>
      </div>
    </div>
    <div class="gold2 absolute"></div>

    <Transition>
      <div v-if="showModal">
        <div class="tk-modal">
          <div class="tk-close" @click="showModal = false"></div>
          <div class="img-wrapper">
            <img v-if="img === 1" src="@/section/s8/img1.webp" @load="onImgLoad($event)" />
          </div>
          <svg viewBox="0 0 181 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292893 7.04289C-0.0976311 7.43342 -0.0976311 8.06658 0.292893 8.45711L6.65685 14.8211C7.04738 15.2116 7.68054 15.2116 8.07107 14.8211C8.46159 14.4305 8.46159 13.7974 8.07107 13.4069L2.41421 7.75L8.07107 2.09315C8.46159 1.70262 8.46159 1.06946 8.07107 0.678932C7.68054 0.288408 7.04738 0.288408 6.65685 0.678932L0.292893 7.04289ZM180.707 8.45711C181.098 8.06658 181.098 7.43342 180.707 7.04289L174.343 0.678932C173.953 0.288408 173.319 0.288408 172.929 0.678932C172.538 1.06946 172.538 1.70262 172.929 2.09315L178.586 7.75L172.929 13.4069C172.538 13.7974 172.538 14.4305 172.929 14.8211C173.319 15.2116 173.953 15.2116 174.343 14.8211L180.707 8.45711ZM1 8.75H180V6.75H1V8.75Z" fill="black"/>
            <circle cx="90.5" cy="8.5" r="8.25" fill="black"/>
            <circle cx="90.5" cy="8.5" r="5.25" fill="#39C8F0"/>
          </svg>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  padding: size-m(50.29 + 20) 0 size-m(70) 0;
  @media (min-width: 768px) {
    padding: size(165 + 32) 0 size(186) 0;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity .2s;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .v-enter-to,
  .v-leave-from {
    opacity: 1;
  }

  .gold1 {
    top: 0;
    left: 0;
    width: 100%;
    height: size-m(20);
    background-image: url(@/section/s8/gold-m.webp);
    background-size: cover;
    background-position: center center;
    @media (min-width: 768px) {
      height: size(32);
      background-image: url(@/section/s8/gold.webp);
    }
  }

  .gold2 {
    bottom: 0;
    left: 0;
    width: 100%;
    height: size-m(20);
    background-image: url(@/section/s8/gold-m.webp);
    background-size: cover;
    background-position: center center;
    @media (min-width: 768px) {
      height: size(32);
      background-image: url(@/section/s8/gold.webp);
    }
  }

  .bg {
    top: size-m(20);
    left: 0;
    width: 100%;
    height: calc(100% - size-m(20));
    background-image: url(@/section/s8/bg-m.webp);
    background-size: cover;
    background-position: center center;
    @media (min-width: 768px) {
      top: size(32);
      height: calc(100% - size(32));
      background-image: url(@/section/s8/bg.webp);
    }
  }

  .title {
    font-weight: 700;
    text-align: center;
    margin-bottom: size-m(40);
    @media (min-width: 768px) {
      margin-bottom: size(138);
    }

    .t1 {
      color: rgba(76, 97, 69, 0.50);
      font-size: size-m(14);
      line-height: normal;
      margin-bottom: size-m(7.34);
      @media (min-width: 768px) {
        font-size: size(45);
        margin-bottom: size(20);
      }
    }

    .t2 {
      color: #4C6145;
      font-size: size-m(24);
      line-height: 150%;
      letter-spacing: size-m(1.44);
      margin-bottom: size-m(14);
      @media (min-width: 768px) {
        font-size: size(45);
        letter-spacing: size(2.7);
        margin-bottom: size(28);
      }
    }

    .style {
      width: size-m(134);
      margin: 0 auto;
      @media (min-width: 768px) {
        width: size(299);
      }
    }
  }

  .item {
    margin-bottom: size-m(70);
    @media (min-width: 768px) {
      margin-bottom: size(128);
      display: flex;
      align-items: flex-end;
      padding-left: size(201);
    }

    &:last-child {
      margin-bottom: 0;
    }

    .img {
      width: size-m(340);
      height: size-m(290);
      margin-bottom: size-m(9.41);
      @media (min-width: 768px) {
        width: size(859.85);
        height: size(474.07);
        margin-bottom: 0;
        margin-right: size(115);
      }

      &:after {
        @media (min-width: 768px) {
          content: '';
          position: absolute;
          top: size(191);
          left: size(121);
          width: size(52);
          height: size(52);
          background-image: url(@/section/s6/zoom.svg);
          background-size: contain;
          opacity: 0;
          transition: opacity .2s;
        }
      }

      img {
        object-fit: cover;
        border-top-right-radius: size-m(50);
        @media (min-width: 768px) {
          border-top-right-radius: size(80);
        }
      }

      &.img1 {
        cursor: pointer;
        @media (min-width: 768px) {
          &:hover:after {
            opacity: 1;
          }
        }
      }

      &.img1 img {
        object-position: 58% 50%;
        @media (min-width: 768px) {
          object-position: 50% 50%;
        }
      }

      .img-txt {
        bottom: size-m(10);
        left: size-m(10);
        color: #fff;
        font-size: size-m(12);
        font-weight: 500;
        line-height: 100%;
        letter-spacing: size-m(1.2);
        @media (min-width: 768px) {
          bottom: size(25);
          left: size(40);
          font-size: size(15);
          letter-spacing: size(7);
          font-weight: 400;
        }
      }
    }

    .content {
      @media (min-width: 768px) {
        width: size(500);
        padding-bottom: size(80);
      }
    }

    .t1 {
      position: relative;
      padding-left: size-m(145 + 8);
      display: flex;
      align-items: center;
      font-size: size-m(16);
      font-weight: 500;
      line-height: normal;
      margin-bottom: size-m(15);
      @media (min-width: 768px) {
        padding-left: size(155 + 28);
        font-size: size(28);
        margin-bottom: size(10.5);
      }

      &:before {
        content: '';
        position: absolute;
        top: 55%;
        left: 0;
        transform: translate(0, -50%);
        width: size-m(145);
        height: size-m(1);
        background: #776F27;
        @media (min-width: 768px) {
          width: size(155);
          height: size(1);
        }
      }

      &:after {
        content: '';
        position: absolute;
        top: 55%;
        left: size-m(145 - 2);
        transform: translate(0, -50%);
        width: size-m(4);
        height: size-m(4);
        border-radius: 50%;
        background: #776F27;
        @media (min-width: 768px) {
          left: size(155 - 2);
          width: size(4);
          height: size(4);
        }
      }

      span {
        &.number {
          font-size: size-m(30);
          font-weight: 700;
          line-height: normal;
          @media (min-width: 768px) {
            font-size: size(42);
          }
        }

        &:nth-child(1) {
          margin-right: size-m(6.22);
          @media (min-width: 768px) {
            margin-right: size(15);
          }
        }
      }
    }

    .t2 {
      font-size: size-m(22);
      font-weight: 700;
      line-height: normal;
      margin-bottom: size-m(13.58);
      padding: 0 size-m(35);
      @media (min-width: 768px) {
        font-size: size(60);
        margin-bottom: size(30.5);
        padding: 0;
      }
    }

    .t3 {
      text-align: justify;
      font-size: size-m(14);
      line-height: 170%;
      padding: 0 size-m(35);
      @media (min-width: 768px) {
        font-size: size(18);
        line-height: normal;
        padding: 0;
      }
    }
  }

  .tk-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
    background: #F7F7F7;

    .tk-close {
      position: absolute;
      top: size-m(10);
      right: size-m(10);
      width: size-m(40);
      height: size-m(40);
      cursor: pointer;
      @media (min-width: 768px) {
        top: size(0);
        right: size(0);
        width: size(90);
        height: size(90);
      }
      
      &:before, &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        width: size-m(25);
        height: size-m(1);
        background: #000;
        @media (min-width: 768px) {
          width: size(50);
          height: size(1);
        }
      }

      &:after {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: size-m(180);
      pointer-events: none;
      transition: opacity .2s;
      @media (min-width: 768px) {
        display: none
      }
    }

    .img-wrapper {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      width: 100%;
      height: calc(100% - size-m(120));
      overflow-y: hidden;
      overflow-x: auto;
      @media (min-width: 768px) {
        height: calc(100% - size(220));
      }

      img {
        width: auto;
        max-width: none;
        height: 100%;
        display: block;
        @media (min-width: 768px) {
          width: 100%;
          object-fit: contain;
        }
      }
    }
  }
}
</style>

<script setup>
import { ref } from "vue";
const showModal = ref(false);
const img = ref();

function openModal(num) {
  showModal.value = true;
  img.value = num;
}

function onImgLoad(e) {
  const img = e.target;
  if (document.querySelector('.s8 .img-wrapper') && img) {
    let status = 0;
    let hideHand = false;
    document.querySelector('.s8 .tk-modal svg').style.opacity = 1;
    document.querySelector('.s8 .img-wrapper').scrollLeft = img.clientWidth * 0.4 - window.innerWidth/2;
    document.querySelector('.s8 .img-wrapper').addEventListener("scroll", () => {
      status++;
      if(status > 1 && !hideHand){
        document.querySelector('.s8 .img-wrapper').parentNode.querySelector('svg').style.opacity = 0;
        hideHand = true;
      }
    });
  }
}
</script>