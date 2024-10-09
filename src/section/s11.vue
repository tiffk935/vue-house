<template>
  
  <section class="s11 text-white bg-[#a4867e] relative">
    <div class="con">
    <div class="content">
      <div class="txt" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">台北市以東區門戶計劃、西區門戶計劃開啟城市均富共榮，東西兩大核心之外，近年更聚焦北區大士林。以北投士林科技園區為核心引擎，驅動北區再造，而北區也一躍成為台北市最具發展前景的區域。借鑑信義計劃、大直重劃，台北大型重劃更新在城市升級藍圖中一直扮演重要關鍵，對產業發展、生活型態帶來革新發展，更為房價帶來倍數驚人成長。</div>
      <div class="line md:hidden" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200"></div>
      <div>
        <div class="title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0">北區門戶超級引擎<br>大士林賦興核心</div>
      </div>
    </div>
    
    <video src="https://h35.banner.tw/dali-heyun/pc.mp4" playsinline autoplay muted loop></video>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.s11 {
  width: 100%;
  height: size-m(510);
  /*
  height: calc(100vh - 63px );
  max-height: size-m(812);
  min-height: size-m(604);
  */
  background: #fff;

  @media screen and (min-width:768px) {
    height: auto;
    /*
    height: 100vh;
    min-height: size(900);
    max-height: size(1080);
    */
  }
  .con{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .content {
    background: #fff;
    width: auto;
    top: size-m(467);
    left: size-m(52.5);
    font-size: size-m(14);
    font-weight: 500;
    color: #333333;
    font-family: 'Noto Serif TC';
    line-height: 1.7;
    text-align: justify;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: size-m(20);
    padding: size-m(30) size-m(50);
    @media screen and (min-width:768px) {
      padding: size(50) size(148);
      background: #fff;
      width: auto;
      top: size(910);
      left: size(148);
      font-size: size(20);
      justify-content: space-between;
      flex-direction: row;
    }

    .title {
      color: #002B69;
      line-height: 1.2;
      font-weight: 700;
      font-size: size-m(18);
      letter-spacing: .06em;
      //margin-bottom: size-m(16);
      @media screen and (min-width:768px) {
        font-size: size(40);
        //margin-bottom: size(39);
      }
    }

    .line {
      width: size-m(220);
      height: size-m(1);
      background: #666666;
      margin-bottom: size-m(0);
      @media screen and (min-width:768px) {
        width: size(461);
        height: size(1);
        background: #666666;
        margin-bottom: size(0);
      }
    }

    .txt {
      @media screen and (min-width:768px) {
        width: size(1045);
      }
    }
  }



  
  video{
    width: 100%;
    height: 100%;
    //object-fit: cover;
  }

  

  .house {
    width: size-m(429);
    max-width: 200%;
    top: size-m(283.44);
    left: size-m(-33);
    @media screen and (min-width:768px) {
      width: size(1033.81);
      top: size(180);
      left: size(102);
    }
  }

  .logo2 {
    width: size-m(288.83);
    top: size-m(143);
    left: size-m(43);
    @media screen and (min-width:768px) {
      width: size(578.84);
      top: size(448);
      left: size(1074);
    }
  }

  .logo1 {
    width: size-m(173.4);
    top: size-m(346);
    left: size-m(101);
    @media screen and (min-width:768px) {
      width: size(406.15);
      top: size(449);
      left: size(460);
    }
  }
}
</style>

<script setup>

</script>
