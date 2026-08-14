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
    <p class="opentxt" @click="scrollTo('.order')">提前登記開放中</p>
      
    <div class="gift-box">
      <p class="get">搶先掌握最新資訊，取得<b>限量早鳥優惠</b></p>  
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
    <p class="open-m" @click="scrollTo('.order')">提前登記開放中</p>
    </div>
 <div class="umargin">   
 <div class="wmask">  

    <div class="gift-box-m">
      <p class="get-m">搶先掌握最新資訊，</p>
        

        <div class="gift-box-m-2">
             <p class="get-m-2">取得限量早鳥優惠</p>  
                <img 
                    class="gift-img-m"
                    src="@/section/s2/proicons_gift.svg"/>
        </div>

</div>
</div> 
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

    animation: glowBreath-light 3s ease-in-out infinite;
    
  }

.opentxt{
    display: flex;
    padding: 18px 64px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border: 0.5px solid #FFF;
    color: #FFF;
    font-size: clamp(24px, 1.5vw, 24px);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 3.12px;
    
      border-radius: 12px;
        border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.178) 0%, rgba(255, 255, 255, 0.05) 100%);
        box-shadow: 1.127px 4.508px 43.168px 0 rgba(255, 255, 255, 0.2) inset;
        backdrop-filter: blur(2.3105762004852295px);

        transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);

&:hover {
  transform: scale(1.03);
}

    
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

  






@media screen and (max-width:1200px){

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
    padding: 18px 0px 8px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    z-index: 3;

    margin-top: -120px;
    
    
  }


.line-m{
  width: 60%;
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
    animation: glowBreath-light 3s ease-in-out infinite;
   
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
    animation: glowBreath-light 3s ease-in-out infinite;

    transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);

&:active {
  transform: scale(1.03);
}
}

.wmask{
    width:90%;
    height:150px;
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


}

.gift-box-m{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
padding: 25px 0px 64px 0px;
justify-content: center;
align-items: center;
border-radius: 0 12px 12px 0;

gap: 4px;

white-space: nowrap;
    flex-shrink: 1;
    
    margin-bottom: 0px;


}


.gift-box-m-2{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
padding: 0px 0px 64px 0px;
justify-content: center;
align-items: center;
border-radius: 0 12px 12px 0;


mask-composite: intersect;
gap: 4px;

white-space: nowrap;
    flex-shrink: 1;
    
    margin-bottom: -120px;


}


.get-m,
{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-size: clamp(16px, 8vw, 22px);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 5px;
    animation: glowBreath-light 3s ease-in-out infinite;

    
}


.get-m-2
{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-size: clamp(16px, 8vw, 22px);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 5px;
    animation: glowBreath-light 3s ease-in-out infinite;

    
}

.gift-img-m{
    width: clamp(24px, 60vw, 40px);
    height: auto;
    animation: glowBreath-light 3s ease-in-out infinite;
    margin-left: 4px;
    

}

.umargin {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: -120px;
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
      drop-shadow(0 0 2px rgba(255, 92, 201, 0.7))
      drop-shadow(0 0 15px rgba(255, 220, 170, 0.45))
      drop-shadow(0 0 30px rgba(255, 220, 170, 0.2));
  }
}


@keyframes glowBreath-light {
  0%,
  82%,
  100% {
    filter:
      drop-shadow(0 0 2px rgba(255, 78, 196, 0.2))
      drop-shadow(0 0 6px rgba(255, 220, 170, 0.1));
  }

  50% {
    filter:
       drop-shadow(0 0 2px rgba(255, 92, 201, 0.5))
      drop-shadow(0 0 10px rgba(255, 220, 170, 0.45))
      drop-shadow(0 0 30px rgba(255, 220, 170, 0.2));
  }

  10% {
    filter:
      drop-shadow(0 0 2px rgba(255, 78, 196, 0.2))
      drop-shadow(0 0 6px rgba(255, 220, 170, 0.1));
  }
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