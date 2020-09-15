<template>
<div class="page">
    <div class="container">
        
        <PageCrumbs path="Partnerships" />
        <PageDivider title="Partnerships" />
        <img class="partnership__img mb-1"  src="../assets/pages/partnership.jpg" alt="">
        <div class="partnership__desc">
            <p>V-Tell is interested in collaboration with sales agents to promote our mobile services. The Partner’s target is to spread our mobile network services by attracting new Subscribers. V-Tell offers enticing compensation, which is 10% of a monthly subscription fee. The more customers you sign up, the more you earn.</p>
            <p class="red">Please use a partner compensation calculator to estimate your future earnings</p>
            <div class="calc__container">
                <div class="calc__row">
                    <div class="calc__header--1">Subscriber Count</div>
                    <div class="calc__header--2">Amount of additional phone Monthly Plan numbers sold (extra phone numbers purchased by a Subscriber)</div>
                    <div class="calc__header--3">Monthly Plan</div>
                    <div class="calc__header--4"></div>
                </div>
                <div class="calc__row">
                    <div class="calc__header--1"><input class="calc__row--input" type="text" name="" id=""></div>
                    <div class="calc__header--2"><input class="calc__row--input" type="text" name="" id=""></div>
                    <div class="calc__header--3"><input class="calc__row--input" type="text" name="" id=""></div>
                    <div class="calc__header--4">
                        <svg class="calc__header--svg" width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="23" stroke="#E7383B" stroke-width="3" fill="transparent"></circle>
                            <line x1="14" y1="25" x2="36" y2="25" stroke="#E7383B" stroke-width="3" stroke-linecap="round"></line>
                            <line x1="25" y1="14" x2="25" y2="36" stroke="#E7383B" stroke-width="3" stroke-linecap="round"></line>
                        </svg>
                        <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="23" stroke="#E7383B" stroke-width="3" fill="transparent"></circle>
                            <line x1="14" y1="25" x2="36" y2="25" stroke="#E7383B" stroke-width="3" stroke-linecap="round"></line>
                        </svg>
                    </div>
                </div>
                <div class="calc__row">
                    <div class="calc__header--1"></div>
                    <div class="calc__header--2"></div>
                    <div class="calc__header--3"><span style="margin-bottom: 1rem; display: block;">Currency</span>
                        <input class="calc__row--input" type="text" name="" id="">
                    </div>
                    <div class="calc__header--4"></div>
                </div>
            <!-- <div class="calc__row calc__row--end">
                <div class="calc__row--end-curr">Currency</div>
            </div>
            <div class="calc__row calc__row--end">
                <div><input class="calc__row--input" type="text" name="" id=""></div>
            </div> -->
        </div>
        <button class="partnership__btn">Calculate</button>
        </div>
        <div class="partner-boxes">
            <div class="partner-boxes__box partner-boxes__box--1" @click.prevent="openDesc(1)">
                <div class="partner-boxes__box--desc">V-Tell offers Unique Products</div>
            </div>
            <div class="partner-boxes__box partner-boxes__box--2" @click.prevent="openDesc(2)">
                <div class="partner-boxes__box--desc">Attractive Partner’s compensation for successful Sales is guaranteed</div>
            </div>
            <div class="partner-boxes__box partner-boxes__box--3" @click.prevent="openDesc(3)">
                <div class="partner-boxes__box--desc">Partners will always be informed about our latest news, promotions, and discounts.</div>
            </div>
            <div class="partner-boxes__box partner-boxes__box--4" @click.prevent="openDesc(4)">
                <div class="partner-boxes__box--desc">My V-TELL Business (soon)</div>
            </div>
            <div class="partner-boxes__box partner-boxes__box--5" @click.prevent="openDesc(5)">
                <div class="partner-boxes__box--desc">Attractive Partner’s compensation for successful Sales is guaranteed</div>
            </div>
            <div class="partner-boxes__box partner-boxes__box--6" @click.prevent="openDesc(6)">
                <div class="partner-boxes__box--desc">Partners will always be informed about our latest news, promotions, and discounts.</div>
            </div>
            <div class="partner-boxes__box partner-boxes__box--7" @click.prevent="openDesc(7)">
                <div class="partner-boxes__box--desc adjust">Learn more about our Terms and Conditions here</div>
            </div>
        </div>
        <div v-if="descOpen" class="partner-desc">
            <div class="partner-desc__active">
                <img src="../assets/SVG/up-arrow.svg" alt="" @click.prevent="descOpen = false">
            </div>
            <div class="partner-desc__content">
                {{descContent[contentIndex]}}
            </div>
        </div>
        <div class="partner-bottom">
            <div class="partner-bottom__title">If you want to become a Partner</div>
            <div class="partner-bottom__list">
                <ul class="partner__bottom__list--top">
                    <li>&#183;&nbsp;Write to us at : partner@v-tell.com</li>
                    <li>&#183;&nbsp;The manager will contact you</li>
                    <li>&#183;&nbsp;Sign Dealer Agreement</li>
                    <li>&#183;&nbsp;Sell, get rewards and other bonusess !</li>
                </ul>
            </div>
            <div class="partner-bottom__buttons">
                <div><button class="partnership__btn">To My Account</button></div>
                <div><button class="partnership__btn">Ask A Question</button></div>
            </div>
        </div>
    </div>
</div>

</template>
<script>
import PageCrumbs from '@/components/PageCrumbs';
import PageDivider from '@/components/PageDivider';
export default {
    components: {PageDivider, PageCrumbs},
    data() {
        return {
            descOpen: false,
            contentIndex: 1,
            descContent: {
                1: "V-Tell is an international mobile operator that delivers its’ services worldwide. Our broad mobile network is designed to meet expectations of people involved in international business and communication. V-Tell is the most convenient way of communication with relatives and friends who live abroad. V-Tell allows to make and receive calls utilizing a phone number that will be identified as a country local number and charged by local rates. V-Tell delivers an ultimate convenience for you, your families, friends and colleagues! One single phone with multiple numbers that will enable you to stay always in touch and use mobile internet wherever you are. Click here for details.",
                2: "A partner gets a commission of 10% of a monthly subscription fee and 10% of a monthly charge for additional phone numbers of Multi Numbers service for every new Subscriber signed up. A Partner is compensated monthly during Subscriber's lifetime with V-Tell services (excluding VAT and personal discounts provided to a Subscriber).",
                3: "Once needed we will gladly consult you in person.",
                4: "Once using My V-Tell Business, you will be able to sign up new customers remotely, monitor your revenue, and receive the company's latest news. All changes in your Business Account will be emailed to you instantly.",
                5: "A dedicated V-Tell team member will be assigned to you and chiming in when needed. You can get in touch with a personal manager at your earliest convenience via a phone call or email. Additionally, you can request a call back at MY V-Tell Business or schedule an appointment at the prospective client's office.",
                6: "We provide our partners with the latest Point-of-Sale and advertising materials.",
                7: `1. A partner gets a commission of 10% of a monthly subscription fee and 10% of a monthly charge for additional phone numbers of Multi Numbers* service for every new Subscriber signed up. (Excluding VAT and personal discounts provided to a Subscriber). A Partner is compensated monthly during Subscriber\'s lifetime with V-Tell Services, given that Subscriber is paying in full and on time (100% Subscription fee should be charged monthly)
                2. Subscriber is considered active once he or she has signed a Contract Agreement, and has paid both monthly and Multiple Service fees.
                3. If the Subscriber changes Plan initially chosen, the Partner’s compensation will be calculated based on the new Plan.
                4. Partner’s compensation payment for previously signed Subscriber shall cease upon the termination of Subscriber's Contract Agreement or if the (Partner has not signed up any new Subscriber(s) for 3 (three) consecutive months.
                5. Once, after the period specified in paragraph 4, the Partner starts signing up Subscribers, then his or her compensation is calculated from newly signed Subscribers (excluding previously attracted Subscribers).`
            }
        }
    },
    methods: {
        openDesc(num) {
            this.contentIndex = num;
            this.descOpen = true;
        }
    },
    mounted () {
        // window.scrollTo(0, 0);
    }
}
</script>
<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';
@import '../scss/_utilities.scss';
@import '../scss/_page.scss';

.partner-bottom {
    color: white;

    &__title {
        text-transform: uppercase;
        font-size: 20px;
        margin-bottom: 2rem;
    }

    &__list {
        & ul {
            text-align: left;
            margin-bottom: 2rem;

            & li {
                list-style: disc;
                margin-bottom: 6px;
                display: inline-block;
                width: 50%;
                vertical-align: top;
                font-size: 16px;

                @media(max-width: 668px) {
                    display: block;
                    margin: .5rem auto;
                }
            }
        }
    }

    &__buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;

        &  div {
            width: 49%;
        }
        
    }
}

.partner-desc {
    background: #52524f;
    margin-bottom: 2rem;
    padding: 40px 60px;

    &__active {
        margin-left: 90%;
        display: inline-block;
        & img {
            cursor: pointer;
            transform: rotateX(45deg);
            width: 2.2rem;
            text-align: right;
            
            &:hover {
                filter: opacity(50%);
            }
        }
    }

    &__content {
        white-space: pre-line;
        margin-top: .7rem;
        font-size: 16px;
        line-height: 26px;
        color: $vwhite2;
        text-align: left;
    }
}   

.partner-boxes {
    display: flex;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 12px;
    line-height: 20px;
    text-transform: uppercase;

    @media(max-width: 895px) {
        margin: 0 1rem;
    }

    &__box {
        background: #52524f;
        color: white;
        flex: 0 0 24%;
        padding: 1rem 0;
        margin-bottom: 1rem;
        align-self: stretch;
        background-repeat: no-repeat;
        background-position-y: 20%;
        background-position-x: center;
        transform: scale(1);
        min-width: 180px;
        cursor: pointer;
        transition: all .4s;

        @media(max-width: 768px) {
            flex: 0 0 100%;
        }

        &--desc {
            display: inline-block;
            margin-top: 85%;

            @media(max-width: 768px) {
                margin-top: 25%;
            }

            @media(max-width: 580px) {
                margin-top: 35%;
            }
        }

        &--1 {
            background-image: url('../assets/pages/partner/partner_1.png');

            &:hover {
                background-image: url('../assets/pages/partner/partner_1-active.png');
                transform: scale(1.04);
            }   
        }

        &--2 {
            background-image: url('../assets/pages/partner/partner_2.png');

             &:hover {
                background-image: url('../assets/pages/partner/partner_2-active.png');
                transform: scale(1.04);
            }   
        }

        &--3 {
            background-image: url('../assets/pages/partner/partner_3.png');

             &:hover {
                background-image: url('../assets/pages/partner/partner_3-active.png');
                transform: scale(1.04);
            }   
        }

        &--4 {
            background-image: url('../assets/pages/partner/partner_4.png');

             &:hover {
                background-image: url('../assets/pages/partner/partner_4-active.png');
                transform: scale(1.04);
            }   

        }

        &--5 {
            background-image: url('../assets/pages/partner/partner_5.png');

            &:hover {
                background-image: url('../assets/pages/partner/partner_5-active.png');
                transform: scale(1.04);
            }   
        }

        &--6 {
            background-image: url('../assets/pages/partner/partner_6.png');

            &:hover {
                background-image: url('../assets/pages/partner/partner_6-active.png');
                transform: scale(1.04);
            }   
        }

        &--7 {
            background-image: url('../assets/pages/partner/partner_7.png');
            flex: 0 0 49%;
            max-height: 280px;

            @media(max-width: 768px) {
                flex: 0 0 100%;
            }

            &:hover {
                background-image: url('../assets/pages/partner/partner_7-active.png');
                transform: scale(1.04);
            }   

            & .adjust {
                display: inline-block;
                margin-top: 42.5%;
                
                @media(max-width: 768px) {
                    margin-top: 25%;
                }
            }
        }
    }
}

.partnership {
  &__img {
    width: 100%;
    max-width: 960px;
  }
  
  &__desc {
      background: rgba(252, 252, 252, 0.25);
      padding: 56px;
      margin: 28px 0;
      box-shadow: 0 0 6em rgba(31, 31, 31, 0.25) inset;

      & p {
        font-size: 17px;
        line-height: 26px;
        margin-bottom: 1rem;

        &.red {
            color: $red;
        }
      }
    }

    &__btn {
        cursor: pointer;
        width: 100%;
        border: 1px solid transparent;
        color: white;
        background: $red;
        padding: 20px 0;
        font-size: 20px;
        transition: all .4s;

        &:hover {
            background: white;
            color: $red;
        }
    }
}

.calc {
    &__header {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        line-height: 20px;
        color: white;
        text-align: left;

        &--1 {
            width: 26%;
        }

        &--2 {
            width: 30%;
        }

        &--3 {
            width: 25%;
        }

        &--4 {
            width: 19%;
        }

        &--svg {
            margin: 0 .5rem;
        }
    }
    
    &__row {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        color: white;
        margin-bottom: 2rem;

        @media(max-width: 842px) {
            flex-direction: column;
        }

        &--input {
            margin: 0 1rem;
            border-radius: 0;
            border: 2px #ccc solid;
            background: transparent;
            padding: 10px;
            padding-left: 40px;
            color: white;
            margin: 0;

        }

        &--end {
            justify-content: flex-end;
            padding-right: 5.8rem;

            &-curr {
                padding-right: 8.4rem;
            }
        }
    }

    &__col {
        display: flex;
        flex-direction: column;

        & > div {
            align-items: center;
            max-width: 30%;
        }

        & input[type=text] {
            max-width: 178px;
            border-radius: 0;
            border: 2px #ccc solid;
            background: transparent;
            padding: 10px;
            padding-left: 40px;
            font-size: 24px;
            color: white;
            margin: 0;
        }
    }
}

</style>
