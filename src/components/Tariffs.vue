<template>
<div>
    <HPageDivider title="Tariffs" />
    <div class="tariff">
        <div class="container">
            <div class="tariff__top-bar">
                <div class="tariff__top-bar--left">
                <div class="tariff__top-bar--title">LIMITED TIME OFFER for V-1, V-2, V-3 plan Subcribers<br>20 hours of voice calls :: 20 GB of data</div>
                </div>
                <div class="tariff__top-bar--right">
                <img class="tariff-svg" src="../assets/SVG/tariffs/euro.svg" alt="">
                <div class="price">40</div>
                <img class="tariff-svg" src="../assets/SVG/tariffs/dollar.svg" alt="">
                <div class="price">32</div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="container__arrow">
            <img @click.prevent="moveLeft()" src="../assets/SVG/left-arrow.svg" class="arrow" alt="">
        <div class="container__arrow--inner">
        
        <div class="card" :class="{slideLeft: doSlideLeft, slideRight: doSlideRight, slide: !doSlideRight && !doSlideLeft}">
            <div class="card__header">
                <img :src=theCards[indicies.first].imgPath alt="">
            </div>
            <table class="card__content--table">
                <tbody>
                    <tr>
                        <th class="card__content--small-font">VOICE</th>
                        <th class="card__svg inline"><img src="../assets/SVG/card/phone.svg" alt=""></th>
                        <th v-if="indicies.first !== 3" class="card__content--large-font">{{theCards[indicies.first].min}} <span style="font-size: 16px;">min</span></th>
                        <th v-else class="card__content--font-adjust">{{theCards[indicies.first].min}}</th>
                    </tr>
                    <tr>
                        <th class="card__content--small-font">SMS</th>
                        <th class="card__svg inline"><img src="../assets/SVG/card/mssg.svg" alt=""></th>
                        <th class="card__content--large-font" style="font-size: 16px; vertical-align: middle;">{{theCards[indicies.first].sms}}</th>
                    </tr>
                    <tr>
                        <th class="card__content--small-font">DATA</th>
                        <th class="card__svg inline"><img src="../assets/SVG/card/wifi.svg" alt=""></th>
                        <th v-if="indicies.first !== 3" class="card__content--large-font">{{theCards[indicies.first].data}} <span style="font-size: 16px;">GB</span></th>
                        <th v-else class="card__content--font-adjust">{{theCards[indicies.first].min}}</th>
                    </tr>
                </tbody>
            </table>
            <div class="card__cost">
                <div>
                    <div class="card__svg inline"><font-awesome-icon icon="euro-sign" /></div>
                    <div class="inline">&nbsp;&nbsp;{{theCards[indicies.first].euroPrice}}</div>
                </div>
                <div>
                    <div class="card__svg inline"><font-awesome-icon icon="dollar-sign" /></div>
                    <div class="inline">&nbsp;&nbsp;{{theCards[indicies.first].dollarPrice}}</div>
                </div>

            </div>
            <button class="btn-pricing">BUY NOW</button>
            <button class="btn-pricing btn-ghost">READ MORE</button>
    
        </div>

            <div class="card card__2" :class="{slideLeft: doSlideLeft, slideRight: doSlideRight, slide: !doSlideRight && !doSlideLeft}">
            <div class="card__header">
                <img :src=theCards[indicies.second].imgPath alt="">
            </div>
            <table class="card__content--table">
                <tbody>
                    <tr>
                        <th class="card__content--small-font">VOICE</th>
                        <th class="card__svg inline"><img src="../assets/SVG/card/phone.svg" alt=""></th>
                        <th v-if="indicies.second !== 3" class="card__content--large-font">{{theCards[indicies.second].min}} <span style="font-size: 16px;">min</span></th>
                        <th v-else class="card__content--font-adjust">{{theCards[indicies.second].min}}</th>
                    </tr>
                    <tr>
                        <th class="card__content--small-font">SMS</th>
                        <th class="card__svg inline"><img src="../assets/SVG/card/mssg.svg" alt=""></th>
                        <th class="card__content--large-font" style="font-size: 16px; vertical-align: middle;">{{theCards[indicies.second].sms}}</th>
                    </tr>
                    <tr>
                        <th class="card__content--small-font">DATA</th>
                        <th class="card__svg inline"><img src="../assets/SVG/card/wifi.svg" alt=""></th>
                        <th v-if="indicies.second !== 3" class="card__content--large-font">{{theCards[indicies.second].data}} <span style="font-size: 16px;">GB</span></th>
                        <th v-else class="card__content--font-adjust">{{theCards[indicies.second].min}}</th>
                    </tr>
                </tbody>
            </table>
            <div class="card__cost">
                <div>
                    <div class="card__svg inline"><font-awesome-icon icon="euro-sign" /></div>
                    <div class="inline">&nbsp;&nbsp;{{theCards[indicies.second].euroPrice}}</div>
                </div>
                <div>
                    <div class="card__svg inline"><font-awesome-icon icon="dollar-sign" /></div>
                    <div class="inline">&nbsp;&nbsp;{{theCards[indicies.second].dollarPrice}}</div>
                </div>

            </div>
            <button class="btn-pricing">BUY NOW</button>
            <button class="btn-pricing btn-ghost">READ MORE</button>
    
        </div>

        <div class="card card__3"  :class="{slideLeft: doSlideLeft, slideRight: doSlideRight, slide: !doSlideRight && !doSlideLeft}">
            <div class="card__header">
                <img :src=theCards[indicies.third].imgPath alt="">
            </div>
            <table class="card__content--table">
                <tbody>
                    <tr>
                        <th class="card__content--small-font">VOICE</th>
                        <th class="card__svg inline"><img src="../assets/SVG/card/phone.svg" alt=""></th>
                        <th v-if="indicies.third !== 3" class="card__content--large-font">{{theCards[indicies.third].min}} <span style="font-size: 16px;">min</span></th>
                        <th v-else class="card__content--font-adjust">{{theCards[indicies.third].min}}</th>
                    </tr>
                    <tr>
                        <th class="card__content--small-font">SMS</th>
                        <th class="card__svg inline"><img src="../assets/SVG/card/mssg.svg" alt=""></th>
                        <th class="card__content--large-font" style="font-size: 16px; vertical-align: middle;">{{theCards[indicies.third].sms}}</th>
                    </tr>
                    <tr>
                        <th class="card__content--small-font">DATA</th>
                        <th class="card__svg inline"><img src="../assets/SVG/card/wifi.svg" alt=""></th>
                        <th v-if="indicies.third !== 3" class="card__content--large-font">{{theCards[indicies.third].data}} <span style="font-size: 16px;">GB</span></th>
                        <th v-else class="card__content--font-adjust">{{theCards[indicies.third].data}}</th>
                    </tr>
                </tbody>
            </table>
            <div class="card__cost">
                <div>
                    <div class="card__svg inline"><font-awesome-icon icon="euro-sign" /></div>
                    <div class="inline">&nbsp;&nbsp;{{theCards[indicies.third].euroPrice}}</div>
                </div>
                <div>
                    <div class="card__svg inline"><font-awesome-icon icon="dollar-sign" /></div>
                    <div class="inline">&nbsp;&nbsp;{{theCards[indicies.third].dollarPrice}}</div>
                </div>

            </div>
            <button class="btn-pricing">BUY NOW</button>
            <button class="btn-pricing btn-ghost">READ MORE</button>
    
        </div>
        </div>
        <img @click.prevent="moveRight()" src="../assets/SVG/right-arrow.svg" class="arrow" alt="">
    </div>
</div>  
</template>

<script>
import HPageDivider from '@/components/HPageDivider';
export default {
    components: {HPageDivider},
    methods: {
        moveLeft() {
            this.doSlideLeft = true;
            for (const index in this.indicies) {
                if (this.indicies[index] == 0) {
                    this.indicies[index] = 3;
                } else {
                    this.indicies[index]--;
                }
            }
            setTimeout(() => {
                this.doSlideLeft = false;
            })
        },
        moveRight() {
            this.doSlideRight = true
            for (const index in this.indicies) {
                if (this.indicies[index] == 3) {
                    this.indicies[index] = 0;
                } else {
                    this.indicies[index]++;
                }
            }
            
             setTimeout(() => {
                this.doSlideRight = false;
            })
            
        }
    },
    data() {
        return {
            doSlideRight: false,
            doSlideLeft: false,
            index: 0,
            indicies: {
                first: 0,
                second: 1,
                third: 2,
                fourth: 3
            },
            theCards: [
                {
                    plan: 'V-1',
                    imgPath: require('../assets/cards/photo_tarif_03.png'),
                    min: 500,
                    sms: 'UNLIMITED',
                    data: 5,
                    euroPrice: 90,
                    dollarPrice: 98
                },
                {
                    plan: 'V-2',
                    imgPath: require('../assets/cards/photo_tarif_05.png'),
                    min: 700,
                    sms: 'UNLIMITED',
                    data: 10,
                    euroPrice: 140,
                    dollarPrice: 160
                },
                {
                    plan: 'V-3',
                    imgPath: require('../assets/cards/photo_tarif_04.png'),
                    min: 1000,
                    sms: 'UNLIMITED',
                    data: 15,
                    euroPrice: 190,
                    dollarPrice: 219
                },
                {
                    plan: 'V-MAXX',
                    imgPath: require('../assets/cards/photo_tarif_06.png'),
                    min: 'UNLIMITED',
                    sms: 'UNLIMITED',
                    data: 'UNLIMITED',
                    euroPrice: 500,
                    dollarPrice: 570
                },
            ]
        }
    }

}
</script>

<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';
@import '../scss/_utilities.scss';

.slide {
    transform: translateX(0);
    transition: all .4s;

    &Right {
        transform: translateX(100%);
    }

    &Left {
        transform: translateX(-100%);
    }
}


.container__arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 965px;
    margin: 0 auto;
    margin-bottom: 2rem;

    &--inner {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        overflow: hidden
    }
}

.btn-pricing {
    border: 1px solid transparent;
    width: 90%;
    margin: .2rem auto;
    padding: 8px 0;
    color: white;
    background: $red;
}

.btn-ghost {
    background: transparent;
    border: 1px solid white;
    color: white;
    margin-bottom: 1rem;

}

.inline {
    display: inline-block;
}

.card {
    display: flex;
    flex-direction: column;
    color: white;
    background: $greydim;
    min-width: 270px;
    width:  100%;
    margin: 0 1rem;

    &__2 {
        @media(max-width: 570px) {
            display: none;
        }
    }

    &__3 {
        @media(max-width: 910px) {
            display: none;
        }
    }

    &__cost {
        display: flex;
        width: 75%;
        margin: 0 auto;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    &__svg {
        background-color: #4c3c3c;
        padding: 0;
        margin: 0;
        padding: .25rem;
        
        & img {
            width: 1rem;
        }
    }

    &__header {
        padding: 1rem;

        &--type {
            color: black;
            font-size: 35px;
            position: relative;
            bottom: 40px;
            left: 90px;
        }

        & img {
            width: 100%;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: -3rem;
        margin-bottom: 3rem;

        &--table {
            margin: 0 auto;
            margin-bottom: 1rem;
        }

        &--small-font {
            font-size: 10px;
            padding-right: 10px;
            text-align: right;
            vertical-align: top;
        }

        &--large-font {
            font-size: 24px;
            padding-left: 10px;
            text-align: left;
            vertical-align: top;
        }

        &--font-adjust {
            font-size: 16px; 
            padding-left: 10px;
            text-align: left;
            vertical-align: middle;

        }
    }
}

.arrow {
    font-size: 8rem;
    color: $red;
}

.tariff {
    display: flex;
    justify-content: center;
    width: 100%;

    &-svg {
        width: 15%;
    }
    
    &__top-bar {
        padding: 1rem;
        text-align: left;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0;
        background: $red;
        font-size: 22px;

        @media(max-width: 840px) {
            flex-direction: column;
        }

        &--title {
            text-align: center;
            line-height: 35px;
        }

        &--left {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            width: 80%;
        }

        &--right {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 40%;

    
            & .price {
                font-size: 40px;
                margin-top: .5rem;
            }
            
        }
        
    }
}



</style>