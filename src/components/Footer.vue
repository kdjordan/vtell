<template>
<div>
  <div v-if="windowWidth > 768" class="footer">
      <div class="container footer__container">
          <button class="btn__primary mt-1 mb-1">Become customer</button>
          <div class="social">
              <div class="social__left">
                  <img class="icon social-icon social-icon__active" src="../assets/SVG/footer/footer1.svg" alt="phone numbers icon">
                  <img class="icon social-icon" src="../assets/SVG/footer/footer2.svg" alt="mail icon">
                  <img class="icon social-icon" src="../assets/SVG/footer/footer3.svg" alt="location icon">
              </div>
              <div class="social__middle">
                  <img class="icon social-icon" src="../assets/SVG/footer/footerFB.svg" alt="facebook icon">
                  <img class="icon social-icon" src="../assets/SVG/footer/footerIG.svg" alt="instagram icon">
                  <img class="icon social-icon" src="../assets/SVG/footer/footerLI.svg" alt="linkedin icon">
                  <img class="icon social-icon" src="../assets/SVG/footer/footerTWIT.svg" alt="twitter icon">
                  <img class="icon social-icon" src="../assets/SVG/footer/footerTELEGRAM.svg" alt="telegram icon">
                  <img class="icon social-icon" src="../assets/SVG/footer/footerYT.svg" alt="youtube icon">
              </div>
              <div class="social__right">
                  <img class="icon social-icon" src="../assets/SVG/footer/headphones.svg" alt="phone numbers icon">
                  <img class="icon social-icon" src="../assets/SVG/footer/footerMSG.svg" alt="mail icon">
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
  <div v-else class="footer-sm">
        <button class="btn__primary mt-1 mb-1">Become customer</button>
        <div class="social__top mb-1">
            <img class="icon social-icon social-icon__active" src="../assets/SVG/footer/footer1.svg" alt="phone numbers icon">
            <img class="icon social-icon" src="../assets/SVG/footer/footer2.svg" alt="mail icon">
            <img class="icon social-icon" src="../assets/SVG/footer/footer3.svg" alt="location icon">
        </div>
        <div class="footer__content mt-1">
            <div class="footer__content--entry">
            <div class="city"><strong>Hong Kong</strong></div>
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
        <div class="social__middle">
            <img class="icon social-icon" src="../assets/SVG/footer/headphones.svg" alt="phone numbers icon">
            <img class="icon social-icon" src="../assets/SVG/footer/footerMSG.svg" alt="mail icon">
        </div>
        <div class="footer__copyright">
            <div class="footer__copyright--top">
                &copy;&nbsp;2020 Globex Telecom Group Limited: V-Tell Group of Companies
            </div>
            <div class="footer__copyright--bottom">
                &reg;&nbsp;All rights reserved.  
            </div>
        </div>
        <div class="social__bottom">
            <img class="icon social-icon" src="../assets/SVG/footer/footerFB.svg" alt="facebook icon">
            <img class="icon social-icon" src="../assets/SVG/footer/footerIG.svg" alt="instagram icon">
            <img class="icon social-icon" src="../assets/SVG/footer/footerLI.svg" alt="linkedin icon">
            <img class="icon social-icon" src="../assets/SVG/footer/footerTWIT.svg" alt="twitter icon">
            <img class="icon social-icon" src="../assets/SVG/footer/footerTELEGRAM.svg" alt="telegram icon">
            <img class="icon social-icon" src="../assets/SVG/footer/footerYT.svg" alt="youtube icon">
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            windowWidth: 0
        }
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        }
    },
     created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize()
      this.startSlider()
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
      this.sliderTimer = null
    }

}
</script>

<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';
@import '../scss/_utilities.scss';

.footer-active {
    color: $red;
}

.icon {
    cursor: pointer;
    &:hover {
        filter: opacity(50%);
    }
}

.footer {
    background-image: url("../assets/img/footer.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    overflow: hidden;
    // border: 1px solid red;
    
    min-height: 40rem;
    display: flex;
    justify-content: center;


    &__container {
        @media(max-width: 900px) {
            margin: 0 4rem;
        }
        
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
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    max-width: 960px;

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


.footer-sm {
    background-image: url("../assets/img/footer.jpg");
    background-size: cover;
    background-position: 50% 0%;
    width: 100%;
    overflow: hidden;
    min-height: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;


    & .social{
        &__top {
            display: flex;
            justify-content: center;
            align-items: center;

            & .social-icon {
                width: 12%;
                margin: 0 .7rem;
            }
        }
        &__middle {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 2.75rem;

            & .social-icon {
                width: 20%;
                margin: 0 .7rem;
            }
        }
        &__bottom {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: 60%;
        }
    }

    & .footer__content {
        width: 36%;

        &--entry {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        & .city {
            margin-right: 1rem;
            font-weight: bold;
        }
    }

    & .footer__copyright {
        margin-bottom: 1rem;
    }
}



</style>