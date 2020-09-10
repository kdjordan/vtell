<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in">
        <router-view />
    </transition>
    <Footer />
    <transition name="fade" mode="out-in">
        <MssgModal v-if="mssgModal" />
    </transition>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MssgModal from '@/components/MssgModal';
import { bus } from './main';
export default {
    components: {
        Header,
        Footer,
        MssgModal
    },
    data() {
        return {
            mssgModal: false
        }
    },
    created() {
        bus.$on('launchMssg', () => {
            this.mssgModal = !this.mssgModal;
        })
    }
}
</script>

<style lang="scss">
@import './scss/_variables.scss';
@import './scss/_base.scss';

#app {
  overflow: hidden;
}
@font-face {
    font-family: "Pf_Beau";
    src: local("PF_Beau"),
     url(./fonts/PFBeauSansPro-Regular.ttf) format("truetype");
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
