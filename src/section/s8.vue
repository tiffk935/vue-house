<template>
  <section class="s8 w-full relative bg-[#EFEFEF]">
    <img class="bg_ani absolute" src="@/section/s1/bg_ani.svg" />
    <div class="map">
      <img src="@/section/s8/map.jpg" loading="lazy" />
      <div class="mask" @click="s8open = true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63" fill="none">
          <circle cx="31.5" cy="31.5" r="31.5" fill="#fffc" stroke-width="1" stroke="#fff" />
          <path d="M37.6,37.6C47.8,27.4,32.4,12,22.2,22.2C11.9,32.4,27.3,47.8,37.6,37.6z M43.5,43.5l-5.9-5.9" stroke="#217036" stroke-width="2.5" stroke-linecap="round" />
        </svg>
      </div>
    </div>

    <div>
      <div class="t1" data-aos="fade-up" data-aos-delay="0">
        公園<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 27" fill="#217036">
          <path d="M10.7,27c-16,0-12.8-27,2.9-27C29.7,0,25.8,27,10.7,27z M19.6,10.7c0-14.3-15.3-11.8-15.3,5C4.4,31,19.6,28,19.6,10.7z"/>
        </svg>距離、學校<br class="md:hidden">散步到燕巢市心優質生活圈
      </div>
      <div class="t2" data-aos="fade-up" data-aos-delay="200">兒二公園 × 國小國中 × 行政中心<br class="md:hidden">交流道 × 阿公店景區</div>
      <div class="t3" data-aos="fade-up" data-aos-delay="400">東泥建設從選地開始，即為住戶考量到生活需求，「東泥大賦」結合自然、人文、便捷的優質環境，是燕巢市中心首屈一指的優生美地。</div>
    </div>
    
    <div class="slider">
      <Slider />
    </div>
    
  <!-- Modal -->
  <input type="checkbox" v-model="s8open" id="s8-modal" class="modal-toggle" />
  <div class="modal boxbg">
      <label for="s8-modal" class="mbg absolute"></label>
      <label for="s8-modal" class="btn fixed">✕</label>
    <div class="s8-box">
    <img src="./s8/map.jpg" alt="map" loading="lazy" >
    </div>
  </div>

  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  padding: size-m(48) size-m(30) size-m(74);
  background-image: url(@/section/s8/bg.webp);
  background-size: size-m(1000) auto;
  background-position: 20% 0;
  background-repeat: no-repeat;
  text-align: center;overflow: hidden;
  @media screen and (min-width:768px) {
    padding: size(100) 0 size(84);
    background-size: size(1920) auto;
  }
    .bg_ani {
      top: size-m(-188);
      left: size-m(-125);
     // bottom: size-m(-16);
      width: size-m(1120);
      height:size-m(622);
      max-width: none;
      transform: rotate(180deg);
      @media screen and (min-width:768px) {
        top: size(-363);
        left: size(-5);
       // bottom: size(-18);
        width:112.5%;
        height:size(1200);
      }
    }
  
  .map {
    border-radius: size-m(28);
    height: size-m(373);
    overflow: hidden;
    position: relative;
    margin-bottom: size-m(31);
    @media screen and (min-width:768px) {
      width: size(1580);
      border-radius: size(30);
      height: auto;
      margin: 0 auto size(47);
      border: size(1) solid #217036;
    }

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(33, 112, 54, 0.50);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      @media screen and (min-width:768px) {
        display: none;
      }

      svg {
        display: block;
        width: size-m(63);
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      @media screen and (min-width:768px) {
        height: auto;
      }
    }
  }

  .t1 {
    color: #217036;
    font-size: size-m(25);
    font-weight: 700;
    letter-spacing: .02em;
    margin-bottom: size-m(11);
    @media screen and (min-width:768px) {
      font-size: size(54);
      letter-spacing: .04em;
      margin-bottom: size(63);
    }

    svg {
      display: inline-block;
      width: size-m(24);
      transform: translateY(size-m(-4));
      margin: 0 .15em;
      @media screen and (min-width:768px) {
        width: size(59);
        transform: translateY(size(-4));
      }
    }
  }

  .t2 {
    color: #217036;
    font-size: size-m(14);
    line-height: 150%;
    font-weight: 700;
    margin-bottom: size-m(19);
    @media screen and (min-width:768px) {
      font-size: size(34);
      line-height: 111%;
      margin-bottom: size(22);
    }
  }

  .t3 {
    font-size: size-m(12);
    font-weight: 500;
    line-height: 175%;
    margin-bottom: size-m(29);
    @media screen and (min-width:768px) {
      font-size: size(22);
      line-height: 172%;
      margin-bottom: size(75);
    }
  }

  .slider {
    position: relative;
    margin: 0 size-m(-30);
    @media screen and (min-width:768px) {
      margin: 0;
    }

    &:before, &:after {
      content: '';
      position: absolute;
      top: 0;
      width: size-m(70);
      height: 100%;
      z-index: 100;
      @media screen and (min-width:768px) {
        width: size(456);
      }
    }

    &:before {
      left: 0;
      background: linear-gradient(90deg, #EFEFEF 0%, rgba(239, 239, 239, 0.00) 100%);
    }

    &:after {
      right: 0;
      background: linear-gradient(270deg, #EFEFEF 0%, rgba(239, 239, 239, 0.00) 100%);
    }

    .slide-item {
      width: size-m(315);
      margin-right: size-m(20);
      @media screen and (min-width:768px) {
        width: size(456);
        margin-right: size(33.27);
      }

      img {
        width: 100%;
        height: size-m(211);
        @media screen and (min-width:768px) {
          height: auto;
        }
      }
      
      .caption {
        height: size-m(63.67);
        background-color: #2C4C37;
        text-align: center;
        color: #FFF;
        text-align: center;
        font-family: "Noto Sans TC";
        font-size: size-m(13);
        font-weight: 500;
        line-height: 140%;
        letter-spacing: .11em;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (min-width:768px) {
          height: size(92);
          font-size: size(15);
        }

        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url(@/section/s8/bg2.png);
          background-size: cover;
          mix-blend-mode: soft-light;
        }

        span {
          font-size: size-m(15);
          line-height: 1;
          @media screen and (min-width:768px) {
            font-size: size(15);
          }
        }
      }
    }
  }
  .s8-box{
    height:95%;
    width:100%;
    img{height: 100%;max-width: none;}
  }
  .modal{
    .mbg{top: 0;left: 0;width: 100%;height: 100%;}
    .btn{top:size-m(10);right:size-m(10);border-radius: 50%;
    background: #444C;border: 0;}
  }
}
</style>

<script setup>
import { ref, nextTick } from 'vue';

const s8open = ref(false);
</script>