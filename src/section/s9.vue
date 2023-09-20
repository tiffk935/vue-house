<template>
  <section class="s9 relative">
    <img class="lines absolute md:hidden" src="@/section/s9/lines-m.svg" />
    <img class="lines absolute hidden md:block" src="@/section/s9/lines.svg" />
    <div class="t1 upup absolute">
      <div class="tt">
        <div class="flex">
          <span>展宜常閑</span>
          <span>工藝大賞</span>
        </div>
        <img class="en" src="@/section/s9/en.svg" />
      </div>
    </div>
    <div class="logos absolute">
      <div class="logo upup9" v-for="num in 16" :key="num">
        <div class="tt"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  width: 100%;
  height: size-m(361);
  // background-image: url(@/section/s1/bg-m.jpg);
  background-size: cover;
  background-position: center center;
  @media screen and (min-width:768px) {
    height: size(1080);
  }

  .t1 {
    height: size-m(37.6);
    width: size-m(178);
    left: size-m(99);
    top: size-m(28);
    font-family: 'Noto Serif TC';
    font-weight: 600;
    font-size: size-m(19);
    line-height: size-m(27);
    text-align: center;
    letter-spacing: 0.03em;
    margin-bottom: size-m(5.74);
    @media screen and (min-width:768px) {
      height: size(104.91000366210938);
      width: size(477);
      left: size(722);
      top: size(100);
      font-size: size(51);
      line-height: size(73);
      margin-bottom: size(17);
    }

    .flex {
      justify-content: space-between;

      &:before, &:after {
        content: '';
        position: absolute;
        top: 2.5vw;
        left: 23.8vw;
        width: size-m(1);
        height: size-m(14);
        transform: rotate(45deg);
        background: #231815;
        @media screen and (min-width:768px) {
          top: 1vw;
          left: 12.5vw;
          width: size(1);
          height: size(43);
        }
      }

      &:after {
        transform: rotate(-45deg);
      }
    }

    .en {
      width: size-m(134);
      margin: 0 auto;
      @media screen and (min-width:768px) {
        width: size(411.25);
      }
    }
  }

  .lines {
    width: size-m(290.5);
    left: size-m(42);
    top: size-m(57.5);
    @media screen and (min-width:768px) {
      width: size(1369);
      left: size(276);
      top: size(179);
    }
  }

  .logos {
    width: size-m(289);
    height: size-m(210.11);
    left: size-m(44);
    top: size-m(104);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media screen and (min-width:768px) {
      height: size(597.95654296875);
      width: size(1373.661376953125);
      left: size(275.99298095703125);
      top: size(283);
    }
    
    .logo {
      width: 21%;
      height: 11%;
      @media screen and (min-width:768px) {
        width: 16%;
        height: 25%;
        margin-bottom: 2.8vw;
        margin-right: 3.8vw;
      }

      &:nth-child(4n) {
        margin-right: 0;
      }

      .tt {
        background-size: contain;
        background-position: center center;
      }

      &:nth-child(1) {
        .tt {
          background-image: url(@/section/s9/logos/01.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s9/logos/01.svg);
          }
        }
      }
      &:nth-child(2) {
        .tt {
          background-image: url(@/section/s9/logos/02.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s9/logos/02.svg);
          }
        }
      }
      &:nth-child(3) {
        .tt {
          background-image: url(@/section/s9/logos/03.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s9/logos/03.svg);
          }
        }
      }
      &:nth-child(4) {
        .tt {
          background-image: url(@/section/s9/logos/04.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s9/logos/04.svg);
          }
        }
      }
      &:nth-child(5) {
        .tt {
          background-image: url(@/section/s9/logos/05.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s9/logos/05.svg);
          }
        }
      }
      &:nth-child(6) {
        .tt {
          background-image: url(@/section/s9/logos/06.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s9/logos/06.svg);
          }
        }
      }
      &:nth-child(7) {
        .tt {
          background-image: url(@/section/s9/logos/07.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s9/logos/07.svg);
          }
        }
      }
      &:nth-child(8) {
        .tt {
          background-image: url(@/section/s9/logos/08.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s9/logos/08.svg);
          }
        }
      }
      &:nth-child(9) {
        .tt {
          background-image: url(@/section/s9/logos/09.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s9/logos/09.svg);
          }
        }
      }
      &:nth-child(10) {
        .tt {
          background-image: url(@/section/s9/logos/10.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s9/logos/10.svg);
          }
        }
      }
      &:nth-child(11) {
        .tt {
          background-image: url(@/section/s9/logos/11.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s9/logos/11.svg);
          }
        }
      }
      &:nth-child(12) {
        .tt {
          background-image: url(@/section/s9/logos/12.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s9/logos/12.svg);
          }
        }
      }
      &:nth-child(13) {
        .tt {
          background-image: url(@/section/s9/logos/13.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s9/logos/13.svg);
          }
        }
      }
      &:nth-child(14) {
        .tt {
          background-image: url(@/section/s9/logos/14.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s9/logos/14.svg);
          }
        }
      }
      &:nth-child(15) {
        .tt {
          background-image: url(@/section/s9/logos/15.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s9/logos/15.svg);
          }
        }
      }
      &:nth-child(16) {
        .tt {
          background-image: url(@/section/s9/logos/16.svg);
          @media screen and (min-width:768px) {
            background-image: url(@/section/s9/logos/16.svg);
          }
        }
      }
    }
  }
}
</style>
<script setup>
</script>