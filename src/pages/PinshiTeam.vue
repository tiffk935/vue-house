<template>
  <section class="banner">
    <img class="mob" src="@/assets/pinshi-team/banner-m.jpg" />
    <img class="pc" src="@/assets/pinshi-team/banner.jpg" />
  </section>
  <div class="coming-soon">敬請期待｜coming soon</div>
</template>

<style lang="scss">
@use "@/assets/style/function.scss" as func;

#page-pinshiTeam  {
  background: #fff;
  padding-bottom: func.size-m(49);
  @media screen and (min-width:768px) {
    padding-bottom: func.size(95);
  }
}
</style>

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
  margin: func.size-m(74 + 75) 0 func.size-m(113) 0;
  @media screen and (min-width:768px) {
    margin: func.size(165 + 181) 0 func.size(156) 0;
  }

  img {
    width: 88.8%;
    margin: 0 0 0 auto;
    @media screen and (min-width:768px) {
      width: 91%;
    }
  }
}

.coming-soon {
  width: calc(100% - func.size-m(60));
  margin: 0 auto;
  text-align: right;
  font-size: func.size-m(14);
  letter-spacing: .04em;
  padding-bottom: func.size-m(9);
  border-bottom: func.size-m(1) solid #000;
  @media screen and (min-width:768px) {
    width: calc(100% - func.size(330));
    font-size: func.size(37);
    padding-bottom: func.size(17);
    border-bottom: func.size(1) solid #000;
  }
}
</style>