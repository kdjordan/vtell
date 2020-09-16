<template>
<div class="page">
    <div class="container">
        <PageCrumbs path="Tariffs" />
        <PageDivider title="Tariffs" />
        <div class="plans mb-3">
            <p>V-Tell is a rapidly growing telecommunication company acting as an International Mobile Operator, devoted to provide services and innovative technology to customers across the globe. One V-Tell SIM card allows the subscriber to get unlimited amount of phone numbers with no roaming internet and mobile services.</p>
            <button class="plans__btn mt-2 mb-2"  @click.prevent="toggleButton()" >{{buttonMssg}}&nbsp;&nbsp;&nbsp;&nbsp;<span style="padding-bottom: 8px;">{{buttonMssgExt}}</span></button>

            <div v-if="buttonActive" class="toggle-content">
                <div class="plans__title">V-TELL PRICES, PACKAGES, BUNDLES, DEALS</div>
                <p class="mb-1">There are four Package Deals (the amount of data and minutes differs).</p>  
                <p class="mb-1">V-1, V-2, V-3, V-Max offered to our Subscribers. Each of them includes the following services:</p> 
                <ul class="plans__ul">
                    <li class="plans__li">Unlimited Domestic Talk and Data.</li>
                    <li class="plans__li">Unlimited Data and texting in more 110+ countries*</li>
                    <li class="plans__li">Free two lines with foreign phone numbers included</li>
                    <li class="plans__li">Ability / Capacity to add any amount of foreign phone numbers.</li>
                </ul>
                <div class="plans__title">HOW TO CHOOSE THE PLAN THAT SUITS YOU?</div>
                <p class="mb-1">You can opt your plan by estimating how much data and minutes you use monthly.</p> 
            </div>

        </div>
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
                <router-link :to="`${theCards[indicies.first].route}`"><button class="btn-pricing btn-ghost">READ MORE</button></router-link>
        
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
                <router-link :to="`${theCards[indicies.second].route}`"><button class="btn-pricing btn-ghost">READ MORE</button></router-link>
        
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
                <router-link :to="`${theCards[indicies.third].route}`"><button class="btn-pricing btn-ghost">READ MORE</button></router-link>
        
            </div>
        </div>
        <img @click.prevent="moveRight()" src="../assets/SVG/right-arrow.svg" class="arrow" alt="">
    </div>
    <div class="container">
        <PlanCalculator />
    </div>
</div>

</template>
<script>
import PageDivider from '@/components/PageDivider';
import PageCrumbs from '@/components/PageCrumbs';
import PlanCalculator from '@/components/PlanCalculator';

export default {
    components: {PageDivider, PageCrumbs, PlanCalculator},
     mounted () {
        window.scrollTo(0, 0);
    },
    data() {
        return {
            buttonMssg: 'SHOW MORE',
            buttonMssgExt: '...',
            buttonActive: false,
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
                    dollarPrice: 98,
                    route: '/plan-v1'
                },
                {
                    plan: 'V-2',
                    imgPath: require('../assets/cards/photo_tarif_05.png'),
                    min: 700,
                    sms: 'UNLIMITED',
                    data: 10,
                    euroPrice: 140,
                    dollarPrice: 160,
                    route: '/plan-v2'
                },
                {
                    plan: 'V-3',
                    imgPath: require('../assets/cards/photo_tarif_04.png'),
                    min: 1000,
                    sms: 'UNLIMITED',
                    data: 15,
                    euroPrice: 190,
                    dollarPrice: 219,
                    route: '/plan-v3'
                },
                {
                    plan: 'V-MAXX',
                    imgPath: require('../assets/cards/photo_tarif_06.png'),
                    min: 'UNLIMITED',
                    sms: 'UNLIMITED',
                    data: 'UNLIMITED',
                    euroPrice: 500,
                    dollarPrice: 570,
                    route: '/plan-vmax'
                },
            ]
        }
    },
    methods: {
        toggleButton() {
            if (this.buttonActive) {
                this.buttonActive = false;
                this.buttonMssg = "SHOW MORE";
                this.buttonMssgExt = "...";
            } else {
                this.buttonActive = true;
                 this.buttonMssg = "HIDE";
                this.buttonMssgExt = "X";
            }
        },
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
    }
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';
@import '../scss/_utilities.scss';
@import '../scss/_page.scss';

.plans {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    line-height: 24px;
    justify-content: center;
    align-items: center;

    @media(max-width: 900px) {
        margin: 0 1.5rem;
    }

    &__title {
        margin: 1rem 0;
        color: rgba(242, 242, 242, .5);
        text-align: left;
        font-size: 18px;
    }

    &__ul {
        color: white;
        text-align: left;
        margin-left: 2rem;
    }

    &__li {
        margin: 1rem 0;
    }

    &__btn {
        cursor: pointer;
        color: rgba(242, 242, 242, 0.75);
        background: transparent;
        border: 1px solid $grey;
        border-radius: 3px;
        padding: 10px 15px;
        min-width: 150px;
        transition: all .4s ease;

        &:hover {
            background: $red;
            color: white;
            border: 1px solid $red;
        }
    }
}

p {
    color: rgba(252, 252, 252, 0.8);
    text-align: left;
}

.toggle-content {
    width: 100%;
}

.btn-plans {
    cursor: pointer;
    color: rgba(242, 242, 242, 0.75);
    background: transparent;
    border: 1px solid $grey;
    border-radius: 3px;
    padding: 10px 15px;
    min-width: 150px;
    transition: all .4s ease;

    &:hover {
        background: $red;
        color: white;
        border: 1px solid $red;
    }
}


</style>