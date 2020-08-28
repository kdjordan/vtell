<template>
<div class="page">
  <div class="container">
    <div class="crumbs">
        <img class="crumbs__img" src="../assets/back-button.png" alt="">
      <div class="crumbs__path">/&nbsp;<a href="/">HOME</a>&nbsp;/&nbsp;NEWS</div>
    </div>
    <div class="page-divider mb-3">  
      <img class="page-divider__cube" src="../assets/SVG/cube.svg" alt="">
      <div class="page-divider__title">NEWS</div>
    </div> 
    <div class="page__block news-page__margin">
      <div class="page__block--title">Service Limitation in Italy</div>
      <div class="page__block--cube">
        <img src="../assets/pages/cube-tab.png" alt="">
      </div>
    </div>
    </div>
</div>

</template>
<script>

</script>

<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';
@import '../scss/_divider.scss';
@import '../scss/_utilities.scss';
@import '../scss/_page.scss';

.news-page {
    &__margin {
        margin-bottom: calc(100% - 40rem);
    }
}

</style>
