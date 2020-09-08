<template>
<div class="page">
    <div class="container">
        <PageCrumbs path="plans / v2" />
        <PageDivider title="PLan V-2" />
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
                    <div class="inner__text2"><font-awesome-icon icon="dollar-sign" />160</div>
                </div>
                <div class="inner inner__row2">
                    <div class="inner__text1">included in package</div>
                    <div class="flex-row">
                        <img @click.prevent="selectIndex(2)" src="../assets/pages/plans/plans-globe.jpeg" alt="">
                        <div @click.prevent="selectIndex(2)" class="inner__text1">worldwide</div>
                    </div>
                </div>
                <div class="flex-row flex-row__short">
                    <div class="inner__text1--small">VOICE</div>
                    <div class="inner__text1--small">700 min.</div>
                </div>
                <div class="flex-row flex-row__short">
                    <div class="inner__text1--small">SMS</div>
                    <div class="inner__text1--small">UNLIMITED</div>
                </div>
                <div class="flex-row flex-row__short">
                    <div class="inner__text1--small">DATA</div>
                    <div class="inner__text1--small">10 GB</div>
                </div>
                <div class="flex-row flex-row__short">
                    <div class="inner__text1--small">TELEPHONE NUMBER</div>
                    <div class="inner__text1--small">2 unit.</div>
                </div>
                <div class="flex-row flex-row__short">
                    <div @click.prevent="toggleActive = !toggleActive " class="inner__text1 mt-3"><span>MORE ABOUT TARIFF</span></div>
                </div>
                <div v-if="toggleActive" class="toggle">
                    <p>Monthly subscription fee is €140 / $160 when AutoPay option is activated, or €146 / $167 when AutoPay option is not activated. Subscription fee will be withdrawn monthly from your account on 1st calendar day of each month by one transaction in full (100%).</p>
                    <p>To join V-TELL network or change an actual Tariff, funds equal to the amount of days left in the month should be added to Subscriber’s account, and a fee per day should be calculated proportionally. An amount of services included into the tariff (plan) will be provided proportionally to the number of calendar days left in the month of subscription or Tariff change. If subscriber exceeds the amount of services included into the Tariff earlier than а month ends, service fees will be charged based on the Tariff (link to the Tariff details). In case an access to mobile services is temporarily blocked at the moment of a monthly fee withdrawal, the fee will be charged after an unlocking.</p>
                    <p>When your account balance approaches a switch-off-level zero, a notification will be send to inform you about the account balance and a necessity to add funds. When the funds on account are equal to zero or lower, no tariffed services will be available, except emergency and V-Tell Customer care calls. To avoid the switch-off we recommend you to activate the AutoPay option (link) and stay always connected.</p>
                    <p>Full access to V-Tell services will be restored after adding funds to make an account balance higher than the switch-off-level. You can add funds on our web-site https://pay.v-tell.com/ or using V-Tell App, which is available in Apple Store and Google Play. After adding funds and restoring an assess to the services, full monthly payment for current month will be withdrawn in accordance with conditions of your actual Tariff.</p>
                    <p>Tariffs include roam-free network within 45 Home Zone countries and two constantly active phone numbers of selected countries. Calls to / from local phone numbers of the selected countries are charged at local rates for the recipient.</p>
                    <p>Monthly payment for an extra phone number, that are not included into the Tariff, is €9,95 / $12 per each additional phone number. In case subscriber’s account balance is not sufficient, the number(s) will be out of service until the moment of adding funds to the account balance.</p>
                    <p>In case the subscriber does not use the services within 30 (thirty) calendar days and no funds sufficient to cover services costs added to their account within that period, additional phone numbers, that are included and not included into the monthly payment, will be blocked, wherein subscriber should pay €9,95 / $12 for an additional phone number. If Subscriber does not use the Services for 90 calendar days and no funds sufficient for monthly fee payment added to the account within that period, subscriber’s account might be voided. To order or refuse extra phone numbers, please contact our Customer care service</p>
                    <p>US +1 (866) 503-0729 EU +31 (85) 208-5874 Or 90-90 using V-Tell phone number.</p>
                    <p>Voice calls are tariffed per minute. Calls with duration less than 3 (three) seconds are not tariffed on the territory of Russian Federation. Incoming calls are free of charge in Moscow region and Subscriber does not spend the minutes included into the Tariff package receiving incoming calls in Moscow region. Cost of Call forwarding is equal to the cost of outgoing call towards the direction of forwarding and rated in compliance with Tarrifs’ conditions.</p>
                    <p>If call forwarding for tariff plan «V-ХХХ» is set up to Russian mobile operators and Russian public telephone networks, firstly the included into the Tariff minutes will be spent. SMS that consist of more than 70 (seventy) symbols in Cyrilic alphabet or 160 (one hundred and sixty) symbols in Latin alphabet will be divided into several parts. Every part will be tariffed as separate SMS.</p>
                    <p>Fax sending or acceptance are rated at voice calls tariffs in accordance with Tariffs conditions. An amount of data during the session is rounded up - with an accuracy of 150 (one hundred and fifty) KB.</p>
                    <p>The Service can not be a subject of trade, can not be resold or used with purposes of fraud. When using data functions, you may experience a temporarily speed decrease during the network overload or network interference. Connection speed can be reduced, as well as connection may be terminated or limited due to misuse or illegal application.</p>
                    <p>Tariff plan conditions may be reconsidered or changed on the basis of preliminary notification announced not less than 10 days before on the web-site https://www.v-tell.com/</p>
                </div>
                <div class="flex-row mt-2">
                    <img src="../assets/pages/plans/plan-phone.jpeg" alt="">
                    <div class="inner__text1--small">YOU CAN CHOOSE YOUR NEW V-TELL PHONE NUMBER OR TRANSFER YOUR EXISTING PHONE NUMBER TO V-TELL.</div>
                </div>
                    <button class="plan-page__btn plan-page__btn--choose">CHOOSE</button>
            </div>

            <div v-if="index == 1" class="plan-page__inner-content">
                <PlanComplementary />
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
import PlanComplementary from '@/components/PlanComplementary';

export default {
    components: {PageDivider, PageCrumbs, PlanCountries, PlanCalculator, PlanComplementary},
    data() {
        return {
            index: 0,
            toggleActive: false
        }
    },
    methods: {
        selectIndex(index) {
            this.index = index;
        }
    },
    mounted () {
        window.scrollTo(0, 0);
    }
}
</script>

