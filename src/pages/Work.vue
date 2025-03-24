<template>
  <section class="banner">
    <img class="mob" src="@/assets/work/banner-m.webp" />
    <img class="pc" src="@/assets/work/banner.webp" />
  </section>
  <section class="content">
    <div class="title">
      <div class="t1">港都豪宅建築的定潮者</div>
      <div class="t2">想把最好的都帶進台灣來，這條路我們走了13年</div>
    </div>
    <div class="work-list-title">【 作品列表 】</div>
    <RouterLink to="/gallary">
      <div class="work">
        <img class="pic" src="@/assets/work/pic.webp" />
        <div class="logo">
          <img src="@/assets/work/logo.svg" />
        </div>
      </div>
    </RouterLink>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/style/function.scss" as func;

.mob {
  display: block;
  @media screen and (min-width:768px) {
    display: none;
  }
}

.pc {
  display: none;
  @media screen and (min-width:768px) {
    display: block;
  }
}

.banner {
  padding: 0 0 func.size-m(27) 0;
  @media screen and (min-width:768px) {
    padding: 0 0 func.size(44) 0;
  }

  img {
    width: 100%;
  }
}

.content {
  padding: 0 func.size-m(30) func.size-m(86) func.size-m(30);
  @media screen and (min-width:768px) {
    padding: 0 func.size(160) func.size(215) func.size(160);
  }

  .title {
    margin-bottom: func.size-m(40);
    padding-bottom: func.size-m(23);
    border-bottom: func.size-m(1) solid #000;
    @media screen and (min-width:768px) {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: func.size(157);
      padding-bottom: func.size(44);
      border-bottom: func.size(1) solid #000;
    }

    .t1 {
      font-size: func.size-m(20);
      font-weight: 700;
      margin-bottom: func.size-m(9);
      @media screen and (min-width:768px) {
        font-size: func.size(78);
        margin-bottom: 0;
        line-height: 1;
      }
    }

    .t2 {
      font-size: func.size-m(12);
      @media screen and (min-width:768px) {
        font-size: func.size(32);
        margin-bottom: 0;
        line-height: 1;
      }
    }
  }

  .work-list-title {
    text-align: center;
    font-size: func.size-m(16);
    letter-spacing: .22em;
    margin-bottom: func.size-m(34);
    @media screen and (min-width:768px) {
      font-size: func.size(44);
      margin-bottom: func.size(117);
    }
  }

  .work {
    position: relative;
    @media screen and (min-width:768px) {
      display: flex;
      align-items: stretch;
    }

    .pic {
      display: block;
      width: 100%;
      @media screen and (min-width:768px) {
        width: func.size(879);
      }
    }

    .logo {
      @media screen and (min-width:768px) {
        width: calc(100% - func.size(879));
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 31%;
        filter: brightness(0) invert(1);
        @media screen and (min-width:768px) {
          position: static;
          transform: none;
          width: func.size(256);
          filter: none;
        }
      }
    }
  }
}
</style>