<template>
  <div class="footer">
      <div class="container">
          <button class="btn__primary mt-1 mb-1">Become customer</button>
          <div class="social">
              <div class="social__left">
                  <img class="social-icon social-icon__active" src="../assets/SVG/footer/footer1.svg" alt="phone numbers icon">
                  <img class="social-icon" src="../assets/SVG/footer/footer2.svg" alt="mail icon">
                  <img class="social-icon" src="../assets/SVG/footer/footer3.svg" alt="location icon">
              </div>
              <div class="social__middle">
                  <img class="social-icon" src="../assets/SVG/footer/footerFB.svg" alt="facebook icon">
                  <img class="social-icon" src="../assets/SVG/footer/footerIG.svg" alt="instagram icon">
                  <img class="social-icon" src="../assets/SVG/footer/footerLI.svg" alt="linkedin icon">
                  <img class="social-icon" src="../assets/SVG/footer/footerTWIT.svg" alt="twitter icon">
                  <img class="social-icon" src="../assets/SVG/footer/footerTELEGRAM.svg" alt="telegram icon">
                  <img class="social-icon" src="../assets/SVG/footer/footerYT.svg" alt="youtube icon">
              </div>
              <div class="social__right">
                  <img class="social-icon" src="../assets/SVG/footer/headphones.svg" alt="phone numbers icon">
                  <img class="social-icon" src="../assets/SVG/footer/footerMSG.svg" alt="mail icon">
              </div>
          </div>
          <div class="footer__content mt-1">
              <div class="footer__content--entry">
                <div class="city">Hong Kong</div>
                <div class="number">+ 852 (57) 04-4299</div>
              </div>
              <div class="footer__content--entry">
                <div class="city">Europe</div>
                <div class="number">+31 (85) 208-5874 </div>
              </div>
              <div class="footer__content--entry">
                <div class="city">USA</div>
                <div class="number">+1 (866) 503-0729</div>
              </div>
              <div class="footer__content--entry">
                <div class="city">UAE</div>
                <div class="number">+971 (50) 601-6016</div>
              </div>
              <div class="footer__content--entry">
                <div class="city">Switzerland</div>
                <div class="number">+41 (43) 550-7169</div>
              </div>
          </div>
          <div class="footer__copyright">
              <div class="footer__copyright--top">
                  &copy;&nbsp;2020 Globex Telecom Group Limited: V-Tell Group of Companies
              </div>
              <div class="footer__copyright--bottom">
                    &reg;&nbsp;All rights reserved.  
              </div>
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
@import '../scss/_utilities.scss';

.footer-active {
    color: $red;
}
.footer {
    background-image: url("../assets/img/footer.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    overflow: hidden;
    border: 1px solid red;
    
    min-height: 40rem;
    display: flex;
    justify-content: center;

    @media(max-width: 906px) {
        margin: 0 1rem;
    }

    &__content {
        text-align: left;
        color: white;

        @media(max-width: 960px) {
            margin: 0 1rem;
        }

        &--entry {
            margin: 1rem 0;

            & > * {
                margin: .3rem 0;
            }
        }
    }

    &__copyright {
        position: relative;
        top: calc(100% / 17);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

.city {
    font-weight: 700;
    font-style: italic;
}

.social {
    display: flex;
    border: 1px solid  red;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    max-width: 960px;
    // margin: 0 auto;

    &-icon__active {
        color: $red;
    }

    &__left {
        width: 30%;
        text-align: left;

        & .social-icon {
            width: 23%;
        }
    }

    &__middle {
        width: 40%;
        text-align: center;
        display: flex;
        justify-content: space-evenly;

        & .social-icon {
            width: 8%;
        }
    }

    &__right {
        width: 30%;
        text-align: right;

        & .social-icon {
            width: 23%;
        }
    }
}






</style>