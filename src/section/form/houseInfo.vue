<template>
  <!--  -->
  <div class="house" v-if="info.houseInfos.length > 0">
    <div class="flex h-full flex-col md:flex-row items-center justify-between">
      <div
        class="flex-1 items-center justify-center py-10 font-['Noto_Sans_TC']"
      >
        <div
          class="h-full info-box mx-auto flex flex-col items-center justify-center"
        >
          <div class="title">建案資訊</div>
          <div class="info-items mt-4 w-full grid grid-cols-1 md:grid-cols-2">
            <div
              class="item font-bold flex items-center w-full whitespace-nowrap"
              v-for="item in info.houseInfos"
              :key="item"
            >
              <p
                class="mr-5 border-l-2 border-[#C9A063] pl-2 text-[#C9A063]"
                v-html="item[0]"
              ></p>
              <p
                class="whitespace-pre-line leading-normal text-left text-[#fff] font-normal"
                v-html="item[1]"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--
    <div class="house bg-[#FF3EA1] flex items-center justify-center">
            <p class=""><img src="@/section/form/dblogo.svg" alt="得邦廣告" srcset=""></p>
    </div> -->
  <div
    class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]"
  >
    <a href="https://www.lixin.com.tw/" target="_blank"
      ><img
        class="hover:opacity-50"
        src="//h65.tw/img/footerLogo.gif"
        alt="立炘數位"
        srcset=""
    /></a>
    <a
      href="https://www.h65.tw/admin/test/login"
      target="_blank"
      class="text-white text-xs"
      >網頁製作</a
    >
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

// .map {
//     width: size(772);
//     height: size(642);
//     background-color: #75E3D5;
//     background-image: url('@/section/form/map.png');
//     background-size: contain;
//     background-position: center;
//     background-repeat: no-repeat;
// }
.displaynone {
  display: none;
}
.house {
    display: none;
  // height: auto;
  color: #fff;
  font-size: size(22);
  // height:4em;
  img {
    height: 1.3em;
    vertical-align: middle;
  }
}
.info-box {
  width: size(800);

  .title {
    font-size: size(40);
    font-weight: normal;
    color: #fff;
    margin: 0 auto 1em auto;
  }

  .info-items {
    row-gap: size(20);
    column-gap: size(20);

    .item {
      line-height: size(17);
      font-size: size(16);
      align-items: flex-start;
      line-height: 1.5;
      text-align: left;

      p:first-child {
        // min-width: 4.5em;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .house {
    // background:#fff;
    //  height: sizem(400);
    font-size: sizem(13);
  }
  .footer {
    margin-bottom: sizem(0);
    //margin-bottom: sizem(63);
  }

  .info-box {
    width: sizem(313);
    padding: 0;

    .title {
      font-size: sizem(29);
      width: auto;
    }

    .info-items {
      row-gap: sizem(20);

      .item {
        font-size: sizem(13);
      }
    }
  }
}
</style>

<script setup>
import info from "@/info";
</script>
