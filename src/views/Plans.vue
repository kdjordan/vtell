<template>
<div class="page">
    <div class="container">
        <div class="crumbs">
            <img class="crumbs__img" src="../assets/back-button.png" alt="">
          <div class="crumbs__path">/&nbsp;<a href="/">HOME</a>&nbsp;/&nbsp;Plans</div>
        </div>
        <div class="page-divider mb-3">  
          <img class="page-divider__cube" src="../assets/SVG/cube.svg" alt="">
          <div class="page-divider__title">Plans</div>
        </div> 
        <div class="about mb-3">
          <div class="container">
            <p>V-Tell is a rapidly growing telecommunication company acting as an International Mobile Operator, devoted to provide services and innovative technology to customers across the globe. One V-Tell SIM card allows the subscriber to get unlimited amount of phone numbers with no roaming internet and mobile services.
            </p>
            <button class="btn-about mt-2 mb-2"  @click.prevent="toggleButton()" >{{buttonMssg}}&nbsp;&nbsp;&nbsp;&nbsp;<span style="padding-bottom: 8px;">{{buttonMssgExt}}</span></button>
              <div v-if="buttonActive">
               <div class="about__title">V-TELL PRICES, PACKAGES, BUNDLES, DEALS</div>
                <p class="mb-1">There are four Package Deals (the amount of data and minutes differs).</p>  
                <p class="mb-1">V-1, V-2, V-3, V-Max offered to our Subscribers. Each of them includes the following services:</p> 
                <ul class="plans__ul">
                  <li class="plans__li">Unlimited Domestic Talk and Data.</li>
                  <li class="plans__li">Unlimited Data and texting in more 110+ countries*</li>
                  <li class="plans__li">Free two lines with foreign phone numbers included</li>
                  <li class="plans__li">Ability / Capacity to add any amount of foreign phone numbers.</li>
                </ul>
                <div class="about__title">HOW TO CHOOSE THE PLAN THAT SUITS YOU?</div>
                <p class="mb-1">You can opt your plan by estimating how much data and minutes you use monthly.</p> 
            </div>
        </div>
      </div>
    </div>
</div>

</template>
<script>
export default {
    data() {
        return {
            buttonMssg: 'SHOW MORE',
            buttonMssgExt: '...',
            buttonActive: false
        }
    },
    methods: {
        toggleButton() {
            if (this.buttonActive) {
                this.buttonActive = false
                this.buttonMssg = "SHOW MORE"
                this.buttonMssgExt = "..."
            } else {
                this.buttonActive = true
                 this.buttonMssg = "HIDE"
                this.buttonMssgExt = "X"
            }
        }
    }

}
</script>
<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';
@import '../scss/_divider.scss';
@import '../scss/_utilities.scss';
@import '../scss/_page.scss';

.plans{
  &__ul {
    color: $white;
    text-align: left;
    margin-left: 2rem;
  }

  &__li {
    margin: 1rem 0;
  }
}

.btn-about {
    cursor: pointer;
    color: rgba(242, 242, 242, 0.75);
    background: transparent;
    border: 1px solid $grey;
    border-radius: 3px;
    padding: 10px 15px;
    min-width: 150px;
    transition: all .4s ease;

    &:hover {
        background: $red;
        color: white;
        border: 1px solid $red;
    }
}

.about {
    display: flex;
    font-size: 16px;
    line-height: 24px;
    justify-content: center;

    @media(max-width: 900px) {
        margin: 0 1.5rem;
    }


    &__title {
        margin: 1rem 0;
        color: rgba(242, 242, 242, .5);
        text-align: left;
        font-size: 18px;
    }
}

p {
    color: rgba(252, 252, 252, 0.8);
    text-align: left;
}



</style>
