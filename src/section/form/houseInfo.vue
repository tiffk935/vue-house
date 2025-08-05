<template>
  <div class="container">
    <div class="text-white flex flex-col md:flex-row items-center justify-between">
      <div class="w-full flex-1 items-center justify-center">
        <div class="info-box mx-auto flex flex-col items-center justify-center">
          <div class="title">建案資訊</div>
          <div class="info-items mt-4 grid grid-cols-1 md:grid-cols-2">
            <div 
              class="item flex items-center w-full whitespace-nowrap"
              v-for="item in info.houseInfos"
            >
              <p class="mr-5 font-bold border-l-2 border-[#fff] pl-2 ">{{ item[0] }}</p>
              <p class="whitespace-pre-line leading-normal text-left">{{ item[1] }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]">
    <a href="https://www.lixin.com.tw/" target="_blank">
      <img class="hover:opacity-50" src="@/section/form/footerlogo.gif" alt="Lixin" srcset="">
    </a>
    <a href="https://www.h65.tw/admin/test/login" target="_blank">
      <p class="text-white text-xs">網頁製作</p>
    </a>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.info-box {
  padding: size-m(36) 0 size-m(28) 0;
  @media screen and (min-width:768px) {
    padding: size(60) 0 size(80) 0;
    width: size(900);
    margin: 0 auto;
  }

  .title {
    font-size: size-m(20);
    margin-bottom: size-m(27);
    font-weight: 700;
    @media screen and (min-width:768px) {
      font-size: size(48);
      margin-bottom: size(23);
    }
  }

  .info-items {
    row-gap: size-m(20);
    @media screen and (min-width:768px) {
      row-gap: size(20);
      column-gap: size(60);
    }

    .item {
      font-size: size-m(14);
      line-height: 1.5;
      @media screen and (min-width:768px) {
        line-height: size(17);
        font-size: size(17);

        p:first-child {
          width: 4.5em;
        }
      }
    }
  }
}

.footer {
  margin-bottom: size-m(63);
  @media screen and (min-width:768px) {
    margin-bottom: 0;
  }
}
</style>

<script setup>
import info from "@/info"
</script>