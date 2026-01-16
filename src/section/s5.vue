<template>
  <section class="s5 user-n w-full relative bg-white text-[#000]">
    <div class="subtitle text-[#5ACBBD]">
      <div class="en">Where City Life</div>
      <div class="zh">禾處尋覓</div>
      <div class="en">Comes Alive</div>
    </div>
    <div class="title">休閒天地</div>
    <div class="en1 text-[#8C8C8C]">The Heartbeat of Everyday Convenience</div>
    <div class="en2 text-[#8C8C8C]">A World of Lifestyle and Leisure</div>
    
    <div class="marquee md:hidden">
      <div class="inline-flex">
        <div class="flex" v-for="num in 2">
          <div class="item">
            <div class="img relative">
              <img class="block w-full" src="@/section/s5/1.jpg" />
              <div class="info">南港展覽館實景圖</div>
            </div>
            <div class="t1 text-[#5ACBBD]">南港展覽館<br>館一/二館</div>
            <div class="t2">一年精彩可期的展覽接棒延續，涵蓋了多個產業領域，吸引了國內外的參觀者和參展商。2019擴建的二館也開幕，兩館合計可達5,000個攤位。南港展覽館成為亞洲最大會展中心之一，帶動的經濟效應令人嚮往!</div>
          </div>
          <div class="item">
            <div class="img relative">
              <img class="block w-full" src="@/section/s5/2.jpg" />
              <div class="info">中信金融園區實景圖</div>
            </div>
            <div class="t1 text-[#5ACBBD]">中信金融園區</div>
            <div class="t2">中國信託金融園區於2014年12月正式啟用，是中國信託金控在南港經貿園區的新企業總部。結合辦公室、商場和綠地。廣大的腹地成為全家人休閒樂活的好去處，同時為人氣球隊中信兄弟的母企業所在，串連職棒行銷活動，以及不同季節的主題活動，成功吸引大量人潮前往。</div>
          </div>
          <div class="item">
            <div class="img relative">
              <img class="block w-full" src="@/section/s5/3.jpg" />
              <div class="info">三井LaLaport實景圖</div>
            </div>
            <div class="t1 text-[#5ACBBD]">三井LaLaport</div>
            <div class="t2">2025更完美展現磁吸效應與三井Outlet星輝相映，提供更多元化的休閒/電影/餐飲/購物，未來透過空橋系統串連，結合經貿二路左/右兩側的生活娛樂。</div>
          </div>
          <div class="item">
            <div class="img relative">
              <img class="block w-full" src="@/section/s5/4.jpg" />
              <div class="info">U TOWN</div>
            </div>
            <div class="t1 text-[#5ACBBD]">U TOWN</div>
            <div class="t2">然而，這樣的休閒生活同樣在汐止區的U-TOWN提供鄰近居民相似放鬆的美好機能，休閒大型的購物中心開枝散葉，讓民眾有了更多的實踐的場域。</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="items hidden md:flex">
      <div class="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
        <div class="img relative">
          <img class="block w-full" src="@/section/s5/1.jpg" />
          <div class="info">南港展覽館實景圖</div>
        </div>
        <div class="t1 text-[#5ACBBD]">南港展覽館館一/二館</div>
        <div class="t2">一年精彩可期的展覽接棒延續，涵蓋了多個產業領域，吸引了國內外的參觀者和參展商。2019擴建的二館也開幕，兩館合計可達5,000個攤位。南港展覽館成為亞洲最大會展中心之一，帶動的經濟效應令人嚮往!</div>
      </div>
      <div class="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <div class="img relative">
          <img class="block w-full" src="@/section/s5/2.jpg" />
          <div class="info">中信金融園區實景圖</div>
        </div>
        <div class="t1 text-[#5ACBBD]">中信金融園區</div>
        <div class="t2">中國信託金融園區於2014年12月正式啟用，是中國信託金控在南港經貿園區的新企業總部。結合辦公室、商場和綠地。廣大的腹地成為全家人休閒樂活的好去處，同時為人氣球隊中信兄弟的母企業所在，串連職棒行銷活動，以及不同季節的主題活動，成功吸引大量人潮前往。</div>
      </div>
      <div class="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <div class="img relative">
          <img class="block w-full" src="@/section/s5/3.jpg" />
          <div class="info">三井LaLaport實景圖</div>
        </div>
        <div class="t1 text-[#5ACBBD]">三井LaLaport</div>
        <div class="t2">2025更完美展現磁吸效應與三井Outlet星輝相映，提供更多元化的休閒/電影/餐飲/購物，未來透過空橋系統串連，結合經貿二路左/右兩側的生活娛樂。</div>
      </div>
      <div class="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
        <div class="img relative">
          <img class="block w-full" src="@/section/s5/4.jpg" />
          <div class="info">U TOWN</div>
        </div>
        <div class="t1 text-[#5ACBBD]">U TOWN</div>
        <div class="t2">然而，這樣的休閒生活同樣在汐止區的U-TOWN提供鄰近居民相似放鬆的美好機能，休閒大型的購物中心開枝散葉，讓民眾有了更多的實踐的場域。</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  padding: size-m(47) 0 size-m(105) 0;
  @media screen and (min-width:768px) {
    padding: size(150) 0;
  }

  .subtitle {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 size-m(3) 0;
    @media screen and (min-width:768px) {
      margin: 0 0 size(30) 0;
    }

    .en {
      font-size: size-m(6);
      letter-spacing: .1em;
      text-indent: .1em;
      text-transform: uppercase;
      @media screen and (min-width:768px) {
        font-size: size(10);
      }
    }

    .zh {
      font-size: size-m(16);
      font-weight: 600;
      letter-spacing: .25em;
      text-indent: .25em;
      margin: 0 size-m(6);
      @media screen and (min-width:768px) {
        font-size: size(22);
        margin: 0 size(6);
      }
    }
  }

  .title {
    font-size: size-m(34);
    line-height: size-m(49);
    text-align: center;
    font-weight: 900;
    letter-spacing: .25em;
    text-indent: .25em;
    margin: 0 0 size-m(10) 0;
    @media screen and (min-width:768px) {
      font-size: size(42);
      line-height: size(60);
      margin: 0 0 size(16) 0;
    }
  }

  .en1 {
    font-size: size-m(10);
    line-height: size-m(11);
    text-align: center;
    text-transform: uppercase;
    margin: 0 0 size-m(10) 0;
    @media screen and (min-width:768px) {
      font-size: size(24);
      line-height: size(28);
      margin: 0 0 size(16) 0;
    }
  }

  .en2 {
    font-size: size-m(8);
    line-height: size-m(9);
    text-align: center;
    margin: 0 0 size-m(34) 0;
    @media screen and (min-width:768px) {
      font-size: size(20);
      line-height: size(23);
      margin: 0 0 size(76) 0;
    }
  }

  .marquee {
    width: 100%;
    overflow: hidden;
  }

  .items {
    justify-content: space-between;
    width: size(1466);
    margin: 0 auto;
  }

  .item {
    width: size-m(255);
    margin-right: size-m(30);
    @media screen and (min-width:768px) {
      width: size(329);
      margin-right: 0;
    }

    .img {
      margin-bottom: size-m(30);
      @media screen and (min-width:768px) {
        margin-bottom: size(60);
      }

      .info {
        position: absolute;
        bottom: size-m(7);
        left: size-m(14);
        font-size: size-m(8);
        line-height: size-m(12);
        font-weight: 700;
        color: #fff;
        filter: drop-shadow(0 0 size-m(5) #000);
        @media screen and (min-width:768px) {
          bottom: size(6);
          left: size(14);
          font-size: size(14);
          line-height: size(12);
          filter: drop-shadow(0 0 size(5) #000);
        }
      }
    }

    .t1 {
      text-align: center;
      font-size: size-m(28);
      line-height: 1.2;
      letter-spacing: .1em;
      text-indent: .1em;
      font-weight: 700;
      margin-bottom: size-m(30);
      @media screen and (min-width:768px) {
        text-align: left;
        font-size: size(28);
        margin-bottom: size(36);
      }
    }

    .t2 {
      text-align: justify;
      font-size: size-m(12);
      line-height: 2;
      @media screen and (min-width:768px) {
        font-size: size(18);
        line-height: size(35);
      }
    }
  }
}
</style>

<script setup>
import { gsap } from "gsap";
import { onMounted } from "vue";

let tween;
const v = 40; // 速率

onMounted(() => {
  if (!tween) {
    let duration = 10;
    if (document.querySelector('.s5 .marquee').style.display !== 'none') {
      duration = document.querySelector('.s5 .inline-flex').clientWidth / v;
    }
    tween = gsap.to('.s5 .inline-flex', { xPercent: -50, ease: 'none', duration: duration, repeat: -1 });
  }
});

window.addEventListener('resize', () => {
  if (document.querySelector('.s5 .marquee').style.display === 'none') return;
  if (tween) {
    const duration = document.querySelector('.s5 .inline-flex').clientWidth / v;
    tween.duration(duration);
  }
});
</script>