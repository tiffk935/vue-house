<template>
  <div class="nav-bg" v-if="mobOpen" @click="mobOpen = false"></div>
  <header>
    <RouterLink class="logo" to="/" @click="mobOpen = false"><img src="@/assets/logo.svg" /></RouterLink>
    <div class="mob-toogle" @click="mobOpen = true">
      <span></span><span></span><span></span>
    </div>
    <nav class="mob-nav" :class="{open: mobOpen}">
      <div>
        <RouterLink to="/vision" @click="mobOpen = false">平實城市願景館</RouterLink>
        <RouterLink to="/team" @click="mobOpen = false">關於國城</RouterLink>
        <RouterLink to="/work" @click="mobOpen = false">國城作品</RouterLink>
        <RouterLink to="/pinshi" @click="mobOpen = false">平實特區</RouterLink>
        <RouterLink to="/pinshi-team" @click="mobOpen = false">寶實團隊</RouterLink>
        <RouterLink to="/pinshi-architecture" @click="mobOpen = false">寶實建築</RouterLink>
        <RouterLink to="/news" @click="mobOpen = false">最新消息</RouterLink>
        <RouterLink to="/order" @click="mobOpen = false">預約表單</RouterLink>
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
        <li><RouterLink to="/work">國城作品</RouterLink></li>
        <li><RouterLink to="/pinshi">平實特區</RouterLink></li>
        <li class="has-children">
          <RouterLink to="/pinshi-team">寶實團隊</RouterLink>
          <ul class="sub-menu">
            <li><RouterLink to="/pinshi-team#architecture">建築規劃</RouterLink></li>
            <li><RouterLink to="/pinshi-team#public">公設美學</RouterLink></li>
            <li><RouterLink to="/pinshi-team#view">景觀設計</RouterLink></li>
            <li><RouterLink to="/pinshi-team#light">燈光設計</RouterLink></li>
          </ul>
        </li>
        <li class="has-children">
          <RouterLink to="/pinshi-architecture">寶實建築</RouterLink>
          <ul class="sub-menu">
            <li><RouterLink to="/pinshi-architecture#architecture">建築規劃</RouterLink></li>
            <li><RouterLink to="/pinshi-architecture#view">景觀設計</RouterLink></li>
            <li><RouterLink to="/pinshi-architecture#public">公設美學</RouterLink></li>
          </ul>
        </li>
        <li><RouterLink to="/news">最新消息</RouterLink></li>
        <li class="has-children">
          <RouterLink to="/vision">平實城市願景館</RouterLink>
          <ul class="sub-menu">
            <li><RouterLink to="/vision#about">關於策展</RouterLink></li>
            <li><RouterLink to="/vision#prev">上期展覽</RouterLink></li>
            <li><RouterLink to="/vision#info">展覽資訊</RouterLink></li>
            <li><RouterLink to="/vision#order">預約表單</RouterLink></li>
          </ul>
        </li>
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
  padding: 0 func.size-m(30);
  background: #fff;
  box-shadow: 0px func.size-m(4) func.size-m(27) 0px rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  @media screen and (min-width:768px) {
    height: func.size(165);
    padding: 0 func.size(64) 0 func.size(96);
    box-shadow: 0px func.size(4) func.size(27) 0px rgba(0, 0, 0, 0.55);
  }

  .logo {
    display: block;
    width: func.size-m(58);
    @media screen and (min-width:768px) {
      width: func.size(147.6);
    }

    img {
      display: block;
      width: 100%;
    }
  }

  .mob-toogle {
    width: func.size-m(33);
    height: func.size-m(29);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    @media screen and (min-width:768px) {
      display: none;
    }

    span {
      width: 100%;
      height: func.size-m(3.87);
      background: #0C0C0C;
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
        width: func.size-m(188);
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
      font-size: func.size(23);
      font-weight: 500;
      line-height: 1;
      letter-spacing: .02em;
      padding: func.size(11) 0;

      &.order-btn {
        color: #fff;
        background: #269D45;
        padding: func.size(11);
        border: 1px solid #269D45;


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
          display: block;
        }
      }
    }

    & > ul {
      display: flex;
      align-items: center;
      position: relative;
      
      & > li {
        position: relative;
        margin-right: func.size(60);

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
        display: none;

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