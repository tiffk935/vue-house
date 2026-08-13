<template>
<section class="s2 text-white relative">

<div class="gift"
    data-aos="fade"
    data-aos-delay="500"
    data-aos-duration="1200"
    data-aos-easing="ease"
    data-aos-once="false"
    data-aos-mirror="true"
>
    <p class="open">提前登記開放中</p>
      
    <div class="gift-box">
      <p class="get">搶先掌握最新資訊，取得&nbsp;<b>早鳥優惠</b></p>  
      <img 
        class="gift-img"
        src="@/section/s2/proicons_gift.svg"
      />
    </div>

</div>

<div class="gift-m"
    data-aos="fade"
    data-aos-delay="500"
    data-aos-duration="1200"
    data-aos-easing="ease"
    data-aos-once="false"
    data-aos-mirror="true"

>   <div class="line-m">
    <p class="open-m">提前登記開放中</p>
    </div>
      
    <div class="gift-box-m">
      <p class="get-m">搶先掌握最新資訊取得&nbsp;<b>早鳥優惠</b></p>  
      <img 
        class="gift-img-m"
        src="@/section/s2/proicons_gift.svg"
      />
    </div>

</div>

</section>    
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.gift-m{
    display:none;
}

.s2 {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  padding: 64px 0 62px 0;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  
  @media screen and (min-width:768px) {
    height: auto;
    
  }

}
  


.gift {
    display: flex;
    width: clamp(240px, 80vw, 1200px);
    flex-direction: row;
    position: relative;
    justify-content: center;
    align-items: center; 
    height: auto;
    z-index: 3;

    animation: glowBreath 3s ease-in-out infinite;
    
  }

.open{
    display: flex;
    padding: 18px 64px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 12px;
    border: 0.5px solid #FFF;
    color: #FFF;
    font-size: clamp(24px, 1.5vw, 24px);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 3.12px;

    
}

.gift-box{
    display: flex;
    padding: 16px 64px;
    justify-content: center;
    align-items: center;
    gap: 18px;
    border-radius: 0 12px 12px 0;
    background: linear-gradient(90deg, rgba(102, 102, 102, 0.00) -4.28%, rgba(231, 209, 232, 0.18) 3.74%);
}

.get{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 3.12px;
}

.gift-img{
    width: clamp(32px, 2vw, 48px);
    height: auto;
}

  






@media screen and (max-width:1160px){

    .gift{
        display:none;
    }


    .gift-m{
        display:block;
    }

    .s2{
        width: 100%;
        margin-bottom: 132px;}    



.gift-m {
    display: flex;
    width: 100%;
    padding: 18px 64px 8px 64px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    z-index: 3;

    margin-top: -120px;
    
    
  }


.line-m{
  width: 100%;
  display: flex;
  padding: 18px 0px 0px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  }

  .line-m::after {
  content: "";
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 1) 50%,
    transparent 100%
  );
}


.open-m{
    width: 100%;
    display: flex;
    animation: glowBreath 3s ease-in-out infinite;
   
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 12px;

    color: #FFF;
    font-size: clamp(24px, 2vw, 80px);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.6px;
    white-space: nowrap;
    flex-shrink: 1;

    margin-bottom: 16px;
}

.gift-box-m{
    display: flex;
    flex-direction: row;
    width: clamp(240px, 100vw, 720px);
padding: 25px 64px 64px 64px;
justify-content: center;
align-items: center;
border-radius: 0 12px 12px 0;
background: rgba(231, 209, 232, 0.18);

-webkit-mask-image:
  linear-gradient(
    90deg,
    transparent 0%,
    #000 20%,
    #000 80%,
    transparent 100%
  ),
  linear-gradient(
    180deg,
    #000 0%,
    #000 60%,
    transparent 100%
  );

-webkit-mask-composite: source-in;
mask-image:
  linear-gradient(
    90deg,
    transparent 0%,
    #000 20%,
    #000 80%,
    transparent 100%
  ),
  linear-gradient(
    180deg,
    #000 0%,
    #000 60%,
    transparent 100%
  );

mask-composite: intersect;
gap: 8px;

white-space: nowrap;
    flex-shrink: 1;
    
    margin-bottom: -120px;


}

.get-m{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-size: clamp(16px, 4vw, 24px);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 3.12px;

    
}

.gift-img-m{
    width: clamp(24px, 60vw, 40px);
    height: auto;

}


    

}

.glow-breath {
  animation: glowBreath 1s ease-in-out infinite;
}

@keyframes glowBreath {
  0%,
  100% {
    filter:
      drop-shadow(0 0 2px rgba(255, 78, 196, 0.2))
      drop-shadow(0 0 6px rgba(255, 220, 170, 0.1));
  }

  50% {
    filter:
      drop-shadow(0 0 5px rgba(255, 92, 201, 0.7))
      drop-shadow(0 0 15px rgba(255, 220, 170, 0.45))
      drop-shadow(0 0 30px rgba(255, 220, 170, 0.2));
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