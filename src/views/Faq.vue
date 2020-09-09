<template>
<div class="page">
    <div class="container">
        <PageCrumbs path="FAQ" />
        <PageDivider title="FAQ" />
        <img class="faq-page__img mb-1"  src="../assets/pages/FAQ_895px.jpg" alt="">
        <div class="faq-page__font">In this section you will find answers to the most frequent questions asked by V-Tell Subscribers.</div>
        <div class="faq-page__inner-box mb-4">
            <div class="faq-page__inner-box--top">
                <div class="faq-page__font faq-page__font--title">FIND ANSWER</div>
                <div class="faq-page__inner-box--top row">
                    <input class="faq-page-input" type="text" name="" id="" placeholder="Keyword">
                    <button class="faq-page-btn">SEARCH</button>
                    <div class="faq-page__font faq-page__font--entry-title">&gt;&nbsp;&nbsp;Ask A Question</div>
                </div>
            </div>
            <div class="faq-page__inner-box--section">
                <div class="faq-page__font faq-page__font--title">ABOUT V-TELL</div>
                <div class="mt-2 entry" :class="{entryActive: activeEntry[1]}" @click="makeEntryActive(1)">
                   <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[1]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[1]}">Tell me about V-Tell.</div>
                   </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[1]}">
                        V-Tell is a Global Mobile Network Operator, which services Subscribers around the world. A single V-Tell SIM card allows You to have unlimited amount of permanantly active phone numbers from over 45 countries on one device.
                    </div>
                    
                </div>
                <div class="entry" :class="{entryActive: activeEntry[2]}" @click="makeEntryActive(2)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[2]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[2]}">View V-Tell Wireless Coverage Area.</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[2]}">
                        V-Tell is a Global Mobile Network Operator, which services Subscribers around the world. A single V-Tell SIM card allows You to have unlimited amount of permanantly active phone numbers from over 45 countries on one device.
                    </div>
                </div>
                <div class="mb-2 entry" :class="{entryActive: activeEntry[3]}" @click="makeEntryActive(3)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[3]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[3]}">What makes you different from other Mobile Operators?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[3]}">
                        V-Tell is a Global Mobile Network Operator, which services Subscribers around the world. A single V-Tell SIM card allows You to have unlimited amount of permanantly active phone numbers from over 45 countries on one device.
                    </div>
                </div>
            </div>

            <div class="faq-page__inner-box--section no-top-border pb-2">
                <div class="faq-page__font faq-page__font--title">BECOME A V-TELL SUBSCRIBER</div>
                <div class="mt-2 entry" :class="{entryActive: activeEntry[4]}" @click="makeEntryActive(4)">
                   <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[4]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[4]}">How do I become a V-Tell Subscriber?</div>
               </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[4]}">
                        To become a V-Tell Subscriber you can visit us at www.v-tell.com, go on our App or give us a call at US: +1(866)5030729; EU: +31 (85) 208-5874.
                    </div>
                    
                </div>
                <div class="entry" :class="{entryActive: activeEntry[5]}" @click="makeEntryActive(5)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[5]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[5]}">Do I have to sign a year contract with V-Tell?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[5]}">
                        No, it is not required to sign a year contract with us. However, we offer discounts for year contracts.
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[6]}" @click="makeEntryActive(6)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[6]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[6]}">What documents do I need to become a V-Tell Subscriber?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[6]}">
                        In order to become a V-tell Subscriber you need to provide a Photo ID.
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[7]}" @click="makeEntryActive(7)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[7]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[7]}">Can I choose a phone number?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[7]}">
                        After choosing a tariff plan that suits you the most, please pick a phone number from the ones that we offer. If you want to have any specific digit combinations this option is available for extra charge. Please contact our Customer Service Department if you have any questions.
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[8]}" @click="makeEntryActive(8)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[8]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[8]}">What documents do I need to become a V-Tell Subscriber?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[8]}">
                        In order to become a V-tell Subscriber you need to provide a Photo ID.
                    </div>
                </div>
            </div>

            <div class="faq-page__inner-box--section no-top-border pb-2">
                <div class="faq-page__font faq-page__font--title">SIM CARD AND PHONE NUMBERS</div>
                <div class="mt-2 entry" :class="{entryActive: activeEntry[9]}" @click="makeEntryActive(9)">
                   <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[9]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[9]}">I don’t understand the concept of having several phone numbers on one sim card.</div>
               </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[9]}">
                        Multi Numbers Service allows you to have unlimited amount of active phone numbers. Your calling party gets in touch with you at local rates of his home country which is your additional number that is added to your SIM-Card.<br>
                        A tariff plan includes one free foreign number.
                    </div>
                    
                </div>
                <div class="entry" :class="{entryActive: activeEntry[10]}" @click="makeEntryActive(10)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[10]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[10]}">How do I block my lost SIM-card?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[10]}">
                        Your SIM card can be blocked easily. Call our Customer Care Service line (US) +1 (866) 503-0729 or (EU) +31 (85) 208-5874.
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[11]}" @click="makeEntryActive(11)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[11]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[11]}">Can I block one of my phone numbers that I don’t use at the moment?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[11]}">
                        In order to block one of your phone lines call our Customer Service at US: +1(866)5030729; EU: +31(85)2085874.
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[12]}" @click="makeEntryActive(12)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[12]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[12]}">How can I get an additional phone number?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[12]}">
                        Adding a new phone number is easy. Go to your Account via www.v-tell.com or our App, call us at +1 (866) 503-0729 (USA) / +31 (85) 208-5874 (EU) or email us at service@v-tell.com
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[13]}" @click="makeEntryActive(13)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[13]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[13]}">What number will be displayed if I call from Germany to England, given that I don’t have any number from those countries?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[13]}">
                        If you do not have the number of the country which you are calling to, your main number will be displayed on the phone screen.
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[14]}" @click="makeEntryActive(14)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[14]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[14]}">Can I port my phone number to V-Tell?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[14]}">
                        You can switch to V-Tell easily. 
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[15]}" @click="makeEntryActive(15)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[15]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[15]}">What does it mean to have several phone numbers on one sim?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[15]}">
                        Your calling party sees a local phone number you choose.
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[16]}" @click="makeEntryActive(16)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[16]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[16]}">How long does it take to port my number?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[16]}">
                        Portation usually takes 10 calendar days.
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[17]}" @click="makeEntryActive(17)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[17]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[17]}">Could SIM card be delivered to NY?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[17]}">
                        We provide delivery services of our SIM cards worldwide.
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[18]}" @click="makeEntryActive(18)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[18]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title">How much is SIM card delivery?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[18]}">
                        Delivery service for our Subscribers is free.
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[19]}" @click="makeEntryActive(19)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[19]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[19]}">How will the foreign number be displayed on the screen once I call abroad? Will I have to dial it manually? Will I be able to save this number in my contacts?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[19]}">
                        When a phone call is made, the number is automatically selected to be displayed on the partner’s phone screen, you do not need to choose anything manually. The number will be permanent, you can give it as your personal contact number.
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[20]}" @click="makeEntryActive(20)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[20]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[20]}">Manage or update your PIN code on V-Tell.</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[20]}">
                        If you enter wrong PIN 3 times, you will be asked for a PUK number which is displayed on your SIM card.
                    </div>
                </div>
            </div>
            <div class="faq-page__inner-box--section no-top-border pb-2">
                <div class="faq-page__font faq-page__font--title">TARIFF PLANS</div>
                <div class="mt-2 entry" :class="{entryActive: activeEntry[21]}" @click="makeEntryActive(21)">
                   <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[21]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[21]}">Do you offer any discounts?</div>
               </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[21]}">
                        We offer group discounts when you sign up as a group (ex: partners, relatives, friends, etc., starting from the group of 5). For more information call our Customer Service at US: +1(866)5030729; EU: +31(85)2085874.
                    </div>
                    
                </div>
                <div class="entry" :class="{entryActive: activeEntry[22]}" @click="makeEntryActive(22)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[22]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[22]}">Can I change my V-Tell plan?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[22]}">
                        To change your plan just go to My V-Tell, then click on Plan Change.
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[23]}" @click="makeEntryActive(23)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[23]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[23]}">What is a Home Zone?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[23]}">
                        In order to block one of your phone lines call our Customer Service at US: +1(866)5030729; EU: +31(85)2085874.
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[24]}" @click="makeEntryActive(24)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[24]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[24]}">Can a Home Zone change?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[24]}">
                        Due to rapidly growing innovations, the telecom market is continuously evolving. V-Tell offers different packages where Home Zone differs depending on our customers' needs.
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[25]}" @click="makeEntryActive(25)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[25]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[25]}">What if I don’t need so many countries in my Home Zone?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[25]}">
                        V-Tell Home Zone is the bundle of 45 countries. HZ bundle can't be changed by a Subscriber.
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[26]}" @click="makeEntryActive(26)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[26]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[26]}">What happens if I go over my V-Tell data limit?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[26]}">
                        No matter how much data you use, your Internet service will never be interrupted. You will be notified via SMS, then you could either upgrade your plan or an international fee for each Mb used will be applied. Cost of Internet is determined by the country where you are located.
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[27]}" @click="makeEntryActive(27)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[27]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[27]}">Do you use postpay or prepay system?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[27]}">
                        We use prepaid system. Your bill is paid on the 1st of every month. You can sign up any day of the month, we will prorate your first bill.
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[28]}" @click="makeEntryActive(28)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[28]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[28]}">If V-Tell Home Zone does not cover the country, will I have the Internet and how much will it cost?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[28]}">
                        If the country is not included in our HZ, you will be charged additionally, the notification will be sent to you via sms.
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[29]}" @click="makeEntryActive(29)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[29]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[29]}">Do you offer corporate discounts?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[29]}">
                        Call our Customer Care at +7 (958) 900-9090 to find out about corporate discounts.
                    </div>
                </div>
                <div class="entry" :class="{entryActive: activeEntry[30]}" @click="makeEntryActive(30)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[30]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[30]}">How do I choose a monthly mobile plan?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[30]}">
                        In order to choose a tariff plan, please visit us at www.v-tell.com or our App., select your Home Zone and then select a plan that suits you the most. You could also call our Customer Service at US: +1(866)5030729<br>
                        EU: +31(85)2085874.
                    </div>
                </div>
            </div>

            <div class="faq-page__inner-box--section no-top-border no-bot-border pb-2">
                <div class="faq-page__font faq-page__font--title">ABOUT V-TELL</div>
                <div class="mt-2 entry" :class="{entryActive: activeEntry[31]}" @click="makeEntryActive(31)">
                   <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[31]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[31]}">What are my payment options?</div>
                   </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[31]}">
                        Your Rate Plan and optional number fees will be debited from your credit card on a monthly recurring basis. Any out-of-bundle usage will be debited from your account. You need to recharge your account before being able to use out-of-bundle services. You can Top-up (recharge) your account via your Selfcare app and the Selfcare web portal.
                    </div>
                    
                </div>
                <div class="entry" :class="{entryActive: activeEntry[32]}" @click="makeEntryActive(32)">
                    <div>
                        <div class="faqPageArrow" :class="{faqPageArrowActive: activeEntry[32]}" src="../assets/SVG/down-arrow.svg" alt=""></div>
                        <div class="faq-page__font faq-page__font--entry-title" :class="{entryFontActive: activeEntry[32]}">How can I pay for the service?</div>
                    </div>
                    <div class="hidden-entry" :class="{showEntry: activeEntry[32]}">
                        We offer a convinient Autopay option. In addition, you can pay on our website https://pay.v-tell.com or via V-Tell mobile application.
                    </div>
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
            activeEntry: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false,
                10: false,
                11: false,
                12: false,
                13: false,
                14: false,
                15: false,
                16: false,
                17: false,
                18: false,
                19: false,
                20: false,
                21: false,
                22: false,
                23: false,
                24: false,
                25: false,
                26: false,
                27: false,
                28: false,
                29: false,
                30: false,
                31: false,
                32: false
            }
        }
    },
    methods: {
        makeEntryActive(num) {
            console.log('clicked', num);
            this.activeEntry[num] = !this.activeEntry[num];
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

.ml-6 {
    margin-left: 6rem;
}

.no-top-border {
    border-top: none !important;
}

.no-bot-border {
    border-bottom: none !important;
}

.no-bot-border {
    border-bottom: none !important;
}

.hidden-entry {
    height: 0;
    opacity: 0;
    width: 80%;
    margin-left: 5.75rem;
    text-align: left;
    line-height: 27px;
    color: white;
    padding-top: 1rem;
    transition: all .4s;
}

.entry {
    width:  100%;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
    & > div {
        display: flex;
    }
    &Active {
        padding-top: 10px;
        padding-bottom: 5px;
        margin-bottom: 1rem;
        background-color: $black-background-color;
    }
}

.showEntry {
    height: auto;
    opacity: 1;
    margin-bottom: 1rem;
    transition: all .4s;
}

.faqPageArrow {
    min-width: 25px;
    height: 9px;
    margin: 0 2rem;
    background-image: url('../assets/SVG/down-arrow.svg');
    background-repeat: no-repeat;
    transition: all .4s;
    position: relative;
    top: 6px;
    &Active {
        background-image: url('../assets/SVG/up-arrow-active.svg');
    }
}
.entryFontActive {
    color: $red !important;
}

.faq-page {
    &__font {
        font-size: 20px;
        color: white;
        &--title {
            text-align: left;
            padding-top: 1rem;
            padding-left: 5.5rem;
            padding-bottom: 8px;
        }
        &--entry-title {
            cursor: pointer;
            text-align: left;
            transition: all .4s;
            &:hover {
                color: $red;
            }
        }
    }
    &__img {
        width: 100%;
        max-width: 960px;
    }
    &__inner-box {
        margin: 28px 0;
        background: rgba(252, 252, 252, 0.25);
        box-shadow: 0 0 6em rgba(31, 31, 31, 0.25) inset;
        &--top {
           & .row {
                width: 90%;
                margin: 0 auto;
                color: white;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 2rem;
           }
        }
        &--section {
            width: 100%;
            border-top: 1px solid white;
            border-bottom: 1px solid white;
            margin: 1rem 0;
        }
    }
}

.faq-page-input {
    width: 50%;
    border-radius: 77px;
    margin-right: 2rem;
    padding: 1.5rem;
    border: 1px solid white;
    background: transparent;
    &::placeholder {
        font-size: 20px;
    }
}
.faq-page-btn {
    border: 1px solid transparent;
    background: $red;
    color: white;
    padding: 1.25rem 2rem;
    font-family: inherit;
    letter-spacing: 1px;
    font-size: 20px;
}


</style>
