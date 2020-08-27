<template>
<div class="about-page">
  <div class="container">
    <div class="crumbs">
        <img class="crumbs__img" src="../assets/back-button.png" alt="">
      <div class="crumbs__path">/&nbsp;<a href="/">HOME</a>&nbsp;/&nbsp;ABOUT</div>
    </div>
    <div class="page-divider mb-3">  
      <img class="page-divider__cube" src="../assets/SVG/cube.svg" alt="">
      <div class="page-divider__title">About</div>
    </div> 
    <img class="about-page__img mb-1"  src="../assets/pgabout/about-img.jpg" alt="">
    <div class="about-page__desc">
      <p>V-Tell is an International Mobile Operator providing mobile services to customers all around the world*. Through consistent expansion, V-Tell covers an ever-increasing number of locations, using the latest technology and equipment to support its customer offerings.</p>
      <p>V-Tell Subscribers can forget about multiple devices and multiple SIM cards. A single V-Tell SIM card provides V-Tell customers with the ability to have an almost unlimited number of permanently active personal phone numbers from any country on one device.</p>
      <p>V-Tell Services makes communication limitless by dissolving borders between countries and continents: the roaming-free network allows V-Tell customers to forget about huge roaming rates, limited communication and unpredictable bills. V-Tell provides customers with mobile services and fixed rates around the world*.</p>
      <p>V-Tell Networks combine high-speed communication channels and switching systems in one high-tech solution based on a unique multi-IMSI platform controlled by a state-of-the-art global billing system. This innovative technology provides V-Tell customers with a global “home“ network, allowing them to access voice, Internet and SMS services in any part of the world*.</p>
      <p>V-Tell Customer Care ensures that V-Tell customer partners, relatives and friends all benefit. A call to another V-Tell Subscriber from anywhere in the world* is charged according to the caller’s local rate.</p>
      <p>V-Tell Team members have extensive telecommunications experience. Many of them have worked with major international telecoms companies or developed telecoms products and services, which are now used as industry standards.</p>
    </div>
    <div class="about-page__press mb-1">
      <div class="about-page__press--title">Press-Centre</div>
      <div class="about-page__press--cube">
        <img src="../assets/pgabout/cube-tab.png" alt="">
      </div>
    </div>
    <div class="about-page__companies mb-2">
       Group of companies V-Tell: Globex Telecom Group Limited (Hong Kong), SKYTELL BV (Holland), GLOTELL US, CORP (USA), SKYTELL FZ, LLC. (UAE)
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

.page-divider {
    background: linear-gradient(90deg, rgba(25,25,23,0.2) 0%, rgba(51,51,49,0.2) 12%, rgba(72,72,70,0.2) 25%, rgba(90,90,90,0.2) 37%, rgba(108,108,108,0.2) 50%, rgba(92,92,92,0.2) 62%, rgba(72,72,70,0.2) 75%, rgba(52,52,50,0.2) 87%, rgba(27,27,25,0.2) 100%);
    min-height: 62px;
    height: auto;
    padding-top: 20px;
    padding-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &__cube {
      height: 50px;
    }

    &__title {
      text-transform: uppercase;
      font-size: 25px;
      margin-left: 5%;
      color: white;
    }
}

.about-page {
  margin-top: 8rem;

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

  &__press {
    display: flex;
    justify-content: space-between;
    background: #6e6e6e;
    padding: 15px;
    cursor: pointer;
    


    &:hover &--title, &:hover &--cube {
      filter: opacity(50%);
    }

    &--title {
      color: $white;
      font-size: 25px;
      line-height: 35px;
      transition: all .4s;
    }

    &--cube {
      transition: all .4s;
    }
  }

  &__companies {
    color: $white;
    font-size: 13px;
  }
}

.crumbs {
  display: flex;
  align-items: center;
  color: $grey;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  margin-bottom: 1rem;

  & a {
    color: $grey;
    transition: all .4s;

    &:hover {
      color: $white;
      text-decoration: none;
    }
  }

  &__img {
    width: 1rem;
  }

  &__path {
    margin-left: 1rem;
  }
}
</style>
