<template>
<div class="page">
    <div class="container">
        <PageCrumbs path="ADVANTAGES" />
        <PageDivider title="ADVANTAGES" />
        <div class="advantages">
            <div class="advantages__wrap">
                <div class="advantages__wrap--square"  @click.prevent="goTo(1)">
                    <img src="../assets/advantages/adv_image1.png" alt="">
                    <div class="advantages__desc advantages__desc--1">One Global Rate</div>
                </div>
                <div @click.prevent="goTo(2)">
                    <img src="../assets/advantages/adv_image2.png" alt="">
                    <div class="advantages__desc advantages__desc--2">Excellent Mobile<br />Internet</div>
                </div>
                <div @click.prevent="goTo(3)">
                    <img src="../assets/advantages/adv_image3.png" alt="">
                    <div class="advantages__desc advantages__desc--3">V-TELL PHONE NUMBERS<br> IN DIFFERENT COUNTRIES<br> ALL ON ONE SIM CARD</div>
                </div>
                <div @click.prevent="goTo(4)">
                    <img src="../assets/advantages/adv_image4.png" alt="">
                    <div class="advantages__desc advantages__desc--4">YOU CAN BE REACHED<br>WORLDWIDE WITH NO<br>OVERSEAS CHARGE TO<br> YOUR HOST</div>
                </div>
                <div @click.prevent="goTo(5)">
                    <img src="../assets/advantages/adv_image5.png" alt="">
                    <div class="advantages__desc advantages__desc--5">YOU'RE LOCAL NO<br>MATTER WHERE YOU ARE</div>
                </div>
                <div @click.prevent="goTo(6)">
                    <img src="../assets/advantages/adv_image6.png" alt="">
                    <div class="advantages__desc advantages__desc--6">V-TELL DOES NOT UTILIZE<br>IP TELEPHONY</div>
                </div>
                <div @click.prevent="goTo(7)">
                    <img src="../assets/advantages/adv_image7.png" alt="">
                    <div class="advantages__desc advantages__desc--6">AUTOMATIC SWITCH OF V-TELL PHONE NUMBERS</div>
                </div>
            </div>
        </div>
    </div>
</div> 
  
</template>

<script>
import PageDivider from '@/components/PageDivider';
import PageCrumbs from '@/components/PageCrumbs';
export default {
    components: {PageDivider,PageCrumbs},
    methods: {
        goTo(num) {
            this.$router.push(`/advantages-list/${num}`);
        }
    },
    mounted () {
        window.scrollTo(0, 0);
    }
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';

.advantages {
    max-width: 895px;
    margin: 0 auto;
    margin-bottom: 3rem;

    &__desc {
        color: white;
        font-size: 16px;
        word-wrap: normal;
        position: relative;
        text-transform: uppercase;
        margin: 0 auto;

        &--1 {
            width: 80%;
            bottom: 60px;
        }

        &--2 {
            width: 80%;
            bottom: 60px;
        }

        &--3 {
            font-size: 14px;
            width: 90%;
            bottom: 70px;
        }

        &--4 {
            font-size: 16px;
            width: 100%;
            bottom: 85px;
        }

        &--5 {
            font-size: 16px;
            width: 80%;
            bottom: 65px;
        }

        &--6 {
            font-size: 16px;
            width: 100%;
            bottom: 60px;
        }

        &--7 {
            font-size: 16px;
            width: 100%;
            bottom: 60px;
        }

    }

    &__wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;

        & > div {
            cursor: pointer;
            transform: scale(1, 1);
            margin: .5rem .3rem;
            max-height: 212px;
            max-width: 212px;
            transition: all 0.1s linear 0s;
        }

        & > div:hover {
            transform: scale(1.06, 1.06);
            
            position: relative;
        }
    }
}

</style>