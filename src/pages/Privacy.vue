<template>
  <section id="contact">
    <div class="title">隱私權-個資告知事項聲明</div>
  </section>

  <section id="privacy">
    <Privacy />
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/style/function.scss" as func;

#contact {
  padding: func.size-m(30) func.size-m(30) func.size-m(0) func.size-m(30);
  margin: auto;
  @media screen and (min-width:768px) {
    padding: func.size(225) 0 func.size(0) 0;
    width:func.size(1200);
  }

  .title {
    font-size: func.size-m(18);
    font-weight: 700;
    letter-spacing: .04em;
    margin-bottom: func.size-m(0);
    @media screen and (min-width:768px) {
      font-size: func.size(33);
      margin-bottom: func.size(50);
      padding: 0 0;
    }

    span {
      font-weight: 100;
      margin-right: func.size-m(6);
      @media screen and (min-width:768px) {
        margin-right: func.size(21);
      }
    }
  }

}

#privacy {
  margin: auto;
    width:func.size-m(320);
    font-size:func.size-m(13);
  @media screen and (min-width:768px) {
    width:func.size(1200);
    font-size:func.size(19);
  }
}
</style>

<script setup>
import info from '@/info';
import Privacy from '@/components/Privacy.vue';
</script>