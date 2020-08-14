<template>
  <div id="app">
    <Nav />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view /> -->
    <Hero />
    <Privilege />
    <Advantages />
    <About />
    <Tariffs />
    <Sim />
    <Countries />
    <Footer />
  </div>
</template>

<script>
import Nav from './components/Nav'
import Footer from './components/Footer'
import Countries from './components/Countries'
import Sim from './components/Sim'
import Tariffs from './components/Tariffs'
import About from './components/About'
import Advantages from './components/Advantages'
import Privilege from './components/Privilege'
import Hero from './components/Hero'

export default {
  components: {
    Nav,
    Hero,
    Privilege,
    Advantages,
    About,
    Tariffs,
    Sim,
    Countries,
    Footer
  }
}
</script>

<style lang="scss">
@import './scss/_variables.scss';
@import './scss/_base.scss';

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
