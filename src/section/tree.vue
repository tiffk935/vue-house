<template>
  <div class="tree">
  <img src="@/section/s1/trunk.png" class="trunk" alt="" />
  <img src="@/section/s1/leaf.png" class="leaf" alt="" />
</div>
</template>

<style lang="scss">
.tree{position: absolute;
  img{max-width: unset;}
  .trunk{position: relative;width: 100%;}
  .leaf{
    
    position: absolute;
    width: 196%;
    top: -107%;
    left: -55.5%;
    /*position: absolute;
    width: 200%;
    top: -109%;
    left: -60%;*/
    animation: leaf 3s ease-in-out infinite alternate;
    transform-origin: 50% 85%;
    transform: skewX(3deg);
  }
}
@keyframes leaf {
  to{
transform:skewX(-5deg);
  }
}
</style>
<script setup>

</script>