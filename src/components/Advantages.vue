<template>
  <div>
      <div class="border">
          <div class="border__container">
            <img class="border__cube" src="../assets/SVG/cube.svg" alt="">
            <div class="border__title">ADVANTAGES</div>
          </div>
      </div>  
      <div class="advantages">
        <!-- <div class="container"> -->
            <div class="advantages__top">
                <div>
                    <img src="../assets/advantages/adv_image1.png" alt="">
                    <!-- <div class="advantages__desc">One Global Rate</div> -->
                </div>
                <div>
                    <img src="../assets/advantages/adv_image2.png" alt="">
                    <!-- <div class="advantages__desc">Excellent Mobile<br />Internet</div> -->
                </div>
                <div>
                    <img src="../assets/advantages/adv_image3.png" alt="">
                    <!-- <div class="advantages__desc">V-TELL PHONE NUMBERS<br> IN DIFFERENT COUNTRIES<br> ALL ON ONE SIM CARD</div> -->
                </div>
                <div>
                    <img src="../assets/advantages/adv_image4.png" alt="">
                    <!-- <div class="advantages__desc">YOU CAN BE REACHED WORLDWIDE WITH NO OVERSEAS CHARGE TO YOUR HOST</div> -->
                </div>
                <div>
                    <img src="../assets/advantages/adv_image5.png" alt="">
                    <!-- <div class="advantages__desc">YOU'RE LOCAL NO MATTER WHERE YOU ARE</div> -->
                </div>
                <div>
                    <img src="../assets/advantages/adv_image6.png" alt="">
                    <!-- <div class="advantages__desc">V-TELL DOES NOT UTILIZE IP TELEPHONY</div> -->
                </div>
                <div>
                    <img src="../assets/advantages/adv_image7.png" alt="">
                    <!-- <div class="advantages__desc">AUTOMATIC SWITCH OF V-TELL PHONE NUMBERS</div> -->
                </div>

            </div>
            
        <!-- </div> -->
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

.advantages {
    max-width: 895px;
    margin: 0 auto;
    &__desc {
        color: white;
        font-size: 14px;
        word-wrap: wrap;
        position: relative;
        bottom: 80px;
        text-transform: uppercase;
        width: 70%;
        margin: 0 auto;

    }

    &__top {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;

        & > div {
            margin: 0 .3rem;
        }
    }
    
    &__bottom {
        margin-top: -4rem;
        display: flex;;
        justify-content: center;
        align-items: center;
        width: 100%;

        & > div {
            margin: 0 .3rem;
        }
    }
}

</style>