<template>
<div>
    <div v-if="windowWidth > 768" class="footer">
        <div class="container footer__container">
            <button class="footer__btn mt-1 mb-1">Become customer</button>
            <div class="social">
                <div class="social__left">
                    <svg @click.prevent="footerPanel = 1" class="social-icon icon"  :class="{iconActive: activePanel == 1}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" alt="phone numbers icon">
                    <path d="M22.6,6a5,5,0,0,1,1.3,2.5,4.19,4.19,0,0,1-.2,2.7h0a1.17,1.17,0,0,1-1.1.8,1.11,1.11,0,0,1-1.1-1.1,1.07,1.07,0,0,1,.2-.6h0v-.2a2.25,2.25,0,0,0-.1-1.2,2.59,2.59,0,0,0-.7-1.1,2.38,2.38,0,0,0-1.1-.6,1.65,1.65,0,0,0-1.2,0h-.2a1.42,1.42,0,0,1-.6.2,1.11,1.11,0,0,1-1.1-1.1,1.17,1.17,0,0,1,.8-1.1h0a4.94,4.94,0,0,1,2.7-.3A3.19,3.19,0,0,1,22.6,6Z" />
                    <path d="M18.7,23.11v4.1a4.44,4.44,0,0,1-4.4,4.4H6.9a4.44,4.44,0,0,1-4.4-4.4v-4H0v3.3H0v.8a6.87,6.87,0,0,0,6.8,6.8h7.4a7,7,0,0,0,6.8-6v-.9h0v-4l-2.3-.1Z" />
                    <path d="M18.7,19.71v-4a4.44,4.44,0,0,0-4.4-4.4H7a4.44,4.44,0,0,0-4.4,4.4v4H.2v-3.3h0v-.8A6.87,6.87,0,0,1,7,8.81h7.4a7,7,0,0,1,6.8,5.9v.9h0v4H18.7Z" />
                    <path d="M25.8,2.81a9.38,9.38,0,0,1,2.8,5.7,9.16,9.16,0,0,1-1.5,6.2l-.3.3h0a1,1,0,0,1-.9.4,1.11,1.11,0,0,1-1.1-1.1,1.49,1.49,0,0,1,.4-.9h0l.2-.3a7.19,7.19,0,0,0-1.1-8.9,7.45,7.45,0,0,0-4.3-2,7.81,7.81,0,0,0-4.7,1.1l-.3.2h0a1.27,1.27,0,0,1-.9.4A1.11,1.11,0,0,1,13,2.81a1.23,1.23,0,0,1,.4-.8h0l.1-.1.2-.2A9.62,9.62,0,0,1,19.8,0,9.92,9.92,0,0,1,25.8,2.81Z" />
                    </svg>
                    <svg @click.prevent="footerPanel = 2" class="social-icon icon"  :class="{iconActive: activePanel == 2}" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 34 34">
                    <path d="M26.6,16.6c-2.2,2.2-4.3,4.3-6.5,6.5c-1.8,1.8-4.7,1.8-6.5,0c-2.1-2.1-4.3-4.3-6.5-6.5c0.8-1.2,2.2-2,3.8-2c3.9,0,7.9,0,11.8,0C24.4,14.6,25.8,15.4,26.6,16.6z M11.8,24.9c2.8,2.8,7.3,2.8,10.1,0c2.5-2.5,5.2-5.2,7.7-7.7c-0.8-2.7-3.1-4.7-6-5c-0.1,0-0.2,0-0.4,0c-4.1,0-8.2,0-12.4,0c-3.2,0-6,2.2-6.9,5.1C6.6,19.8,9.2,22.3,11.8,24.9L11.8,24.9z M27.4,22.9v3.9c0,2.5-2.1,4.6-4.6,4.6c-3.9,0-7.9,0-11.8,0c-2.5,0-4.6-2.1-4.6-4.6v-3.9l-2.5-2.5v6.5c0,3.6,2.7,6.6,6.3,7.1c0.1,0,0.2,0,0.4,0c4.1,0,8.2,0,12.4,0c3.9,0,7.1-3.2,7.1-7.1v-6.5L27.4,22.9L27.4,22.9z"/>
                    </svg>
                    <svg @click.prevent="footerPanel = 3" class="social-icon icon"  :class="{iconActive: activePanel == 3}"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
                    <path class="st0" d="M24.8,22.5v-3.6c0-2.4-2-4.3-4.3-4.3h-7.2c-2.4,0-4.3,2-4.3,4.3v3.6l0,0c0,1,0.5,2.1,1.3,2.9l5.1,5.1c1.2,1.2,2,1.2,3.2,0l5.1-5.1C24.4,24.5,24.8,23.5,24.8,22.5z M6.6,22.7L6.6,22.7c0-1.5,0-2.3,0-3.9c0-3.7,3-6.7,6.7-6.7h7.2c3.4,0,6.2,2.5,6.7,5.9c0,0.1,0,0.2,0,0.4V19l0,0c0,1.5,0,2.3,0,3.9l0,0c-0.1,1.6-0.8,3.1-2,4.3l-5.1,5.1c-2.4,2.4-4.2,2.4-6.5,0l-5.1-5.1C7.3,25.8,6.7,24.3,6.6,22.7L6.6,22.7z"/><path d="M17.7,20.2c-0.2-0.2-0.5-0.4-0.8-0.4l0,0c-0.3,0-0.6,0.2-0.8,0.4c-0.2,0.2-0.4,0.5-0.4,0.8c0,0.4,0.2,0.6,0.4,0.8c0.2,0.3,0.5,0.4,0.8,0.4l0,0c0.3,0,0.6-0.2,0.8-0.4c0.3-0.2,0.4-0.5,0.4-0.8C18.1,20.7,18,20.4,17.7,20.2z M19.4,23.5c-0.7,0.7-1.5,1-2.5,1s-1.9-0.4-2.5-1c-0.7-0.7-1-1.5-1-2.5s0.4-1.9,1-2.5c0.7-0.7,1.5-1,2.5-1s1.9,0.4,2.5,1c0.7,0.7,1,1.5,1,2.5S20,22.9,19.4,23.5z"/>
                    </svg>
                </div>
                <div class="social__middle">
                    <a href="https://facebook.com/vtellofficial/" rel="noopener noreferrer" target="_blank"><img class="icon social-icon" src="../assets/SVG/footer/footerFB.svg" alt="facebook icon"></a> 
                    <a href=" https://instagram.com/vtellofficial/" rel="noopener noreferrer" target="_blank"><img class="icon social-icon" src="../assets/SVG/footer/footerIG.svg" alt="instagram icon"></a>
                    <a href=" https://linkedin.com/company/v-tell-group/" rel="noopener noreferrer" target="_blank"><img class="icon social-icon" src="../assets/SVG/footer/footerLI.svg" alt="linkedin icon"></a>
                    <a href=" https://twitter.com/VTellGroup" rel="noopener noreferrer" target="_blank"><img class="icon social-icon" src="../assets/SVG/footer/footerTWIT.svg" alt="twitter icon"></a>
                    <a href="https://t.me/vtell" rel="noopener noreferrer" target="_blank"><img class="icon social-icon" src="../assets/SVG/footer/footerTELEGRAM.svg" alt="telegram icon"></a>
                    <a href="https://youtube.com" rel="noopener noreferrer" target="_blank"><img class="icon social-icon" src="../assets/SVG/footer/footerYT.svg" alt="youtube icon"></a>
                </div>
                <div class="social__right">
                    <img @click.prevent="launchModal('call')" class="icon social-icon" src="../assets/SVG/footer/headphones.svg" alt="phone numbers icon">
                    <img @click.prevent="launchModal('mssg')" class="icon social-icon" src="../assets/SVG/footer/footerMSG.svg" alt="mail icon">
                </div>
            </div>
            <div v-if="footerPanel == 1" class="footer__content mt-1">
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
            <div v-if="footerPanel == 2" class="footer__content mt-1">
                <div class="footer__content--entry">
                <div class="city">service@v-tell.com</div>
                </div> 
            </div>
            <div v-if="footerPanel == 3" class="footer__content footer__content--address-panel-3 mt-1">
                <div class="footer__content--entry">
                <div class="city">GLOBEX TELEСOM GROUP LIMITED</div>
                <div class="number">Unit 1016, 10/F., Star House, 3 Salisbury Road,<br>Tsimshatsui, Kowloon, Hong Kong</div>
                </div>
                <div class="footer__content--entry">
                <div class="city">SKYTELL BV</div>
                <div class="number">Wisselweg 33<br>1314 CB, Almere, The Netherlands</div>
                </div>
                <div class="footer__content--entry">
                <div class="city">GLOTELL US, CORP.</div>
                <div class="number">1001 North Federal Hwy., Suite 102<br>Hallandale Beach, FL 33009, USA</div>
                </div>
                <div class="footer__content--entry">
                <div class="city">SKYTELL FZ, LLC.</div>
                <div class="number">P.O. Box 73030<br>Dubai Internet City, Dubai, UAE</div>
                </div>
                <div class="footer__content--entry">
                <div class="city">SkyTell A.G.</div>
                <div class="number">Gotthardstrasse 3<br>6300 Zug, Switzerland</div>
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

        <button class="footer__btn mt-1 mb-1">Become customer</button>
        <div class="social__top mb-1">
            <svg @click.prevent="footerPanel = 1" class="social-icon icon"  :class="{iconActive: activePanel == 1}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" alt="phone numbers icon">
                <path d="M22.6,6a5,5,0,0,1,1.3,2.5,4.19,4.19,0,0,1-.2,2.7h0a1.17,1.17,0,0,1-1.1.8,1.11,1.11,0,0,1-1.1-1.1,1.07,1.07,0,0,1,.2-.6h0v-.2a2.25,2.25,0,0,0-.1-1.2,2.59,2.59,0,0,0-.7-1.1,2.38,2.38,0,0,0-1.1-.6,1.65,1.65,0,0,0-1.2,0h-.2a1.42,1.42,0,0,1-.6.2,1.11,1.11,0,0,1-1.1-1.1,1.17,1.17,0,0,1,.8-1.1h0a4.94,4.94,0,0,1,2.7-.3A3.19,3.19,0,0,1,22.6,6Z" />
                <path d="M18.7,23.11v4.1a4.44,4.44,0,0,1-4.4,4.4H6.9a4.44,4.44,0,0,1-4.4-4.4v-4H0v3.3H0v.8a6.87,6.87,0,0,0,6.8,6.8h7.4a7,7,0,0,0,6.8-6v-.9h0v-4l-2.3-.1Z" />
                <path d="M18.7,19.71v-4a4.44,4.44,0,0,0-4.4-4.4H7a4.44,4.44,0,0,0-4.4,4.4v4H.2v-3.3h0v-.8A6.87,6.87,0,0,1,7,8.81h7.4a7,7,0,0,1,6.8,5.9v.9h0v4H18.7Z" />
                <path d="M25.8,2.81a9.38,9.38,0,0,1,2.8,5.7,9.16,9.16,0,0,1-1.5,6.2l-.3.3h0a1,1,0,0,1-.9.4,1.11,1.11,0,0,1-1.1-1.1,1.49,1.49,0,0,1,.4-.9h0l.2-.3a7.19,7.19,0,0,0-1.1-8.9,7.45,7.45,0,0,0-4.3-2,7.81,7.81,0,0,0-4.7,1.1l-.3.2h0a1.27,1.27,0,0,1-.9.4A1.11,1.11,0,0,1,13,2.81a1.23,1.23,0,0,1,.4-.8h0l.1-.1.2-.2A9.62,9.62,0,0,1,19.8,0,9.92,9.92,0,0,1,25.8,2.81Z" />
                </svg>
                <svg @click.prevent="footerPanel = 2" class="social-icon icon"  :class="{iconActive: activePanel == 2}" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 34 34">
                <path d="M26.6,16.6c-2.2,2.2-4.3,4.3-6.5,6.5c-1.8,1.8-4.7,1.8-6.5,0c-2.1-2.1-4.3-4.3-6.5-6.5c0.8-1.2,2.2-2,3.8-2c3.9,0,7.9,0,11.8,0C24.4,14.6,25.8,15.4,26.6,16.6z M11.8,24.9c2.8,2.8,7.3,2.8,10.1,0c2.5-2.5,5.2-5.2,7.7-7.7c-0.8-2.7-3.1-4.7-6-5c-0.1,0-0.2,0-0.4,0c-4.1,0-8.2,0-12.4,0c-3.2,0-6,2.2-6.9,5.1C6.6,19.8,9.2,22.3,11.8,24.9L11.8,24.9z M27.4,22.9v3.9c0,2.5-2.1,4.6-4.6,4.6c-3.9,0-7.9,0-11.8,0c-2.5,0-4.6-2.1-4.6-4.6v-3.9l-2.5-2.5v6.5c0,3.6,2.7,6.6,6.3,7.1c0.1,0,0.2,0,0.4,0c4.1,0,8.2,0,12.4,0c3.9,0,7.1-3.2,7.1-7.1v-6.5L27.4,22.9L27.4,22.9z"/>
                </svg>
                <svg @click.prevent="footerPanel = 3" class="social-icon icon"  :class="{iconActive: activePanel == 3}"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
                <path class="st0" d="M24.8,22.5v-3.6c0-2.4-2-4.3-4.3-4.3h-7.2c-2.4,0-4.3,2-4.3,4.3v3.6l0,0c0,1,0.5,2.1,1.3,2.9l5.1,5.1c1.2,1.2,2,1.2,3.2,0l5.1-5.1C24.4,24.5,24.8,23.5,24.8,22.5z M6.6,22.7L6.6,22.7c0-1.5,0-2.3,0-3.9c0-3.7,3-6.7,6.7-6.7h7.2c3.4,0,6.2,2.5,6.7,5.9c0,0.1,0,0.2,0,0.4V19l0,0c0,1.5,0,2.3,0,3.9l0,0c-0.1,1.6-0.8,3.1-2,4.3l-5.1,5.1c-2.4,2.4-4.2,2.4-6.5,0l-5.1-5.1C7.3,25.8,6.7,24.3,6.6,22.7L6.6,22.7z"/><path d="M17.7,20.2c-0.2-0.2-0.5-0.4-0.8-0.4l0,0c-0.3,0-0.6,0.2-0.8,0.4c-0.2,0.2-0.4,0.5-0.4,0.8c0,0.4,0.2,0.6,0.4,0.8c0.2,0.3,0.5,0.4,0.8,0.4l0,0c0.3,0,0.6-0.2,0.8-0.4c0.3-0.2,0.4-0.5,0.4-0.8C18.1,20.7,18,20.4,17.7,20.2z M19.4,23.5c-0.7,0.7-1.5,1-2.5,1s-1.9-0.4-2.5-1c-0.7-0.7-1-1.5-1-2.5s0.4-1.9,1-2.5c0.7-0.7,1.5-1,2.5-1s1.9,0.4,2.5,1c0.7,0.7,1,1.5,1,2.5S20,22.9,19.4,23.5z"/>
            </svg>
        </div>
        <div v-if="footerPanel == 1" class="footer__content mt-1">
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
        <div v-if="footerPanel == 2" class="footer__content mt-1">
            <div class="footer__content--entry">
                <div class="city">service@v-tell.com</div>
            </div> 
        </div>
        <div v-if="footerPanel == 3" class="footer__content footer__content--address-panel-3 mt-1">
            <div class="footer__content--entry">
            <div class="city">GLOBEX TELEСOM GROUP LIMITED</div>
            <div class="number">Unit 1016, 10/F., Star House, 3 Salisbury Road,<br>Tsimshatsui, Kowloon, Hong Kong</div>
            </div>
            <div class="footer__content--entry">
            <div class="city">SKYTELL BV</div>
            <div class="number">Wisselweg 33<br>1314 CB, Almere, The Netherlands</div>
            </div>
            <div class="footer__content--entry">
            <div class="city">GLOTELL US, CORP.</div>
            <div class="number">1001 North Federal Hwy., Suite 102<br>Hallandale Beach, FL 33009, USA</div>
            </div>
            <div class="footer__content--entry">
            <div class="city">SKYTELL FZ, LLC.</div>
            <div class="number">P.O. Box 73030<br>Dubai Internet City, Dubai, UAE</div>
            </div>
            <div class="footer__content--entry">
            <div class="city">SkyTell A.G.</div>
            <div class="number">Gotthardstrasse 3<br>6300 Zug, Switzerland</div>
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
            <a href="https://facebook.com/vtellofficial/" rel="noopener noreferrer" target="_blank"><img class="icon social-icon" src="../assets/SVG/footer/footerFB.svg" alt="facebook icon"></a> 
            <a href=" https://instagram.com/vtellofficial/" rel="noopener noreferrer" target="_blank"><img class="icon social-icon" src="../assets/SVG/footer/footerIG.svg" alt="instagram icon"></a>
            <a href=" https://linkedin.com/company/v-tell-group/" rel="noopener noreferrer" target="_blank"><img class="icon social-icon" src="../assets/SVG/footer/footerLI.svg" alt="linkedin icon"></a>
            <a href=" https://twitter.com/VTellGroup"  rel="noopener noreferrer" target="_blank"><img class="icon social-icon" src="../assets/SVG/footer/footerTWIT.svg" alt="twitter icon"></a>
            <a href="https://t.me/vtell" rel="noopener noreferrer" target="_blank"><img class="icon social-icon" src="../assets/SVG/footer/footerTELEGRAM.svg" alt="telegram icon"></a>
            <a href="https://youtube.com" rel="noopener noreferrer" target="_blank"><img class="icon social-icon" src="../assets/SVG/footer/footerYT.svg" alt="youtube icon"></a>
        </div>
    </div>
     
</div>
</template>

<script>
import { bus } from '../main';
export default {
    data() {
        return {
            windowWidth: 0,
            footerPanel: 1,
        }
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        launchModal(type) {
            bus.$emit('launchMssg', type);
        }
    },
    computed: {
        activePanel() {
            return this.footerPanel;
        }
    },
     created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize()
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
      this.sliderTimer = null;
    }

}
</script>

<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';
@import '../scss/_utilities.scss';


.icon {
    cursor: pointer;
    fill: white;
    filter: opacity(100%);
    transition: all .4s;
    &:hover {
        filter: opacity(50%);
    }

    &Active {
        fill: $red;
    }
}


.footer {
    background-image: url("../assets/img/footer.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    overflow: hidden;
    height: 100%;
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
        min-height: 40vh;
        
        @media(max-width: 768px) {
            margin: 0 1rem;
        }

        &--entry {
            margin: 1rem 0;
            @media(max-width: 768px) {
                margin: 0;
            }

            & > * {
                margin: .3rem 0;
                @media(max-width: 768px) {
                    margin: .2rem 0;
                }
            }
        }

        &--address-panel-3 {
            & .city {
                font-size: 14px;
            }
            & .number {
                font-size: 14px;
            }
        }
    }

    &__copyright {
        position: relative;
        bottom: calc(100% / 7);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &__btn {
        background: $red;
        color: white;
        border: 1px solid transparent;
        padding: 15px;  
        width: 250px;      
        border-radius: 35px;
        font-size: 20px;
        line-height: 20px;

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

        & a.social-icon {
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

            @media(max-width: 768px) {
                margin: .1rem 0rem;
            }

            & .social-icon {
                width: 9%;
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
            margin-bottom: 1rem;
        }
    }

    & .footer__content {
        width: 100%;
        text-align: center;
        min-height: calc(100% / 3);

        &--entry {
            display: flex;
            align-items: center;
            justify-content: center;

             @media(max-width: 768px) {
                display: flex;
                flex-direction: column;
            }
        }

        & .city {
            margin-right: 1rem;
            font-weight: bold;
        }
    }

        &--address-panel-3 {
           
            & .city {
                font-size: 14px;
            }
            & .number {
                font-size: 14px;
            }
        }

    & .footer__copyright {
        margin-bottom: 1rem;
    }
}



</style>