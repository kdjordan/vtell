<template>
<div class="page">
    <div class="container">
        <PageCrumbs path="About" />
        <PageDivider title="About" />
        <img class="about-page__img mb-1"  src="../assets/pages/about-img.jpg" alt="">
        <div class="about-page__desc">
            <p>V-Tell is an International Mobile Operator providing mobile services to customers all around the world*. Through consistent expansion, V-Tell covers an ever-increasing number of locations, using the latest technology and equipment to support its customer offerings.</p>
            <p>V-Tell Subscribers can forget about multiple devices and multiple SIM cards. A single V-Tell SIM card provides V-Tell customers with the ability to have an almost unlimited number of permanently active personal phone numbers from any country on one device.</p>
            <p>V-Tell Services makes communication limitless by dissolving borders between countries and continents: the roaming-free network allows V-Tell customers to forget about huge roaming rates, limited communication and unpredictable bills. V-Tell provides customers with mobile services and fixed rates around the world*.</p>
            <p>V-Tell Networks combine high-speed communication channels and switching systems in one high-tech solution based on a unique multi-IMSI platform controlled by a state-of-the-art global billing system. This innovative technology provides V-Tell customers with a global “home“ network, allowing them to access voice, Internet and SMS services in any part of the world*.</p>
            <p>V-Tell Customer Care ensures that V-Tell customer partners, relatives and friends all benefit. A call to another V-Tell Subscriber from anywhere in the world* is charged according to the caller’s local rate.</p>
            <p>V-Tell Team members have extensive telecommunications experience. Many of them have worked with major international telecoms companies or developed telecoms products and services, which are now used as industry standards.</p>
        </div>
        <div class="page__block mb-1" @click.prevent="gotoPressPage()">
            <div class="page__block--title">Press-Centre</div>
            <div class="page__block--cube">
            <img src="../assets/pages/cube-tab.png" alt="">
            </div>
        </div>
        <div class="about-page__companies mb-2">
            Group of companies V-Tell: Globex Telecom Group Limited (Hong Kong), SKYTELL BV (Holland), GLOTELL US, CORP (USA), SKYTELL FZ, LLC. (UAE)
        </div>
    </div>
</div>

</template>
<script>
import PageDivider from '@/components/PageDivider';
import PageCrumbs from '@/components/PageCrumbs';
export default {
    components: {PageDivider, PageCrumbs},
    methods: {
        gotoPressPage() {
            this.$router.push('/press-center');
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

.about-page {
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
        line-height: 30px;
        margin-bottom: 1rem;
      }
    }

  &__companies {
      color: white;
      font-size: 13px;
    }

}



</style>
