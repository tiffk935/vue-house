<template>
  <section class="banner">
    <img class="mob" src="@/assets/work/banner-m.jpg" />
    <img class="pc" src="@/assets/work/banner.jpg" />
  </section>
  <section class="content">
    <div class="title">
      <div class="t1">港都豪宅建築的定潮者</div>
      <div class="t2">想把最好的都帶進台灣來，這條路我們走了13年</div>
    </div>
    <img class="gallary mob" src="@/assets/work/gallary-m.jpg" />
    <img class="gallary pc" src="@/assets/work/gallary.jpg" />
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
    margin-bottom: func.size-m(46);
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

  .gallary {
    width: 100%;
  }
}
</style>