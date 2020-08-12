<template>
  <div class="tariffs">
      <div class="border">
          <div class="border__container">
            <img class="border__cube" src="../assets/SVG/cube.svg" alt="">
            <div class="border__title">TARIFFS</div>
          </div>
      </div>
      <div class="container">
          
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';

.tariffs {
    width: 100%;
}

.border {
    background-image: url('../assets/img/border.png');
    background-position: center;
    height: 80px;
    
    &__container {
         position: relative;
        right: 380px;
    }

    &__cube {
       
        margin-top: 10px;
        height: 50px;
    }

    &__title {
        font-size: 25px;
        display: inline-block;
        color: white;
        position: relative;
        bottom: 20px;
        left: 70px;
        
    }
}


</style>