<template>
<div class="page">
    <div class="container">
        
        <PageCrumbs path="ADVANTAGES LIST" />
        <PageDivider title="ADVANTAGES LIST" />
        <div class="a-list">
            <div class="a-list__entry">
                <div class="a-list__entry--container" @click.prevent="activateList(1)">
                    <div class="a-list__title">ONE GLOBAL RATE</div>
                    <img class="a-list__img" :class="{activeAlist: listActive[1]}" src="../assets/SVG/cube-lighted.svg" alt="">
                </div>
                <div class="a-list__desc" :class="{activeDesc: listActive[1]}">
                    V-Tell subscribers may use communication services in any part of the world1, while paying a fixed monthly rate for their preferred bundle.
                </div>
            </div>
            <div class="a-list__entry">
                <div class="a-list__entry--container" @click.prevent="activateList(2)">
                    <div class="a-list__title">EXCELLENT MOBILE INTERNET</div>
                    <img class="a-list__img" :class="{activeAlist: listActive[2]}" src="../assets/SVG/cube-lighted.svg" alt="">
                </div>
                <div class="a-list__desc" :class="{activeDesc: listActive[2]}">
                    You no longer need to limit your high speed Internet usage while traveling abroad or worry about different rates and limited access to internet resources. You will have the ability to watch movies, listen to music and chat using any social network!
                </div>
            </div>
            <div class="a-list__entry">
                <div class="a-list__entry--container" @click.prevent="activateList(3)">
                    <div class="a-list__title">V-TELL PHONE NUMBERS IN DIFFERENT COUNTRIES ALL ON ONE SIM CARD</div>
                    <img class="a-list__img" :class="{activeAlist: listActive[3]}" src="../assets/SVG/cube-lighted.svg" alt="">
                </div>
                <div class="a-list__desc" :class="{activeDesc: listActive[3]}">
                    You do not need to have several mobile devices or switch SIM cards for each country. A V-Tell Subscriber will really feel like a Citizen of the World: You can choose additional foreign phone numbers from all over the world1 and add them to your SIM card at any time. One single SIM card allows you to have an unlimited amount of V-Tell phone numbers in most countries2.
                </div>
            </div>
            <div class="a-list__entry">
                <div class="a-list__entry--container" @click.prevent="activateList(4)">
                    <div class="a-list__title">YOU CAN BE REACHED WORLDWIDE WITH NO OVERSEAS CHARGE TO YOUR HOST</div>
                    <img class="a-list__img" :class="{activeAlist: listActive[4]}" src="../assets/SVG/cube-lighted.svg" alt="">
                </div>
                <div class="a-list__desc" :class="{activeDesc: listActive[4]}">
                    You can be anywhere in the world1 and your business partners, relatives and friends can call you without worrying about the price of long distance calls. Their outgoing calls will always be considered local calls. Even when using “One-Touch” call back, your business partners, relatives and friends will conveniently only pay their local rates3!
                </div>
            </div>
            <div class="a-list__entry">
                <div class="a-list__entry--container" @click.prevent="activateList(5)">
                    <div class="a-list__title">YOU'RE LOCAL NO MATTER WHERE YOU ARE</div>
                    <img class="a-list__img" :class="{activeAlist: listActive[5]}" src="../assets/SVG/cube-lighted.svg" alt="">
                </div>
                <div class="a-list__desc" :class="{activeDesc: listActive[5]}">
                    V-Tell Subscribers will always be considered "local" to residents and businesses when visiting any country whose phone number has been assigned to their SIM card.
                </div>
            </div>
            <div class="a-list__entry">
                <div class="a-list__entry--container" @click.prevent="activateList(6)">
                    <div class="a-list__title">V-TELL DOES NOT UTILIZE IP TELEPHONY</div>
                    <img class="a-list__img" :class="{activeAlist: listActive[6]}" src="../assets/SVG/cube-lighted.svg" alt="">
                </div>
                <div class="a-list__desc" :class="{activeDesc: listActive[6]}">
                    Being an operator in several countries of the world1, V-Tell offers its Subscribers the opportunity to stay connected with their local network while traveling around the world. That is why we do not need to utilize IP telephony.
                </div>
            </div>
            <div class="a-list__entry">
                <div class="a-list__entry--container" @click.prevent="activateList(7)">
                    <div class="a-list__title">AUTOMATIC SWITCH OF V-TELL PHONE NUMBERS</div>
                    <img class="a-list__img" :class="{activeAlist: listActive[7]}" src="../assets/SVG/cube-lighted.svg" alt="">
                </div>
                <div class="a-list__desc" :class="{activeDesc: listActive[7]}">
                    You can add V-Tell phone numbers of any countries3 to your SIM card by yourself via the mobile app or website. These are permanent phone numbers, which will be assigned to you by V-Tell.
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<script>
import PageDivider from '@/components/PageDivider';
import PageCrumbs from '@/components/PageCrumbs';
import { bus } from '../main';
export default {
    components: {PageDivider, PageCrumbs},
    data() {
        return {
            listActive: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false
            }
        }
    },
    methods: {
        activateList(num) {
            this.listActive[num] = !this.listActive[num];
        }
    },
    mounted() {
        let theId = this.$route.params.id;
        if(theId == 0) {
            return;
        } else {
            this.listActive[theId] = true;
        }
        window.scrollTo(0, 0);
    }
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';
@import '../scss/_utilities.scss';
@import '../scss/_page.scss';


.a-list {
    padding: 38px;
    margin: 2rem 0;
    background: rgba(252, 252, 252, 0.25);
    box-shadow: 0 0 6em rgba(31, 31, 31, 0.25) inset;
    color: white;
    font-size: 21px;

    &__entry {
        &--container {
            padding: 10px 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            text-align: left;
            justify-content: space-between;
            &:hover img, &:hover .a-list__title {
                filter: opacity(50%);
            }
        }
        & .a-list__title {
            transition: all .4s;
        }
    }

    &__img {
        width: 2rem;
        transform: rotate(270deg);
        background-color: transparent;
        transition: all .4s;
    }

    &__desc {
        text-align: left;
        max-height: 0;
        opacity: 0;
        font-size: 16px;
        line-height: 26px;
        transition: all .4s;
    }
}

.activeAlist {
    transform: rotate(360deg) !important;
}

.activeDesc {
    max-height: 17rem;
    height: auto;
    opacity: 1;
}
</style>
