<template>
  <footer>
    <div class="container">
      <div>
        <div class="logo">
          <img src="@/assets/logo2.svg" />
        </div>
        <div class="links">
          <RouterLink to="/vision">平實城市願景館</RouterLink>
          <RouterLink to="/team">關於國城</RouterLink>
          <RouterLink to="/work">國城作品</RouterLink>
          <RouterLink to="/pinshi">平實特區</RouterLink>
          <RouterLink to="/pinshi-team">平實團隊</RouterLink>
          <RouterLink to="/pinshi-architecture">平實建築</RouterLink>
          <RouterLink to="/news">最新消息</RouterLink>
        </div>
      </div>
      <div>
        <div class="info"><b>平實城市願景館</b>｜<br>台南市 東區後甲二路／平實二街口</div>
        <div class="btns">
          <RouterLink class="onder-btn" to="/order"><span>預約表單</span></RouterLink>
          <a class="circle" target="_blank" :href="'tel:' + info.phone"><img src="@/assets/icon-phone.svg" /></a>
          <a class="circle" target="_blank" :href="info.fbLink"><img src="@/assets/icon-fb.svg" /></a>
          <!--a class="circle" target="_blank" :href="info.igLink"><img src="@/assets/icon-ig.svg" /></a-->
          <a class="circle" target="_blank" :href="info.lineLink"><img src="@/assets/icon-line.svg" /></a>
          <a class="circle" target="_blank" :href="info.googleLink"><img src="@/assets/icon-map.svg" /></a>
          <div class="line"></div>
          <div class="scrolltop" @click="scrollToTop"></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "@/assets/style/function.scss" as func;

footer {
  position: relative;
  border-top: func.size-m(3) solid #299644;
  padding: func.size-m(29) 0 func.size-m(22) 0;
  @media screen and (min-width:768px) {
    border-top: func.size(5) solid #299644;
    padding: func.size(84) 0 func.size(112) 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: func.size-m(5);
    background-image: url(@/assets/footer-line.webp);
    background-size: auto 100%;
    background-position: center center;
    @media screen and (min-width:768px) {
      height: func.size(25);
    }
  }

  .container {
    padding: 0 func.size-m(30);
    @media screen and (min-width:768px) {
      padding: 0 func.size(82);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .logo {
    margin-bottom: func.size-m(25);
    @media screen and (min-width:768px) {
      margin-bottom: func.size(47);
    }

    img {
      display: block;
      width: func.size-m(155);
      @media screen and (min-width:768px) {
        width: func.size(455);
      }
    }
  }

  .links {
    margin-bottom: func.size-m(26);
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: func.size-m(10) func.size-m(24);
    @media screen and (min-width:768px) {
      margin-bottom: 0;
      justify-content: flex-start;
      gap: func.size(10) func.size(48);
    }

    a {
      color: #000;
      font-size: func.size-m(12);
      font-weight: 700;
      letter-spacing: .04em;
      text-decoration: none;
      @media screen and (min-width:768px) {
        font-size: func.size(20);
        font-weight: 500;
        letter-spacing: .02em;
      }
    }
  }

  .info {
    font-size: func.size-m(12);
    line-height: func.size-m(14);
    letter-spacing: .04em;
    border-top: func.size-m(1) solid #000;
    border-bottom: func.size-m(1) solid #000;
    padding: func.size-m(12) 0;
    margin-bottom: func.size-m(55);
    @media screen and (min-width:768px) {
      font-size: func.size(19);
      line-height: func.size(32);
      border: none;
      padding: 0;
      margin-bottom: func.size(18);

      b {
        font-weight: 400;
      }
    }

    br {
      display: none;
      @media screen and (min-width:768px) {
        display: block;
      }
    }
  }

  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: func.size-m(20);
    left: func.size-m(10);
    //left: func.size-m(55);            
    //width: 100%;
    //margin-bottom: func.size-m(23);
    z-index: 99;
    background: #ffffff;
    padding: func.size-m(10);
    border-radius: func.size-m(30);
    @media screen and (min-width:768px) {
      position: static;
      padding: 0;
      bottom: auto;
      left: auto;
      background: #ffffff00;
      
    }

    a {
      display: block;
      margin: 0 func.size-m(6);
      @media screen and (min-width:768px) {
        margin: 0 func.size(10);
      }
    }

    .onder-btn {
      position: relative;
      font-size: func.size-m(15);
      line-height: func.size-m(14);
      color: #fff;
      font-weight: 700;
      padding: func.size-m(10) func.size-m(12);
      background: #269D45;
      text-decoration: none;
      border-radius: func.size-m(100);
      overflow: hidden;
      border:1px solid #269D45;
      @media screen and (min-width:768px) {
        font-size: func.size(18);
        line-height: func.size(18);
        font-weight: 400;
        padding: func.size(14) func.size(17);
        border-radius: func.size(100);
      }

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        mix-blend-mode: multiply;
        background-image: url(@/assets/mask.webp);
        background-size: 39% auto;
        background-position: 23% 0;
      }

      &:hover{
        color: #269D45;
        background: #fff;
        transition:.3s;
      }
      
      span {
        position: relative;
        z-index: 1;
        
      }
    }

    .circle {
      width: func.size-m(35);
      height: func.size-m(35);
      background: #D3D3D3;
      border: 1px solid #269d4600;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media screen and (min-width:768px) {
        width: func.size(48);
        height: func.size(48);
      }

      img {
        width: auto;
        height: func.size-m(18);
        @media screen and (min-width:768px) {
          height: func.size(25);
        }
      }

      &:hover{
        border: 1px solid #269D45;
        transition:.3s;
      }
    }

    .line {
      width: func.size-m(2);
      height: func.size-m(18);
      margin: 0 func.size-m(6);
      background: #000;
      @media screen and (min-width:768px) {
        width: func.size(2);
        height: func.size(35);
        margin: 0 func.size(10);
      }
    }

    .scrolltop {
      position: relative;
      width: func.size-m(23);
      height: func.size-m(23);
      background: #269D45;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 func.size-m(6);
      cursor: pointer;
      @media screen and (min-width:768px) {
        width: func.size(48);
        height: func.size(48);
        margin: 0 func.size(10);
      }

      &:hover{
        background: #000;
        transition:.3s;
        
        }


      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        mix-blend-mode: multiply;
        background-image: url(@/assets/mask.webp);
        background-size: 39% auto;
        background-position: 23% 0;
      }

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: func.size-m(14.47);
        height: func.size-m(9.58);
        background-image: url('data:image/svg+xml,<svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.8261 0.877441L15.0639 7.21153V10.4582L7.8261 4.12415L0.591797 10.4582V7.21153L7.8261 0.877441Z" fill="white"/></svg>');
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        @media screen and (min-width:768px) {
          width: func.size(29);
          height: func.size(19);
        }

        
      }
    }
  }
}
</style>

<script setup>
import info from '@/info';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function scrollToTop() {
  gsap.to(window, { duration: 1, scrollTo: 0 });
}
</script>