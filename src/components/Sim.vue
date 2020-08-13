<template>
 <div class="sim mb-3"> 
     <div class="container">
         <div class="sim__block">
             <div class="sim__title mb-2">
                 <strong>HOW TO BUY A SIM CARD</strong>
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
                 <div class="sim__steps-container--left flex-column">
                     <img src="../assets/SVG/steps/step1.svg" alt="">
                     <div class="sim__steps-container--step mb-1">STEP 1</div>
                     <div class="sim__steps-container--step mb-2"><strong>ORDER ONLINE</strong></div>
                 </div>
                 <div class="sim__steps-container--center flex-column">
                     <img src="../assets/SVG/steps/step2.svg" alt="">
                     <div class="sim__steps-container--step mb-1">STEP 2</div>
                     <div class="sim__steps-container--step mb-2"><strong>DELIVERY</strong></div>
                 </div>
                 <div class="sim__steps-container--right flex-column">
                     <img src="../assets/SVG/steps/step3.svg" alt="">
                     <div class="sim__steps-container--step mb-1">STEP - 3</div>
                     <div class="sim__steps-container--step mb-2 bold"><strong>SIM REGISTRATION</strong></div>
                 </div>
             </div>
            <div class="sim__desc-container">
                <div class="sim__desc-container--left">
                    <div class="sim__steps-container--desc">Choose a tariff, pick a number combination and place an order.</div>
                </div>
                <div class="sim__desc-container--middle">
                    <div class="sim__steps-container--desc">Choose a delivery method: courier service or pick-up.</div>
                </div>
                <div class="sim__desc-container--right">
                    <div class="sim__steps-container--desc">Fill in required form fields to proceed with SIM card registration.</div>
                </div>
            </div>
            <button class="btn__primary btn-smaller mt-3 mb-4">Buy now</button>
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

.flex-column {
    display: flex;
    flex-direction: column;
    align-items: center;

}



.btn-smaller {
    font-size: 16px;
    padding: 15px 35px;
    width: 210px;
}
.sim {
    display: flex;
    justify-content: center;
    color: $vwhite;

    &__title {
        padding-top: 4rem;
        font-size: 24px;
    }

    &__block {
        background-color: $greydim;
        
    }

    &__button-container {
        display: flex;
        justify-content: space-between;
        padding: 0 5rem;
    }

    &__steps-container {
        display: flex;
        justify-content: space-between;
        padding: 67px 100px 10px 100px;

        & img {
            margin-bottom: 3rem;
            width: 65px;
        }

        &--desc {
            font-size: 13px;
            // line-height: 2px;
            text-align: justify;
        }
    }

    &__desc-container {
        display: flex;
        justify-content: space-between;
        padding: 0 30px;

        & > * {
            width: 30%;
        }
    }

}

</style>
