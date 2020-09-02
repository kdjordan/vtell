<template>
 <div class="sim"> 
     <div class="container">
         <div class="sim__block">
             <div class="sim__title mt-1 pt-2 pb-2">
                 <strong>HOW TO BUY A SIM CARD</strong>
             </div>
             <div class="sim__button-container pb-2">
                 <div class="sim__button-container--left">
                     <button class="btn__sim" 
                        @click.prevent="stage = 1"
                        :class="{btn__simActive: stage == 1}">Online
                        </button>
                 </div>
                 <div class="sim__button-container--center">
                     <button class="btn__sim" 
                        @click.prevent="stage = 2"
                        :class="{btn__simActive: stage == 2}">Via Mobile App
                        </button>
                 </div>
                 <div class="sim__button-container--right">
                     <button class="btn__sim" 
                        @click.prevent="stage = 3"
                        :class="{btn__simActive: stage == 3}">In Sales Office
                        </button>
                 </div>
             </div>
             <div v-if="stage == 3">
                 <div class="sim__steps-container--desc-large">V-Tell SIM card can be purchased at V-Tell sales offices and from V-Tell partners in Russia and abroad.</div>
             </div>
             <div v-else class="sim__steps-container pt-2">
                 <div class="sim__steps-container--left">
                     <div class="mobile-column">
                        <img v-if="stage == 2" src="../assets/SVG/steps/phone-step.svg" alt="">
                        <img v-else src="../assets/SVG/steps/step1.svg" alt="">
                        <div class="sim__steps-container--step mb-1">STEP 1</div>
                     </div>
                     <div class="mobile-column__bottom">
                        <div class="sim__steps-container--step mb-2"><strong>ORDER ONLINE</strong></div>
                        <div class="sim__steps-container--desc">Choose a tariff, pick a number combination and place an order.</div>
                     </div>
                 </div>
                 <div class="sim__steps-container--center">
                     <div class="mobile-column">
                        <img src="../assets/SVG/steps/step2.svg" alt="">
                        <div class="sim__steps-container--step mb-1">STEP 2</div>
                     </div>
                     <div class="mobile-column__bottom">
                        <div class="sim__steps-container--step mb-2"><strong>DELIVERY</strong></div>
                        <div class="sim__steps-container--desc">Choose a delivery method: courier service or pick-up.</div>
                     </div>
                 </div>
                 <div class="sim__steps-container--right">
                     <div class="mobile-column">
                        <img src="../assets/SVG/steps/step3.svg" alt="">
                        <div class="sim__steps-container--step mb-1">STEP 3</div>
                     </div>
                     <div class="mobile-column__bottom">
                        <div class="sim__steps-container--step mb-2 bold"><strong>SIM REGISTRATION</strong></div>
                        <div class="sim__steps-container--desc">Fill in required form fields to proceed with SIM card registration.</div>
                     </div>
                 </div>
             </div>
            <div class="lower-btn__container">
                <button class="btn__sim btn__sim--red mt-3 mb-3">Buy now</button>
            </div>
         </div>
     </div> 
 </div>
    

</template>

<script>
export default {
    data() {
        return {
            stage: 1
        }
    }
}
</script>

<style scoped lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';
@import '../scss/_utilities.scss';

.btn__sim {
    cursor: pointer;
    background: white;
    color: $grey;
    font-size: 16px;
    border: none;
    border-radius: 35px;
    padding: 12px 35px;
    width: 100%;
    min-width: 210px;
    transition: all .4s;

    @media(max-width: 623px) {
        max-width: 210px;
        padding: 5px;
    }

    &:hover {
      background: $red;
      color: white;
    }

    &Active {
        background: $red;
        color: white;
    }

    &--red {
        background: $red;
        color: white;
    }
}

.sim {
    display: flex;
    justify-content: center;
    color: $vwhite;
    margin-bottom: 3rem;

    &__title {
        font-size: 24px;
    }

    &__block {
        background-color: $greydim;
        
    }

    &__button-container {
        display: flex;
        justify-content: space-between;
        align-content: center;
        width: 100%;
        max-width: 750px;
        margin: 0 auto;

        & > div {
            @media(max-width: 623px) {
                margin: .5rem 0;
            }
        }

        @media(max-width: 623px) {
            flex-direction: column;
        }
    }

    &__steps-container {
        display: flex;
        justify-content: space-between;
        align-content: center;
        width: 100%;
        padding: 0 2rem;
        margin: 0 auto;

        @media(max-width: 623px) {
            flex-direction: column;
        }

        & > div {
            flex-direction: row;
            width: 30%;

        }

        @media(max-width: 623px) {
            & > div {
                width: 100%;
                display: flex;
                margin-bottom: 2rem;
            }
        }

        &--step {
            @media(max-width: 623px) {
                margin-bottom: 1rem;
            }
        }

        & .mobile-column {
            @media(max-width: 623px) {
                display: flex;
                flex-direction: column;
                margin: 0 2rem;

                &__bottom {
                    text-align: left;
                }
            }
        }
        

        & img {
            margin-bottom: 3rem;
            width: 65px;

            @media(max-width: 623px) {
                margin-bottom: 1rem;
            }
        }

        &--desc {
            font-size: 13px;
            // line-height: 2px;
            text-align: center;

            @media(max-width: 623px) {
                text-align: left;
            }

            &-large {
                font-size: 16px;
            }
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

.lower-btn {
    &__container {
        width: 25%;
        margin: 0 auto;

        @media(max-width: 623px) {
            width: 100%;
        }
    }
}

</style>
