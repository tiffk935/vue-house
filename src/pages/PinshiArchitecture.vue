<template>
  <section>
    <div class="banner">
      <img class="mob" src="@/assets/home/archi/pic-m.webp" />
      <img class="pc" src="@/assets/home/archi/pic.webp" />
    </div>
    <div class="coming-soon">敬請期待｜coming soon</div>
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

section {
  padding: func.size-m(134) 0 func.size-m(49) 0;
  @media screen and (min-width:768px) {
    padding: func.size(273) 0 func.size(95) 0;
  }
}

.banner {
  margin-bottom: func.size-m(120);
  @media screen and (min-width:768px) {
    margin-bottom: func.size(232);
  }

  img {
    width: 88.8%;
    margin: 0 0 0 auto;
    @media screen and (min-width:768px) {
      width: calc(100% - func.size(330));
      margin: 0 auto;
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