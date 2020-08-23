<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer
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

  .btn__primary {
    background: $red;
    color: $white;
    font-size: 20px;
    font-weight: 300;
    border: none;
    border-radius: 35px;
    padding: 15px 0;
    width: 250px;
}

.border {
    display: block;
    background-image: url('./assets/img/border.png');
    background-position: center;
    // height: 80px;
    
    &__container {
        position: relative;
        right: 380px;

        &--priv-adjust {
          right: 255px;
        }
    }

    &__cube {
       
        margin-top: 10px;
        height: 50px;
    }

    &__title {
        font-size: 25px;
        display: inline-block;
        color: white;
        position: relative;
        bottom: 20px;
        left: 70px;
        
    }
}

</style>
