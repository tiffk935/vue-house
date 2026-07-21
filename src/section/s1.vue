<template>
  <section class="s1 text-white relative">
    <img class="leaf-1" src="@/section/s1/leaf-1.webp">
    <img class="leaf-2" src="@/section/s1/leaf-2.webp">

<div class="bg">


  //電腦版背景
  <img
    v-for="i in 20"
    :key="i"
    :class="['bg-piece','bg-pc',{ flip:i % 2 === 0 }]"
    src="@/section/s1/bg-4.webp"
    alt=""
  >


  //手機板背景
   <img
    v-for="i in 20"
    :key="'mobile-'+i"
    :class="['bg-piece','bg-mobile',{ flip:i % 2 === 0 }]"
    src="@/section/s1/bg-2m.webp"
    alt=""
  >

</div>


<div class="H1"
    data-aos="fade"
    data-aos-delay="500"
    data-aos-duration="1200"
    data-aos-easing="ease"
    data-aos-once="false"
    data-aos-mirror="true"
>

    <img 
      class="Coming-soon"
      src="@/section/s1/Coming soon.svg"
    >

    <img 
      class="Coming-soon-m"
      src="@/section/s1/Coming soon-m.svg"
    >

    <img 
      class="Line"
      src="@/section/s1/Line.svg"
    >

    <img 
      class="Coming-soon-TC-m"
      src="@/section/s1/Coming soon-TC-m.svg"
    >

    <img 
      class="Local"
      src="@/section/s1/Local.svg"
    >

    <img 
      class="Local-m"
      src="@/section/s1/Local-m.svg"
    >

    <img 
      class="LOGO"
      src="@/section/s1/LOGO.svg"
    >
    
    <img 
      class="LOGO-m"
      src="@/section/s1/LOGO-m.svg" 
    >



</div>
    
<div class="fireflies">

    <div class="firefly f1">
        <span></span>
    </div>

    <div class="firefly f2">
        <span></span>
    </div>

    <div class="firefly f3">
        <span></span>
    </div>

    <div class="firefly f4">
        <span></span>
    </div>

    <div class="firefly f5">
        <span></span>
    </div>

    <div class="firefly f6">
        <span></span>
    </div>

    <div class="firefly f7">
        <span></span>
    </div>

</div>

  </section>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s1 {
  position: relative;
  width: 100%;
  height: auto;
  font-weight: 500;
  margin-bottom: 190px;
  @media screen and (min-width:768px) {
    height: auto;
  }
  
  .leaf-1 {
    position: absolute;
    width: 1476px;
    height: 1272px;
    top: -180px;
    left: calc(0% - 880px);
    mix-blend-mode:multiply;
    filter: brightness(0.9);
    z-index: 2;

    animation: leafFloat 8s ease-in-out infinite;
    transform-origin: center;
  }

  .leaf-2 {
    position: absolute;
    width: 720px;
    height: 844px;
    aspect-ratio: 46/55;
    top: -560px;
    left: calc(50% - 420px);
    mix-blend-mode:multiply;
    z-index: 2;

    animation: leafFtop 8s ease-in-out infinite;
    transform-origin: top;
  }


.H1 {
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center; 
    width: auto ;
    height: auto;
    gap: clamp(4px, 80vw, 12px);
    z-index: 3;
  }

  .Coming-soon {
    position: relative;
    width: clamp(320px, 64vw, 920px);
    height: fit-content;
    object-fit: Contain;
    margin: clamp(148px, 80vw, 240px) auto clamp(8px, 80vw, 24px) auto;
    z-index: 3;
  }

  .Line {
    width: clamp(320px, 64vw, 920px);
    height: 1px;
    background: #fff;
    margin: clamp(8px, 80vw, 24px) auto clamp(8px, 80vw, 24px) auto;
    z-index: 3;
  }

  .Local {
    position: relative;
    width: clamp(256px, 56vw, 772px);
    height: fit-content;
    object-fit: contain;
    margin: 0 auto clamp(8px, 80vw, 24px) auto;
    z-index: 3;
  }

  .LOGO {
    position: relative;
    width: clamp(364px, 48vw, 560px);
    height: fit-content;
    object-fit: contain;
    margin: clamp(8px, 80vw, 48px) auto clamp(8px, 80vw, 24px) auto;
    z-index: 3;
  }


.bg{
 position:absolute;
 top:-28px;
 left:0;
 width:100%;
 height:fill;
 display:flex;
 flex-direction:column;
 z-index:1;
}


.bg-piece{
 width:100%;
 display:block;
 flex-shrink:0;
 margin-top:-3px;
}


.bg-mobile{
 display:none;
}


@media(max-width:767px){

 .bg-pc{
   display:none;
 }

 .bg-mobile{
   display:block;
 }

}


  
  
}

@keyframes leafFloat {
  0% {
    transform: translateY(0) rotate(-2deg);
  }
  25% {
    transform: translateY(-4px) rotate(2deg);
  }
  50% {
    transform: translateY(-12px) rotate(-1deg);
  }
  75% {
    transform: translateY(-6px) rotate(2deg);
  }
  100% {
    transform: translateY(0) rotate(-2deg);
  }
}

@keyframes leafFtop {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  35% {
    transform: translateY(-2px) rotate(1deg);
  }
  50% {
    transform: translateY(-6px) rotate(0deg);
  }
  80% {
    transform: translateY(-2px) rotate(1deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}



 /* 手機版 */

.Coming-soon-m,
.Coming-soon-TC-m,
.Local-m,
.bg-mobile,
.LOGO-m{
    display:none;
}


@media screen and (max-width:767px){

    .Coming-soon,
    .Local,
    .bg-pc,
    .LOGO{
        display:none;
    }


    .Coming-soon-m,
    .Coming-soon-TC-m,
    .Local-m,
    .bg-mobile,
    .LOGO-m{
        display:block;
    }

    .bg-mobile{
        position:absolute;
        top:-28px;
        left:0;
        width:100%;
        height:auto;
        display:flex;
        flex-direction:column;
        z-index:1;
    }

    .Coming-soon-m{
      position: relative;
      width: clamp(240px, 60vw, 880px);
      height: fit-content;
      object-fit: Contain;
      margin-top: 148px;
      margin-bottom: 24px;
      z-index: 3;
  }

    .Line{
      width: clamp(240px, 80vw, 880px);
      height: 1px;
      background: #fff;
      z-index: 3;
    }

    .Coming-soon-TC-m{
      position: relative;
      width: clamp(228px, 60vw, 660px);
      height: fit-content;
      object-fit: Contain;
      z-index: 3;
    }

    .Local-m{
      position: relative;
      width: clamp(264px, 60vw, 660px);
      height: fit-content;
      object-fit: Contain;
      margin-top: 64px;
      z-index: 3;
    }

    .LOGO-m{
      position: relative;
      width: clamp(256px, 56vw, 560px);
      height: fit-content;
      object-fit: contain;
      margin-top: 16px;
      margin-bottom: 16px;
      z-index: 3;


    }

}


//螢火蟲專區

.fireflies{
    position:absolute;
    inset:0;
    pointer-events:none;
    overflow:hidden;
    z-index:5;
}


.firefly{
    position:absolute;
    width:8px;
    height:8px;
}


/* 螢火蟲本體 */
.firefly span{

    display:block;

    width:100%;
    height:100%;

    border-radius:50%;

    background:#f6f48b;

    box-shadow:
        0 0 8px #fff7a0,
        0 0 20px #f6f48b,
        0 0 45px #d7ff78;


    animation:
        blink 2.5s ease-in-out infinite alternate;

}



/* -----------------
   位置 + 飛行
------------------ */


.f1{
    top:75%;
    left:15%;
    animation:fly1 18s ease-in-out infinite;
}


.f2{
    top:60%;
    left:10%;
    animation:fly2 22s ease-in-out infinite;
}


.f3{
    top:40%;
    left:20%;
    animation:fly3 20s ease-in-out infinite;
}


.f4{
    top:80%;
    right:15%;
    animation:fly4 24s ease-in-out infinite;
}


.f5{
    top:55%;
    right:18%;
    animation:fly5 19s ease-in-out infinite;
}


.f6{
    top:28%;
    right:5%;
    animation:fly6 21s ease-in-out infinite;
}


.f7{
    top:72%;
    left:90%;
    animation:fly7 25s ease-in-out infinite;
}




/* -----------------
   閃爍
------------------ */


@keyframes blink{

    0%{
        opacity:.2;
        transform:scale(.6);
    }


    40%{
        opacity:.9;
        transform:scale(1);
    }


    70%{
        opacity:.4;
        transform:scale(.8);
    }


    100%{
        opacity:1;
        transform:scale(1.35);
    }

}



/* -----------------
   飛行路徑
------------------ */


@keyframes fly1{

    0%{
        transform:translate(0,0);
    }

    25%{
        transform:translate(80px,-120px);
    }

    50%{
        transform:translate(-40px,-240px);
    }

    75%{
        transform:translate(130px,-330px);
    }

    100%{
        transform:translate(0,0);
    }

}



@keyframes fly2{

    0%{
        transform:translate(0,0);
    }

    30%{
        transform:translate(-120px,-100px);
    }

    55%{
        transform:translate(-40px,-260px);
    }

    80%{
        transform:translate(-180px,-350px);
    }

    100%{
        transform:translate(0,0);
    }

}




@keyframes fly3{

    0%{
        transform:translate(0,0);
    }

    25%{
        transform:translate(160px,-80px);
    }

    50%{
        transform:translate(100px,-260px);
    }

    75%{
        transform:translate(-40px,-360px);
    }

    100%{
        transform:translate(0,0);
    }

}




@keyframes fly4{

    0%{
        transform:translate(0,0);
    }

    30%{
        transform:translate(-100px,-140px);
    }

    60%{
        transform:translate(80px,-280px);
    }

    100%{
        transform:translate(0,0);
    }

}




@keyframes fly5{

    0%{
        transform:translate(0,0);
    }

    25%{
        transform:translate(-140px,-80px);
    }

    55%{
        transform:translate(-40px,-220px);
    }

    80%{
        transform:translate(-180px,-380px);
    }

    100%{
        transform:translate(0,0);
    }

}




@keyframes fly6{

    0%{
        transform:translate(0,0);
    }

    35%{
        transform:translate(130px,-120px);
    }

    60%{
        transform:translate(40px,-260px);
    }

    100%{
        transform:translate(0,0);
    }

}




@keyframes fly7{

    0%{
        transform:translate(0,0);
    }

    20%{
        transform:translate(-150px,-100px);
    }

    50%{
        transform:translate(-60px,-280px);
    }

    75%{
        transform:translate(-220px,-400px);
    }

    100%{
        transform:translate(0,0);
    }

}

.f1 span{
    animation-delay:0s;
}

.f2 span{
    animation-delay:.8s;
}

.f3 span{
    animation-delay:1.5s;
}

.f4 span{
    animation-delay:2.2s;
}

.f5 span{
    animation-delay:1s;
}

.f6 span{
    animation-delay:3s;
}

.f7 span{
    animation-delay:1.8s;
}





</style>
<script setup>
import { computed, getCurrentInstance, ref ,inject} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>