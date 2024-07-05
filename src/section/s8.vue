<template>
  <section class="s8 w-full relative bg-[#EFEFEF]">
    <div class="map">
      <img src="@/section/s8/map.jpg" />
      <div class="mask">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63" fill="none">
          <circle cx="31.5" cy="31.5" r="31.5" fill="white"/>
          <path d="M29.8889 40.7778C35.9027 40.7778 40.7778 35.9027 40.7778 29.8889C40.7778 23.8751 35.9027 19 29.8889 19C23.8751 19 19 23.8751 19 29.8889C19 35.9027 23.8751 40.7778 29.8889 40.7778Z" stroke="#217036" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M43.4999 43.4999L37.5791 37.5791" stroke="#217036" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
      <div class="t1">
        公園
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 27" fill="none">
          <path d="M19.6092 23.0634C17.0716 25.7018 14.0207 27 10.4852 27C6.94967 27 4.15545 25.7018 2.25734 23.0634C0.38774 20.5556 -0.312851 17.3734 0.127055 13.5211C0.566961 9.66875 1.99258 6.44443 4.39577 3.93662C6.88857 1.34031 9.94754 0 13.5564 0C17.1653 0 19.8821 1.34031 21.7843 3.93662C23.6172 6.44864 24.3097 9.67296 23.8738 13.5211C23.4339 17.3734 22.0124 20.5556 19.6092 23.0634ZM18.7742 5.56775C17.7559 2.80284 15.9474 1.4246 13.3975 1.4246C10.8477 1.4246 8.68893 2.80706 7.03928 5.56775C5.68698 7.78473 4.87641 10.4232 4.52611 13.5211C4.17989 16.5768 4.42836 19.2153 5.27966 21.3901C6.29796 24.1508 8.06573 25.5333 10.6563 25.5333C13.2468 25.5333 15.2875 24.1508 16.9372 21.3901C18.2854 19.2111 19.1326 16.5768 19.4829 13.5211C19.8373 10.4232 19.5847 7.78473 18.7782 5.56775H18.7742Z" fill="#217036"/>
        </svg>
        距離、學校<br class="md:hidden">
        散步到燕巢市心優質生活圈
      </div>
      <div class="t2">兒二公園 × 國小國中 × 行政中心<br class="md:hidden">交流道 × 阿公店景區</div>
      <div class="t3">東泥建設從選地開始，即為住戶考量到生活需求，「東泥大賦」結合自然、人文、便捷的優質環境，是燕巢市中心首屈一指的優生美地。</div>
    </div>
    
    <div class="slider">
      <Slider />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  padding: size-m(48) size-m(30) size-m(74);
  background-image: url(@/section/s8/bg.png);
  background-size: size-m(1920) auto;
  background-position: 32.5% 0;
  background-repeat: no-repeat;
  text-align: center;
  @media screen and (min-width:768px) {
    padding: size(100) 0 size(84);
    background-size: size(1920) auto;
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
}
</style>

<script setup>
import Slider from "@/section/s8/slider.vue"
</script>