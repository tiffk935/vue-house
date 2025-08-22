<template>
  <section class="s1">
    <div class="new_block s01" style="overflow: hidden;">
      <div class="d-none d-md-block">
        <div class="row" style="margin: 0%;">
          <img src="./new/0311/bg.webp">
          <img src="./new/0311/title.svg" class="word">
          <img src="./new/0311/logoicon.svg" class="logoicon">
        </div>
      </div>
      <div class="container-fluid d-sm-none1" style="padding-left: 0%;padding-right: 0%;">
        <div class="row" style="margin-right: 0%;margin-left: 0%;">
          <div class="new_block_m">
            <img src="./new/0311/bgm.webp">
          <img src="./new/0311/title.svg" class="word">
          <img src="./new/0311/logoicon.svg" class="logoicon">
          </div>
        </div>
      </div>
    </div>
    <!-- A : Block -->

  </section>
</template>

<style lang="scss">
.carousel-indicators {
  @media screen and (max-width: 768px) {
    bottom: 2vw;
  }
}
.s01{

.word{
  width: 40% !important;
  position: absolute;
  top:10%;
  left: 30%;

  @media screen and (max-width: 768px) {
  width: 80% !important;
  top:15%;
  left: 10%;
  }
}

.logoicon{
  width: 20% !important;
  position: absolute;
  top:2%;
  right: 2%;

  @media screen and (max-width: 768px) {
  width: 60% !important;
  right: 19%;
  top:auto;
  bottom:2%;
  }
}

}




.s01{
  overflow: hidden;
  background: linear-gradient(145deg,
  rgba(220,160,200,1) 18%,
  rgba(125,95,180,1) 93%);
}
</style>

<script>
  // export default {
  //   mounted() {
  //     console.log( 'append js file to body' )

  //     var arr = [
  //       'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js',
  //       'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js',
  //     ];

  //     for (let i = 0; i < arr.length; i++) {
  //       let foo = document.createElement('script');
  //       foo.setAttribute("type", "text/javascript");
  //       foo.setAttribute("charset", "utf-8");
  //       foo.setAttribute("src", arr[i]);
  //       foo.setAttribute("data-transaction-amount", "14.90")
  //       document.querySelector('body').append(foo);
  //     }
  //   },
  // };
</script>