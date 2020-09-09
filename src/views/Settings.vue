<template>
<div class="page">
    <div class="container">
        <PageCrumbs path="Settings" />
        <PageDivider title="Settings" />
        <div class="settings mb-4">
            <div class="settings__top">
                <div class="settings__top--left">
                    <p>To use mobile internet on your mobile device please set correct Access Point Name (APN) and make sure Data roaming is on.</p>
                    <p>To connect your phone to Wi-Fi network, please enable it.</p>
                    <p>Select the type of your device: iOS, Android.</p>
                </div>
                <div class="settings__top--right">
                    <div @click.prevent="setIndicies(0)">
                        <svg class="settings__svg" :class="{activeSetting: activeIndex == 0}" version="1.1"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.2 52.5">
                            <path d="M42.8,17.7c-0.3,0.2-0.6,0.4-0.9,0.6c-1.4,1-2.6,2.1-3.5,3.6c-0.7,1.2-1.2,2.4-1.4,3.8c-0.3,1.9-0.2,3.7,0.4,5.5c0.6,1.9,1.7,3.5,3.1,4.9c1,1,2.2,1.8,3.5,2.3c0,0,0,0,0.1,0c-0.1,0.2-0.1,0.3-0.2,0.5c-1,3-2.5,5.7-4.5,8.2c-0.7,1-1.5,1.9-2.3,2.8c-0.8,0.7-1.6,1.4-2.5,1.8c-1.2,0.5-2.4,0.7-3.7,0.5c-1.2-0.2-2.3-0.6-3.4-1c-1.1-0.4-2.2-0.8-3.4-0.9c-1.2-0.1-2.4,0-3.6,0.2c-1,0.2-1.9,0.6-2.8,1C16.9,52,16,52.2,15,52.4c-1.2,0.2-2.4,0-3.4-0.6c-1.2-0.6-2.2-1.5-3.1-2.5c-3.6-4-6.1-8.6-7.5-13.8c-0.4-1.4-0.7-2.9-0.8-4.3c-0.2-1.5-0.2-3-0.1-4.4c0.2-2.4,0.7-4.6,1.8-6.7c1-1.9,2.3-3.6,4.1-4.9c1.7-1.3,3.6-2.1,5.8-2.4c0.7-0.1,1.5-0.2,2.2-0.1c0.8,0,1.7,0.2,2.5,0.5c0.9,0.3,1.8,0.6,2.7,0.9c0.9,0.3,1.8,0.6,2.7,0.9c0.5,0.1,1.1,0,1.6-0.1c1.3-0.5,2.7-0.9,4-1.4c1.3-0.4,2.6-0.8,4-0.9c0.7-0.1,1.5,0,2.2,0.1c1.1,0.1,2.2,0.4,3.2,0.7C39.2,14.1,41.2,15.5,42.8,17.7C42.7,17.6,42.8,17.7,42.8,17.7z"/>
                            <path d="M33.1,0c0,0.2,0,0.4,0,0.6c0.1,2.6-0.7,4.9-2.2,7c-0.9,1.3-2.1,2.4-3.4,3.3c-1,0.7-2,1.1-3.2,1.4c-0.7,0.1-1.4,0.2-2.1,0.1c0,0-0.1,0-0.1,0c-0.1-0.6-0.1-1.2,0-1.9c0.3-2.5,1.3-4.6,3-6.5c1.3-1.5,2.9-2.6,4.8-3.3c1-0.4,2-0.7,3-0.7C33,0,33,0,33.1,0z" />
                        </svg>
                        <div class="settings__svg--label" :class="{activeSetting: activeIndex == 0}">iOS</div>
                    </div>
                    <div @click.prevent="setIndicies(1)">
                        <svg class="settings__svg" :class="{activeSetting: activeIndex == 1}" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.1 57.7" >
                            <path d="M40.8,18.2c0,0.1,0,0.1,0,0.2c0,8.4,0,16.8,0,25.1c0,1.2-0.5,2-1.6,2.6c-0.4,0.2-0.8,0.3-1.3,0.3c-0.9,0-1.9,0-2.8,0c-0.1,0-0.1,0-0.2,0c0,0.1,0,0.2,0,0.2c0,2.5,0,5.1,0,7.6c0,1.7-1.3,3.2-3,3.5c-1.9,0.3-3.7-1-4-2.9c0-0.2-0.1-0.5-0.1-0.7c0-2.5,0-4.9,0-7.4c0-0.1,0-0.2,0-0.2c-1.8,0-3.6,0-5.5,0c0,0.1,0,0.1,0,0.2c0,2.5,0,5.1,0,7.6c0,2.1-1.8,3.7-3.9,3.5c-1.7-0.2-3.2-1.6-3.2-3.7c0-2.5,0-4.9,0-7.4c0-0.1,0-0.2,0-0.3c-0.1,0-0.2,0-0.2,0c-0.9,0-1.9,0-2.8,0c-1.2,0-2.2-0.7-2.7-1.7c-0.1-0.3-0.2-0.7-0.2-1.1c0-5.5,0-10.9,0-16.4c0-2.9,0-5.8,0-8.8c0-0.1,0-0.1,0-0.2C19.9,18.2,30.3,18.2,40.8,18.2z"/>
                            <path d="M9.4,15.9c0.1-1,0.3-2,0.6-2.9c0.7-2.1,1.9-3.8,3.5-5.3c1.2-1.1,2.5-2,3.9-2.7c0,0,0.1,0,0.2-0.1c-0.2-0.3-0.4-0.5-0.5-0.8c-0.8-1.1-1.6-2.2-2.3-3.4c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.3,0.3-0.5,0.6-0.4c0.1,0.1,0.3,0.2,0.4,0.3c0.9,1.4,1.9,2.7,2.8,4.1c0.1,0.1,0.2,0.1,0.3,0.1c2.2-0.8,4.5-1.2,6.9-1.1c2,0.1,3.9,0.4,5.7,1.1c0.1,0.1,0.2,0,0.3-0.1c0.9-1.4,1.9-2.7,2.8-4.1c0-0.1,0.1-0.1,0.1-0.2c0.2-0.2,0.5-0.2,0.7-0.1c0.2,0.2,0.2,0.4,0.1,0.7c-0.1,0.2-0.3,0.4-0.4,0.7c-0.8,1.2-1.6,2.3-2.4,3.5c0,0,0,0.1-0.1,0.1c0.3,0.1,0.6,0.3,0.8,0.4c2.1,1.2,3.9,2.7,5.3,4.7c1.1,1.6,1.7,3.3,2,5.1c0,0.2,0.1,0.4,0.1,0.6C30.2,15.9,19.8,15.9,9.4,15.9z M16.7,9.9c0,1,0.8,1.7,1.7,1.7c1,0,1.7-0.8,1.7-1.7c0-1-0.8-1.7-1.7-1.7C17.5,8.2,16.7,8.9,16.7,9.9z M30.1,9.8c0,1,0.7,1.7,1.7,1.8c0.9,0,1.7-0.8,1.8-1.7c0-0.9-0.7-1.7-1.7-1.7C30.9,8.1,30.2,8.9,30.1,9.8z"/>
                            <path d="M49.8,28.6c0,2.3,0,4.6,0,6.9c0,1.1-0.4,2.1-1.3,2.8c-1.9,1.6-4.8,0.7-5.5-1.6c-0.1-0.4-0.2-0.8-0.2-1.2c0-4.6,0-9.2,0-13.8c0-1.7,1.1-3.1,2.6-3.5c2.1-0.5,4.1,0.9,4.4,3c0,0.2,0,0.4,0,0.6C49.8,24.1,49.8,26.4,49.8,28.6z"/>
                            <path d="M7.4,28.6c0,2.3,0,4.6,0,6.9c0,1.3-0.5,2.3-1.6,3.1C3.7,40,1,38.8,0.4,36.4c-0.1-0.3-0.1-0.5-0.1-0.8c0-4.6,0-9.3,0-13.9c0-1.8,1.4-3.3,3.2-3.5c1.8-0.2,3.5,1.2,3.8,3c0,0.2,0,0.5,0,0.7C7.4,24.1,7.4,26.4,7.4,28.6z"/>
                        </svg>
                        <div class="settings__svg--label" :class="{activeSetting: activeIndex == 1}">Android</div>
                    </div>
                </div>
            </div>
            <div class="settings__lower">
                <div class="settings__lower--left">
                    <img v-if="activeIndex == 0" :src="require(`../assets/pages/settings/ios-settings_${imageIndex}.jpeg`)" alt="">
                    <img v-else :src="require(`../assets/pages/settings/ad-settings_${imageIndex}.jpeg`)" alt="">
                </div>
                <div v-if="activeIndex == 0" class="settings__lower--mid">
                    <div class="settings__lower--title">Turn on the Data roaming</div>
                    <div @click.prevent="setImage(1)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 1}">Settings</div>
                    <div @click.prevent="setImage(2)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 2}">Mobile Data</div>
                    <div @click.prevent="setImage(3)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 3}">Mobile Data - On</div>
                    <div @click.prevent="setImage(4)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 4}">Mobile Data Options</div>
                    <div @click.prevent="setImage(5)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 5}">Data Roaming - On</div>
                    <div @click.prevent="setImage(6)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 6}">Mobile Data Network</div>
                    <div @click.prevent="setImage(7)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 7}">Below the header<br>“Cellular Data”, “LTE Setup”,<br> in the APN line print: internet.v-tell.com</div>
                    <div class="settings__lower--title mt-1">Enable Wi-Fi usage</div>
                    <div @click.prevent="setImage(8)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 8}">Settings</div>
                    <div @click.prevent="setImage(9)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 9}">Wi-Fi</div>
                    <div @click.prevent="setImage(10)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 10}">On</div>
                    <div class="settings__lower--entry-desc mt-2">To find out your available usage please use the phone dialer and press <span>*110*1#.</span> call.</div>
                </div>
                <div v-else class="settings__lower--mid">
                    <div class="settings__lower--title">Turn on the Data roaming</div>
                    <div @click.prevent="setImage(1)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 1}">Settings</div>
                    <div @click.prevent="setImage(2)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 2}">Connections</div>
                    <div @click.prevent="setImage(3)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 3}">Mobile Nettworks</div>
                    <div @click.prevent="setImage(4)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 4}">Data Roaming - On</div>
                    <div @click.prevent="setImage(5)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 5}">Access Point Names</div>
                    <div @click.prevent="setImage(6)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 6}">Add</div>
                    <div @click.prevent="setImage(7)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 7}">Edit Access Point</div>
                    <div @click.prevent="setImage(8)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 8}">Name - vtell</div>
                    <div @click.prevent="setImage(9)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 9}">APN - internet.v-tell.com</div>
                    <div class="settings__lower--title mt-1">Enable Wi-Fi usage</div>
                    <div @click.prevent="setImage(10)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 10}">Settings</div>
                    <div @click.prevent="setImage(11)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 11}">Wi-Fi</div>
                    <div @click.prevent="setImage(12)" class="settings__lower--entry" :class="{activeEntry: imageIndex == 12}">W-Fi - On</div>
                    <div class="settings__lower--entry-desc mt-2">To find out your available usage please use the phone dialer and press <span>*110*1#.</span> call.</div>
                </div>
                <div class="settings__lower--right">
                    <div class="up-arrow"></div>
                    <div class="upper-slider">
                        <div class="upper-slider--indicator" :style="{top: getUpperIndicator + 'px'}"></div>
                    </div>
                    <div class="down-arrow"></div>
                    <div class="up-arrow mt-2"></div>
                    <div class="lower-slider">
                        <div class="lower-slider--indicator" :style="{top: getLowerIndicator + 'px'}"></div>
                    </div>
                    <div class="down-arrow"></div>
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
    components: {PageDivider, PageCrumbs},
    data() {
        return {
            //0 is for ios 1 is for android
            activeIndex: 0,
            imageIndex: 1
        }
    },
    methods: {
        setImage(num) {
            this.imageIndex = num;
        },
        setIndicies(ind) {
            this.activeIndex = ind;
            this.imageIndex = 1;
        }
    },
    computed: {
        getUpperIndicator() {
            if(this.activeIndex == 0) {
                if(this.imageIndex == 1 || this.imageIndex > 7) { return 0; }
                else if(this.imageIndex == 7) { return 230;}
                else { return ((this.imageIndex - 1) * 34.21);}
            } else {
                if(this.imageIndex == 1 || this.imageIndex > 9) { return 0; }
                else if(this.imageIndex == 9) { return 230;}
                else { return ((this.imageIndex - 1) * 30);}
            }
        },
        getLowerIndicator() {
            if(this.activeIndex == 0) {
                if(this.imageIndex <= 8) { return 0; }
                else if(this.imageIndex == 9) { return 30; }
                else if(this.imageIndex == 10) { return 50;}
            } else {
                if(this.imageIndex <= 10) { return 0; }
                else if(this.imageIndex == 11) { return 30; }
                else if(this.imageIndex == 12) { return 50;}
            }
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
@import '../scss/_utilities.scss';
@import '../scss/_page.scss';

.settings {
    padding: 56px;
    margin: 28px 0;
    background: rgba(252, 252, 252, 0.2);
    box-shadow: 0 0 6em rgba(31, 31, 31, 0.25) inset;

    & p {
        color: $vwhite2;
        font-size: 16px;
        line-height: 26px;
        margin: 1rem 0;
        @media(max-width: 655px) {
            text-align: center;
        }
    }

    &__top {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        @media(max-width: 655px) {
            flex-direction: column;
        }

        &--left {
            width: 80%;
            @media(max-width: 655px) {
                width: 100%;
            }
        }

        &--right {
            display: flex;
            width: 20%;
            @media(max-width: 655px) {
                width: 100%;
                justify-content: center;
            }
        }
    }

    &__svg {
        width: 2.5rem;
        margin: 0 1rem;
        fill: white;
        transition: all .4s;
        cursor: pointer;

        &:hover, &:hover ~ &--label{
            fill: $red;
            color: $red;
        }

        &--label {
            color: white;
            margin-top: 1rem;
        }
    }

    &__lower {
        color: $vwhite2;
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        font-size: 16px;

        &--title {
            margin-bottom: 1rem;
        }

        &--entry {
            cursor: pointer;
            margin: .2rem 0;
            color: rgb(138, 138, 138);
            text-decoration: none;
            line-height: 20px;
            transition: all .4s;

            &:hover {
                text-decoration: underline;
            }

            &-desc {
                color: rgb(138, 138, 138);
                & span {
                    color: $vwhite;
                }
            }
        }

        &--left {
            flex-basis: 30%;
        }

        &--mid {
            text-align: left;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            flex-basis: 55%;
            @media(max-width: 655px) {
                margin-left: 2rem;
            }
        }

        &--right {
            flex-basis: 5%;
            display: flex;
            flex-direction: column;
            align-items: center;

            @media(max-width: 655px) {
                display: none;
            }

            & .up-arrow {
                width: 0;
                height: 0;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-bottom: 10px solid white;
                cursor: pointer;
            }

            & .down-arrow {
                width: 0;
                height: 0;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 10px solid white;
                cursor: pointer;
            }

            & .upper-slider {
                display: block;
                width: 10px;
                height: 240px;
                background: #84847f;
                border-radius: 4px;
                margin: .3rem 0;
            }

            & .upper-slider--indicator {
                display: block;
                background: white;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                position: relative;
                top: 0px;
                transition: all .4s;
            }

            & .lower-slider {
                display: block;
                width: 10px;
                height: 60px;
                background: #84847f;
                border-radius: 4px;
                margin: .3rem 0;
            }

            & .lower-slider--indicator {
                display: block;
                background: white;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                position: relative;
                top: 0px;
                transition: all .4s;
                
            }
        }
    }
}

.activeSetting {
    fill: $red;
    color: $red;
}

.activeEntry {
    color: white;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
</style>
