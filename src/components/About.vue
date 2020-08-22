<template>
  <div>
      <div class="divider mb-3">
          <div class="divider__container">
            <img class="divider__cube" src="../assets/SVG/cube.svg" alt="">
            <div class="divider__title">ABOUT US</div>
          </div>
      </div> 
      <div class="about">
        <div class="container">
            <p class="about mt-4">V-Tell is a rapidly growing Telecommunication company acting as an International Mobile Operator, devoted to provide services and innovative technology to customers across the globe.
            </p>
            <div class="about__title">WHY V-TELL ?</div>
            <p>Having its own technological infrastructure, including HLR, GMSC and GGSN; its partnership by contract with the largest GMNO; its license agreement with the GSM Association; and its membership with the ITU – V-Tell has created an ultimate, unlimited communication system by erasing borders among countries via roam-free network allowing customers to access voice, SMS and worldwide internet service.
            </p>
            <p class="mb-4">Having a solo V-Tell SIM card, the Subscriber has unlimited quantity of personal phone numbers from any country, that are permanently active on a single device. Subscribers may also port their existing personal phone numbers from any mobile operator and country to their V-Tell SIM Card. By providing a local phone number to partners and customers, V-Tell Subscribers may run their businesses from any part of the world. The called party always receives a V-Tell Subscribers’ calls from his or her local mobile phone number, no matter what country the V-Tell Subscriber is currently located in.
            </p>
            <button class="btn-about">SHOW MORE&nbsp;&nbsp;&nbsp;&nbsp;<span style="padding-bottom: 8px;">&#8230;</span></button>
        </div>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';
@import '../scss/_divider.scss';

.btn-about {
    color: rgba(242, 242, 242, 0.75);
    background: transparent;
    border: 1px solid $grey;
    padding: 10px 15px;
}

.about {
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;

    &__title {
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