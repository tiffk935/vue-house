<template>
  <div id="page-bg"></div>
  <NavBar />
  <main :id="`page-${$route.name}`">
    <RouterView />
  </main>
  <Footer />
</template>

<style lang="scss">
@use "@/assets/style/function.scss" as func;

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Noto Sans TC", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#page-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(@/assets/bg.webp);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

main {
  position: relative;
  flex: 1;
  padding: func.size-m(74) 0 0 0;
  @media screen and (min-width:768px) {
    padding: func.size(165) 0 0 0;
  }
}
</style>

<script setup>
import { onMounted } from "vue"
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from '@/components/NavBar.vue';
import Footer from "@/components/Footer.vue";

onMounted(() => {
  window.onload = function () {
    AOS.init();
  };
})
</script>