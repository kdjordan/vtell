<template>
 <div class="sim mb-3"> 
     <div class="container">
         <div class="sim__block">
             <div class="sim__title mb-2">
                 HOW TO BUY A SIM CARD
             </div>
             <div class="sim__button-container">
                 <div class="sim__button-container--left">
                     <button class="btn__primary btn-smaller">Online</button>
                 </div>
                 <div class="sim__button-container--center">
                     <button class="btn__primary btn-smaller">Via Mobile App</button>
                 </div>
                 <div class="sim__button-container--right">
                     <button class="btn__primary btn-smaller">In Sales Office</button>
                 </div>
             </div>
             <div class="sim__steps-container">
                 <div class="sim__steps-container--left">
                     <img src="../assets/SVG/steps/step1.svg" alt="">
                 </div>
                 <div class="sim__steps-container--center">
                     <img src="../assets/SVG/steps/step2.svg" alt="">
                 </div>
                 <div class="sim__steps-container--right">
                     <img src="../assets/SVG/steps/step3.svg" alt="">
                 </div>
             </div>
         </div>
     </div> 
 </div>
    

</template>

<script>
export default {
}
</script>


<style scoped lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';

.btn-smaller {
    width: 200px;
    font-size: 16px;
    padding: 10px 35px;
    width: 210px;
}
.sim {
    display: flex;
    justify-content: center;
    color: $vwhite;

    &__title {
        font-size: 24px;
    }

    &__block {
        background-color: $grey2;
        padding: 4rem 
        
    }

    &__button-container {
        display: flex;
        justify-content: space-between;
    }

    &__steps-container {
        display: flex;
        justify-content: space-between;
        padding: 60px 10px;

        & img {
            width: 65px;
        }
    }

}

</style>
