<template>
  <section id="contact">
    <div class="title"><span>CONTACT US</span>聯絡我們</div>
    <div class="flex">
      <img class="pic" src="@/assets/logo.png" />
      <div class="info">
        <div class="flex2">
          <div class="left">
            <a target="_blank" :href="'tel:' + info.phone"><img src="@/assets/icon-phone.svg" />{{ info.phone }}</a>
            <a target="_blank" :href="info.fbMessage"><img src="@/assets/icon-messenger.svg" />Facebook 諮詢</a>
          </div>
          <div class="right">
            <a class="circle" target="_blank" :href="info.fbLink"><img src="@/assets/icon-fb.svg" /></a>
            <a class="circle" target="_blank" :href="info.igLink"><img src="@/assets/icon-ig.svg" /></a>
            <a class="circle" target="_blank" :href="info.lineLink"><img src="@/assets/icon-line.svg" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="order">
    <h2>預約表單</h2>
    <Order />
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/style/function.scss" as func;

#contact {
  padding: func.size-m(30) func.size-m(30) func.size-m(45) func.size-m(30);
  @media screen and (min-width:768px) {
    padding: func.size(110) 0 func.size(161) 0;
  }

  .title {
    font-size: func.size-m(18);
    font-weight: 700;
    letter-spacing: .04em;
    margin-bottom: func.size-m(36);
    @media screen and (min-width:768px) {
      font-size: func.size(33);
      margin-bottom: func.size(168);
      padding: 0 func.size(85);
    }

    span {
      font-weight: 100;
      margin-right: func.size-m(6);
      @media screen and (min-width:768px) {
        margin-right: func.size(21);
      }
    }
  }

  .flex {
    @media screen and (min-width:768px) {
      display: flex;
      align-items: center;
      padding: 0 func.size(304);
    }
  }

  .pic {
    display: block;
    width: 100%;
    margin-bottom: func.size-m(34);
    margin-left: func.size-m(-15);
    @media screen and (min-width:768px) {
      width: func.size(835);
      padding-right: func.size(208);
      border-right: func.size(1) solid #000;
      margin-bottom: 0;
    }
  }

  .info {
    border-top: func.size-m(1) solid #000;
    padding-top: func.size-m(22);
    @media screen and (min-width:768px) {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      border: none;
      padding-top: 0;
    }

    .flex2 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (min-width:768px) {
        display: block;
      }

      .left {
        @media screen and (min-width:768px) {
          margin-bottom: func.size(67);
        }

        a {
          display: flex;
          color: #000;
          font-size: func.size-m(14);
          font-weight: 500;
          text-decoration: none;
          margin-bottom: func.size-m(15);
          @media screen and (min-width:768px) {
            font-size: func.size(28);
            margin-bottom: func.size(67);
          }

          &:last-child {
            margin-bottom: 0;
          }
        }

        img {
          width: func.size-m(15);
          display: block;
          margin-right: func.size-m(4);
          @media screen and (min-width:768px) {
            width: func.size(41);
            margin-right: func.size(18);
          }
        }
      }

      .right {
        display: flex;
        justify-content: space-between;
        width: func.size-m(138);
        @media screen and (min-width:768px) {
          width: func.size(252);
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
            width: func.size(63);
            height: func.size(63);
          }

          img {
            width: auto;
            height: func.size-m(18);
            @media screen and (min-width:768px) {
              height: func.size(33);
            }
          }

          &:hover{
            border: 1px solid #269D45;
            transition:.3s;
          }
        }
      }
    }
  }
}

#order {
  padding: func.size-m(30) 0 func.size-m(60) 0;
  @media screen and (min-width:768px) {
    padding: func.size(98) 0 func.size(216) 0;
  }
  
  h2 {
    display: none;
    @media screen and (min-width:768px) {
      display: block;
      padding: 0 func.size(304);
      margin: 0 0 func.size(118) 0;
    }
  }
}
</style>

<script setup>
import info from '@/info';
import Order from '@/components/Order.vue';
</script>