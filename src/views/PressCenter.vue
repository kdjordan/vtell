<template>
<div class="page">
    <div class="container">
        <div class="crumbs">
            <img class="crumbs__img" src="../assets/back-button.png" alt="">
          <div class="crumbs__path">/&nbsp;<a href="/">HOME</a>&nbsp;/&nbsp;Press Centre</div>
        </div>
        <div class="page-divider mb-3">  
          <img class="page-divider__cube" src="../assets/SVG/cube.svg" alt="">
          <div class="page-divider__title">Press Center</div>
        </div> 
        <div class="press mb-3">
          <img class="press__img" src="../assets/pages/press-center.jpg" alt="">
          <div class="press__desc">
          <p>V-Tell is an International Mobile Operator providing mobile services to customers all around the world*. Through consistent expansion, V-Tell covers an ever-increasing number of locations, using the latest technology and equipment to support its customer offerings.</p>
        </div>
      </div>
    </div>
</div>

</template>

<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';
@import '../scss/_divider.scss';
@import '../scss/_utilities.scss';
@import '../scss/_page.scss';

.press {
  &__desc {
    padding: 56px;
    margin: 28px 0;
    background: rgba(252, 252, 252, 0.25);


    & p {
      font-size: 17px;
      line-height: 27px;
    }
  }
  
  &__img {
    width: 100%;
    max-width: 960px;
  }
}

</style>
