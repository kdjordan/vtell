<template>
<div class="page">
    <div class="container">
        <div class="crumbs">
            <img class="crumbs__img" src="../assets/back-button.png" alt="">
        <div class="crumbs__path">/&nbsp;<a href="/">HOME</a>&nbsp;/&nbsp;ADVANTAGES LIST</div>
        </div>
        <div class="page-divider mb-3">  
        <img class="page-divider__cube" src="../assets/SVG/cube.svg" alt="">
        <div class="page-divider__title">ADVANTAGES LIST</div>
        </div> 
    <div class="advantages-list">
        <div class="advantages-list__entry">
            <div class="advantages-list__title">ONE GLOBAL RATE</div>
            <img class="advantages-list__img" src="../assets/SVG/cube-lighted.svg" alt="">
        </div>
        <div class="advantages-list__entry">
            <div class="advantages-list__title">EXCELLENT MOBILE INTERNET</div>
            <img class="advantages-list__img" src="../assets/SVG/cube-lighted.svg" alt="">
        </div>
        <div class="advantages-list__entry">
            <div class="advantages-list__title">V-TELL PHONE NUMBERS IN DIFFERENT COUNTRIES ALL ON ONE SIM CARD</div>
            <img class="advantages-list__img" src="../assets/SVG/cube-lighted.svg" alt="">
        </div>
        <div class="advantages-list__entry">
            <div class="advantages-list__title">YOU CAN BE REACHED WORLDWIDE WITH NO OVERSEAS CHARGE TO YOUR HOST</div>
            <img class="advantages-list__img" src="../assets/SVG/cube-lighted.svg" alt="">
        </div>
        <div class="advantages-list__entry">
            <div class="advantages-list__title">YOU'RE LOCAL NO MATTER WHERE YOU ARE</div>
            <img class="advantages-list__img" src="../assets/SVG/cube-lighted.svg" alt="">
        </div>
        <div class="advantages-list__entry">
            <div class="advantages-list__title">V-TELL DOES NOT UTILIZE IP TELEPHONY</div>
            <img class="advantages-list__img" src="../assets/SVG/cube-lighted.svg" alt="">
        </div>
        <div class="advantages-list__entry">
            <div class="advantages-list__title">AUTOMATIC SWITCH OF V-TELL PHONE NUMBERS</div>
            <img class="advantages-list__img" src="../assets/SVG/cube-lighted.svg" alt="">
        </div>
        <div class="advantages-list__desc">
            You can add V-Tell phone numbers of any countries3 to your SIM card by yourself via the mobile app or website. These are permanent phone numbers, which will be assigned to you by V-Tell.
        </div>

    </div>
    </div>
</div>

</template>
<script>

</script>

<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';
@import '../scss/_divider.scss';
@import '../scss/_utilities.scss';
@import '../scss/_page.scss';

.advantages-list {
    padding: 38px;
    margin: 2rem 0;
    background: rgba(252, 252, 252, 0.25);
    box-shadow: 0 0 6em rgba(31, 31, 31, 0.25) inset;
    color: $white;
    font-size: 21px;

    &__entry {
        cursor: pointer;
        margin: 2rem 0;
        display: flex;
        align-items: center;
        text-align: left;
        justify-content: space-between;
        transition: all .4s;

        &:hover img, &:hover {
            filter: opacity(50%);
        }
    }

    &__img {
        width: 2rem;
        transform: rotate(270deg);
    }

    &__desc {
        text-align: left;
        font-size: 17px;
        line-height: 27px;


    }
}


</style>
