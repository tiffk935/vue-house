<template>
  <div id="page-bg"></div>

  <NavBar />

  <main :id="`page-${$route.name}`">
    <RouterView />
  </main>

  <Footer />
</template>

<style lang="scss">
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

#page-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(@/assets/bg.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

main {
  position: relative;
  min-height: 100vh;

  &#page-home {
    min-height: auto;
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