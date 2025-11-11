<template>
  <div class="nav-bg" v-if="mobOpen" @click="mobOpen = false"></div>
  <header>
    <RouterLink class="logo" to="/" @click="mobOpen = false"><img src="@/assets/mologo.png" /><img src="@/assets/pclogo.png" /></RouterLink>
    <div class="mob-toogle" @click="mobOpen = true">
      <span></span><span></span><span></span>
    </div>
    <nav class="mob-nav" :class="{open: mobOpen}">
      <div>
        <RouterLink to="/team" @click="mobOpen = false">關於國城</RouterLink>
        <RouterLink to="/gallary" @click="mobOpen = false">國城作品</RouterLink>
        <RouterLink to="/pinshi" @click="mobOpen = false">平實特區</RouterLink>
        <RouterLink to="/pinshi-team" @click="mobOpen = false">寳實團隊</RouterLink>
        <RouterLink to="/pinshi-architecture" @click="mobOpen = false">寳實建築</RouterLink>
        <RouterLink to="/news" @click="mobOpen = false">最新消息</RouterLink>
        <RouterLink to="/order" @click="mobOpen = false">預約表單</RouterLink>
       <!-- <RouterLink to="/vision" @click="mobOpen = false">平實城市願景館</RouterLink> -->
      </div>
    </nav>
    <nav class="pc-nav">
      <ul>
        <li class="has-children">
          <RouterLink to="/team">關於國城</RouterLink>
          <ul class="sub-menu">
            <li><RouterLink to="/team#巨擘團隊">巨擘團隊</RouterLink></li>
            <li><RouterLink to="/team#米其林團隊">米其林團隊</RouterLink></li>
          </ul>
        </li>
        <li><RouterLink to="/gallary">國城作品</RouterLink></li>
        <li><RouterLink to="/pinshi">平實特區</RouterLink></li>
        <li class="has-children">
          <RouterLink to="/pinshi-team">寳實團隊</RouterLink>
          <ul class="sub-menu">
            <li><RouterLink to="/pinshi-team#architecture">建築規劃</RouterLink></li>
            <li><RouterLink to="/pinshi-team#public">公設美學</RouterLink></li>
            <li><RouterLink to="/pinshi-team#view">景觀設計</RouterLink></li>
            <li><RouterLink to="/pinshi-team#light">燈光設計</RouterLink></li>
          </ul>
        </li>
        <li class="has-children">
          <RouterLink to="/pinshi-architecture">寳實建築</RouterLink>
          <ul class="sub-menu">
            <li><RouterLink to="/pinshi-architecture#architecture">建築規劃</RouterLink></li>
          </ul>
        </li>
        <li><RouterLink to="/news">最新消息</RouterLink></li>
        <!-- <li class="has-children">
         <RouterLink to="/vision">平實城市願景館</RouterLink>
          <ul class="sub-menu">
            <li><RouterLink to="/vision#about">關於策展</RouterLink></li>
            <li><RouterLink to="/vision#prev">上期展覽</RouterLink></li>
            <li><RouterLink to="/vision#info">展覽資訊</RouterLink></li>
            <li><RouterLink to="/vision#order">預約表單</RouterLink></li>
          </ul> 
        </li> -->
        <li><RouterLink class="order-btn" to="/order">預約表單</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "@/assets/style/function.scss" as func;

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: func.size-m(74);
  padding: 0 0 0 func.size-m(11);
  background: #fff;
  box-shadow: 0px func.size-m(4) func.size-m(27) 0px rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  @media screen and (min-width:768px) {
    height: func.size(115);
    padding: 0;
    box-shadow: 0px func.size(4) func.size(27) 0px rgba(0, 0, 0, 0.55);
  }

  .logo {
    display: block;
    width: func.size-m(110);
    position: relative;
    @media screen and (min-width:768px) {
      width:func.size(407);
      height:func.size(115);
      display: flex; 
      justify-content: center;
       align-items: center;
       &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0; 
        right: func.size(-20);
        width: func.size(20); 
        height: 100%;
        pointer-events: none; 

        background:linear-gradient(to right, #0003,#0001 40%, transparent);
       }
    }

    img {
      width: 100%;
      &:first-child{display: block;}
      &:last-child{display: none;}
    @media screen and (min-width:768px) {
      width: func.size(270);
      height: auto;
        &:first-child{display: none;}
        &:last-child{display: block;}

    }
    }
  }

  .mob-toogle {
    width: func.size-m(85);
    height: func.size-m(74);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media screen and (min-width:768px) {
      display: none;
    }

    span {
      width: func.size-m(33);
      height: func.size-m(4);
      background: #0C0C0C;margin: func.size-m(4) 0;
    }
  }

  .mob-nav {
    position: absolute;
    top: 100%;
    right: 0;
    background: rgba(255, 255, 255, .8);
    padding: func.size-m(42 - 24) 0 func.size-m(19) 0;
    display: none;
    overflow-y: auto;
    max-height: calc(100vh - func.size-m(74));
    max-height: calc(100svh - func.size-m(74));
    width: func.size-m(200);

    &.open {
      display: block;
      @media screen and (min-width:768px) {
        display: none !important;
      }
    }

    & > div {
      position: relative;
      padding-bottom: func.size-m(28);

      &:after {
        content: '';
        position: absolute;
        left: func.size-m(26);
        bottom: func.size-m(14);
        width: func.size-m(148);
        height: func.size-m(4);
        background: #000;
      }
    }

    a {
      color: #000;
      display: block;
      padding: func.size-m(20) func.size-m(26) func.size-m(20) func.size-m(50);
      text-align: right;
      font-size: func.size-m(23);
      font-weight: 500;
      line-height: func.size-m(28);
      letter-spacing: .02em;
      text-decoration: none;
    }
  }

  .pc-nav {
    display: none;
    @media screen and (min-width:768px) {
      display: block;
    }

    ul, li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    a {
      display: block;
      text-decoration: none;
      color: #000;
      font-size: func.size(26);
      font-weight: 500;
      line-height: 1;
      letter-spacing: .02em;
      padding: func.size(11) 0;

      &.order-btn {
        color: #fff;
        background: #269D45;
        padding: func.size(11);
        border: 1px solid #269D45;
        height: func.size(115);
        display: flex;
        align-items: center;
        justify-content: center;
        width: func.size(198);font-size: func.size(23);


        &:hover{
          background: #FFF;
        }
      }

      &:hover{
      color: #269D45;
      transition:.3s;  
      
      }
    }

    li.has-children {
      & > a {
        padding-right: func.size(23);
        background-image: url('data:image/svg+xml,<svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 7L0.870835 0.249999L12.1292 0.25L6.5 7Z" fill="%23231815"/></svg>');
        background-size: func.size(13) auto;
        background-position: right center;
        background-repeat: no-repeat;
      }

      &:hover {
        .sub-menu {
      max-height: 500px; // 依需要調整預估高度
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
        }
      }
    }

    & > ul {
      display: flex;
      align-items: center;
      position: relative;
      
      & > li {
        position: relative;
        margin-right: func.size(80);

        &:last-child {
          margin-right: 0;
        }
      }

      .sub-menu {
        
  width: 100%;
  position: absolute;
  top: calc(100% - func.size(9));
  right: 0;
  text-align: right;
  padding: func.size(20) func.size(24) func.size(30) func.size(24);
  box-sizing: content-box;
  background: #fff;

  // 動畫效果的基礎
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;

  transition: 
    max-height 0.35s ease,
    opacity 0.25s ease,
    transform 0.25s ease;

        &:after {
          content: '';
          position: absolute;
          bottom: func.size(20);
          left: 50%;
          transform: translate(-50%, 0);
          width: 78%;
          height: func.size(4);
          background: #000;
        }

        a {
          box-sizing: border-box;
          padding: func.size(21) 0;
          white-space: nowrap;
        }
      }
    }
  }
}

.nav-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  @media screen and (min-width:768px) {
    display: none !important;
  }
}
</style>

<script setup>
import { ref } from 'vue';

const mobOpen = ref(false);

</script>