<template>
<div class="page">
    <div class="container">
        <PageCrumbs path="plans / v1" />
        <PageDivider title="PLan V-1" />
        <p>{{index}}</p>
        <div class="plan-page">
            <div class="plan-page__button-container">
                <button @click.prevent="selectIndex(0)" class="plan-page__btn" :class="{active: index == 0}">More about tariff</button>
                <button @click.prevent="selectIndex(1)" class="plan-page__btn" :class="{active: index == 1}">Complementary services</button>
                <button @click.prevent="selectIndex(2)" class="plan-page__btn" :class="{active: index == 2}">List of countries</button>
                <button @click.prevent="selectIndex(3)" class="plan-page__btn" :class="{active: index == 3}">Calculator</button>
            </div>
            <div v-if="index == 0" class="plan-page__inner-content">
                <div class="inner inner__row1">
                    <div class="inner__text1">AMOUNT FEE</div>
                    <div class="inner__text2"><font-awesome-icon icon="dollar-sign" />98</div>
                </div>
                <div class="inner inner__row2">
                    <div class="inner__text1">included in package</div>
                    <div class="flex-row">
                        <img src="../assets/pages/plans/plans-globe.jpeg" alt="">
                        <div class="inner__text1">worldwide</div>
                    </div>
            
                </div>
                    
            </div>

            <div v-if="index == 2" class="plan-page__inner-content">
                <PlanCountries />
            </div>
            <div v-if="index == 3" class="plan-page__inner-content">
                <PlanCalculator />
            </div>

        </div>
    </div>
</div>

</template>
<script>
import PageDivider from '@/components/PageDivider';
import PageCrumbs from '@/components/PageCrumbs';
import PlanCalculator from '@/components/PlanCalculator';
import PlanCountries from '@/components/PlanCountries';
export default {
    components: {PageDivider, PageCrumbs, PlanCountries, PlanCalculator},
    data() {
        return {
            index: 0,
        }
    },
    methods: {
        selectIndex(index) {
            this.index = index;
        }
    }
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';
@import '../scss/_utilities.scss';
@import '../scss/_page.scss';

.plan-page {
    background-color: #404040;
    padding: 64px 35px 48px;
    display: inline-block;
    width: 100%;
    max-width: 895px;
    text-align: left;
    position: relative;
    font-size: 16px;

    &__button-container {
        display: flex;

        @media(max-width: 890px) {
            flex-direction: column;
        }
    }

    &__btn {
        display: block;
        padding: 20px 26px;
        background-color: #737370;
        border: 1px solid transparent;
        color: white;
        font-size: 20px;
        margin: 0 .1rem;

         @media(max-width: 890px) {
            margin: .1rem 0;
        }
    }

}

.inner {
    color: white;
    text-transform: uppercase;

    &__text1 {
        font-size: 20px;
    }

    &__text2 {
        font-size: 37px;
    }

    &__row1 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 2rem;
        width: 70%;
    }

    &__row2 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 2rem;
        width: 75%;
    }

    &__0-mid {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__1 {
        color: $red;
    }
}

.active {
    background: $red;
}

.flex-row {
    display: flex;
    align-items: center;

    & img {
        margin-right: 1rem;
    }

    & > div, & > img {
        cursor: pointer;
        transition: all .4s;
    }

    & > div:hover {
        cursor: pointer;
        color: $red
    }
    & > img:hover {
        filter: opacity(50%);
    }
}

</style>
