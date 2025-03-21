<template>
  <section>
    <div class="title"><span>NEWS</span>最新消息</div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/style/function.scss" as func;

section {
  padding: func.size-m(60) func.size-m(30) func.size-m(34) func.size-m(30);
  @media screen and (min-width:768px) {
    padding: func.size(108) func.size(160) func.size(250) func.size(160);
  }
}
</style>